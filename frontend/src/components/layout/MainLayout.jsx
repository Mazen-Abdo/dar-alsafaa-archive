import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Footer from './Footer';
import { useApp } from '../../context/AppContext';
import Drawer from '../common/Drawer';
import Modal from '../common/Modal';
import Button from '../common/Button';

export const MainLayout = () => {
  const { activeDrawer, closeDrawer, activeModal, closeModal } = useApp();

  return (
    <div className="min-h-screen bg-background text-on-surface flex" dir="rtl">

      {/* ===== Fixed RTL Sidebar ===== */}
      <Sidebar />

      {/* ===== Main Content Area (offset by sidebar width 280px) ===== */}
      <div className="flex-1 flex flex-col min-h-screen mr-[280px] bg-background transition-all duration-300">

        {/* ===== Sticky Top Navigation ===== */}
        <TopNav />

        {/* ===== Page Content (React Router Outlet) ===== */}
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <Outlet />
        </main>

        {/* ===== Footer ===== */}
        <Footer />
      </div>

      {/* ===== Global Drawer Overlay ===== */}
      {activeDrawer && (
        <Drawer
          isOpen
          onClose={closeDrawer}
          title={activeDrawer.data?.title || 'تفاصيل العنصر'}
          subtitle={activeDrawer.data?.subtitle}
          footer={
            <>
              <Button variant="outline" className="flex-1" onClick={closeDrawer}>إغلاق</Button>
              {activeDrawer.data?.primaryAction && (
                <Button variant="primary" className="flex-1" onClick={activeDrawer.data.primaryAction.onClick}>
                  {activeDrawer.data.primaryAction.label}
                </Button>
              )}
            </>
          }
        >
          {activeDrawer.data?.content ?? (
            <p className="text-body-md text-on-surface-variant">
              يتم عرض التفاصيل هنا بشكل ديناميكي.
            </p>
          )}
        </Drawer>
      )}

      {/* ===== Global Modal Overlay ===== */}
      {activeModal && (
        <Modal
          isOpen
          onClose={closeModal}
          title={activeModal.data?.title || 'إجراء النظام'}
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>إلغاء</Button>
              <Button
                variant={activeModal.data?.confirmVariant || 'primary'}
                onClick={() => {
                  activeModal.data?.onConfirm?.();
                  closeModal();
                }}
              >
                {activeModal.data?.confirmLabel || 'تأكيد'}
              </Button>
            </>
          }
        >
          <p className="text-body-md text-on-surface">
            {activeModal.data?.message || 'هل أنت متأكد من تنفيذ هذا الإجراء؟'}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default MainLayout;

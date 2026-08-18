import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useApp, ROLE_NAV_MAP } from '../../context/AppContext';
import { useToast } from '../../context/ToastContext';
import {
  LayoutDashboard, UploadCloud, FolderArchive, BarChart3,
  Users, Building2, ShieldCheck, Settings, ListTodo,
  Bell, HelpCircle, LogOut, ScanText
} from 'lucide-react';

const ALL_NAV_ITEMS = [
  { to: '/dashboard',             label: 'لوحة التحكم',              icon: LayoutDashboard },
  { to: '/archive',               label: 'الأرشيف الإلكتروني',       icon: FolderArchive },
  { to: '/data-ops/ocr',          label: 'معالجة OCR',               icon: ScanText },
  { to: '/data-ops/excel-import', label: 'استيراد الأكسل',           icon: UploadCloud },
  { to: '/reports',               label: 'التقارير والتحليلات',       icon: BarChart3 },
  { to: '/task-queue',            label: 'طابور المهام والاعتمادات',  icon: ListTodo },
  { to: '/users-permissions',     label: 'المستخدمون والصلاحيات',    icon: Users },
  { to: '/organization',          label: 'القطاعات والفروع',          icon: Building2 },
  { to: '/audit-log',             label: 'سجل التدقيق والرقابة',     icon: ShieldCheck },
  { to: '/notifications',         label: 'مركز التنبيهات',           icon: Bell },
  { to: '/settings',              label: 'إعدادات النظام',           icon: Settings },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { currentUser, logout, notificationsCount, activeBranch } = useApp();
  const { showToast } = useToast();

  const allowedPaths = currentUser ? ROLE_NAV_MAP[currentUser.role] : [];
  const visibleItems = ALL_NAV_ITEMS.filter(item => {
    if (allowedPaths === null) return true;
    return allowedPaths?.some(p => item.to.startsWith(p));
  });

  const handleLogout = () => {
    logout();
    showToast('تم تسجيل الخروج بنجاح', 'info');
    navigate('/login', { replace: true });
  };

  return (
    <aside
      className="fixed right-0 top-0 h-full w-[280px] flex flex-col z-30
                 bg-[#0f2720] dark:bg-[#0a1a14]
                 border-l border-white/10 dark:border-white/5
                 shadow-xl transition-colors duration-200"
    >
      {/* ── Brand ── */}
      <div className="p-5 border-b border-white/10 dark:border-white/5">
        <button onClick={() => navigate('/dashboard')} className="group flex flex-col items-center gap-2 w-full">
          <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center group-hover:bg-white/15 transition-colors">
            <Building2 className="w-7 h-7 text-primary-fixed-dim" />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-base text-white group-hover:text-primary-fixed-dim transition-colors">
              دار الصفاء الذكية
            </h1>
            <p className="text-[11px] text-white/40 mt-0.5">نظام الأرشيف والرقابة</p>
          </div>
        </button>
      </div>

      {/* ── Active branch pill ── */}
      {activeBranch && (
        <div className="mx-3 mt-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-fixed-dim flex-shrink-0 animate-pulse" />
          <div className="min-w-0">
            <p className="text-[10px] text-white/40 uppercase tracking-wide">الفرع النشط</p>
            <p className="text-xs text-white/80 font-medium truncate">{activeBranch.name}</p>
          </div>
        </div>
      )}

      {/* ── Nav links ── */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-3 hide-scrollbar">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-primary text-on-primary font-semibold shadow-sm shadow-primary/30'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? 'text-on-primary' : 'text-white/60 group-hover:text-white'}`} />
                  <span className="truncate">{item.label}</span>
                  {item.to === '/notifications' && notificationsCount > 0 && (
                    <span className="mr-auto w-5 h-5 rounded-full bg-error text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {notificationsCount}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="p-3 border-t border-white/10 dark:border-white/5 space-y-0.5">
        {currentUser && (
          <button
            onClick={() => navigate('/profile')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-colors text-white/60 hover:text-white"
          >
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold flex-shrink-0">
              {currentUser.name.charAt(0)}
            </div>
            <div className="min-w-0 text-right">
              <p className="text-xs font-medium text-white/80 truncate">{currentUser.name}</p>
              <p className="text-[10px] text-white/40 truncate">{currentUser.roleLabel}</p>
            </div>
          </button>
        )}

        <NavLink
          to="/help"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
              isActive ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white hover:bg-white/8'
            }`
          }
        >
          <HelpCircle className="w-4 h-4" />
          <span>الدعم الفني</span>
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 text-red-400 hover:text-red-300 px-3 py-2 rounded-lg text-sm hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

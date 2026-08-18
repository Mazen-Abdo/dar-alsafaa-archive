import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { useApp } from '../context/AppContext';
import {
  Building2,
  Plus,
  Search,
  Edit,
  Trash2,
  MapPin,
  Users,
  FolderArchive,
  ChevronDown,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { branches } from '../data/mockData';
import { Modal } from '../components/common/Modal';

// ─── Static Data ───────────────────────────────────────────────────────────────

const sectors = [
  {
    id: 's1',
    name: 'قطاع الفنادق والضيافة',
    icon: '🏨',
    branchCount: 45,
    docCount: '12,450',
    color: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    iconBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    branches: [
      { id: 'sb1', name: 'فندق النخيل الكبير - الرياض', code: 'HOT-RUH-01', region: 'الوسطى', docs: '3,200', status: 'نشط' },
      { id: 'sb2', name: 'منتجع البحر الأزرق - جدة', code: 'HOT-JED-02', region: 'الغربية', docs: '2,850', status: 'نشط' },
      { id: 'sb3', name: 'فندق القمة - الدمام', code: 'HOT-DMM-03', region: 'الشرقية', docs: '1,940', status: 'تحت الصيانة' },
    ],
  },
  {
    id: 's2',
    name: 'قطاع المطاعم والمقاهي',
    icon: '🍽️',
    branchCount: 38,
    docCount: '8,920',
    color: 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800',
    iconBg: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
    branches: [
      { id: 'sb4', name: 'سلسلة مطاعم الأصالة - الرياض', code: 'RST-RUH-01', region: 'الوسطى', docs: '2,100', status: 'نشط' },
      { id: 'sb5', name: 'كافيه الشروق - جدة', code: 'CAF-JED-02', region: 'الغربية', docs: '1,450', status: 'نشط' },
      { id: 'sb6', name: 'مطعم البيت العربي - مكة', code: 'RST-MKH-03', region: 'الغربية', docs: '980', status: 'نشط' },
    ],
  },
  {
    id: 's3',
    name: 'قطاع العقارات والتطوير',
    icon: '🏗️',
    branchCount: 22,
    docCount: '6,340',
    color: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    branches: [
      { id: 'sb7', name: 'شركة الإنشاء الذهبي - الرياض', code: 'REA-RUH-01', region: 'الوسطى', docs: '2,400', status: 'نشط' },
      { id: 'sb8', name: 'مكتب التطوير العقاري - جدة', code: 'REA-JED-02', region: 'الغربية', docs: '1,890', status: 'تحت الصيانة' },
      { id: 'sb9', name: 'مجمع الأبراج - الدمام', code: 'REA-DMM-03', region: 'الشرقية', docs: '1,100', status: 'نشط' },
    ],
  },
  {
    id: 's4',
    name: 'قطاع الموارد البشرية',
    icon: '👥',
    branchCount: 17,
    docCount: '3,100',
    color: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
    iconBg: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
    branches: [
      { id: 'sb10', name: 'إدارة الموارد البشرية - الرياض', code: 'HR-RUH-01', region: 'الوسطى', docs: '1,400', status: 'نشط' },
      { id: 'sb11', name: 'مركز التوظيف - جدة', code: 'HR-JED-02', region: 'الغربية', docs: '980', status: 'نشط' },
      { id: 'sb12', name: 'قسم التدريب - أبها', code: 'HR-AHB-03', region: 'الجنوبية', docs: '520', status: 'تحت الصيانة' },
    ],
  },
];

// Extended branches list for the Branches tab
const allBranches = [
  ...branches.map((b) => ({ ...b, docs: '1,200', sector: 'قطاع الفنادق والضيافة' })),
  { id: 'b5', name: 'فرع مكة - العزيزية', code: 'MKH-05', region: 'الغربية', status: 'نشط', docs: '890', sector: 'قطاع المطاعم والمقاهي' },
  { id: 'b6', name: 'فرع المدينة - قرطبة', code: 'MED-06', region: 'الغربية', status: 'نشط', docs: '540', sector: 'قطاع العقارات والتطوير' },
  { id: 'b7', name: 'فرع الطائف - الشفا', code: 'TAF-07', region: 'الغربية', status: 'تحت الصيانة', docs: '210', sector: 'قطاع الموارد البشرية' },
];

// ─── StatusBadge ───────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const isActive = status === 'نشط';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isActive
          ? 'bg-primary-fixed text-primary'
          : 'bg-[#fff3cd] text-[#6a3700] dark:bg-orange-900/30 dark:text-orange-300'
      }`}
    >
      {isActive ? (
        <CheckCircle className="w-3 h-3" />
      ) : (
        <span className="w-2 h-2 rounded-full bg-[#ff9939] inline-block" />
      )}
      {status}
    </span>
  );
};

// ─── SectorCard ────────────────────────────────────────────────────────────────

const SectorCard = ({ sector, isExpanded, onToggle, onEdit, onDelete, onView, searchQuery }) => {
  const filteredBranches = sector.branches.filter(
    (b) =>
      b.name.includes(searchQuery) ||
      b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.region.includes(searchQuery)
  );

  return (
    <div className={`rounded-xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md ${sector.color}`}>
      {/* Sector Header */}
      <button
        onClick={onToggle}
        className="w-full text-right p-5 flex items-center justify-between gap-4 focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${sector.iconBg} flex-shrink-0`}>
            {sector.icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-on-surface">{sector.name}</h3>
            <div className="flex items-center gap-4 mt-1 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {sector.branchCount} فرع
              </span>
              <span className="flex items-center gap-1">
                <FolderArchive className="w-3.5 h-3.5" />
                {sector.docCount} مستند
              </span>
            </div>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expanded Branches */}
      {isExpanded && (
        <div className="bg-surface-container-lowest border-t border-outline-variant/30">
          {filteredBranches.length === 0 ? (
            <div className="py-6 text-center text-on-surface-variant text-sm">لا توجد فروع تطابق البحث</div>
          ) : (
            <div className="divide-y divide-outline-variant/20">
              {filteredBranches.map((branch) => (
                <div key={branch.id} className="flex items-center justify-between px-5 py-3 hover:bg-surface-container/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm font-medium text-on-surface">{branch.name}</p>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-on-surface-variant">
                        <span className="font-mono bg-surface-container px-1.5 py-0.5 rounded">{branch.code}</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3" /> {branch.region}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <FolderArchive className="w-3 h-3" /> {branch.docs} مستند
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={branch.status} />
                    <button
                      onClick={() => onView(branch)}
                      className="w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                      title="عرض"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onEdit(branch)}
                      className="w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                      title="تعديل"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(branch)}
                      className="w-7 h-7 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                      title="حذف"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const Organization = () => {
  const { showToast } = useToast();
  const { openDrawer, openModal, closeModal, activeModal } = useApp();

  const [activeTab, setActiveTab] = useState('sectors');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSector, setExpandedSector] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // ── Derived filtered data ──

  const filteredAllBranches = allBranches.filter(
    (b) =>
      b.name.includes(searchQuery) ||
      b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.region.includes(searchQuery)
  );

  const filteredSectors = sectors.map((s) => ({
    ...s,
    branches: s.branches.filter(
      (b) =>
        b.name.includes(searchQuery) ||
        b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.region.includes(searchQuery)
    ),
  }));

  // ── Handlers ──

  const handleToggleSector = (id) => {
    setExpandedSector((prev) => (prev === id ? null : id));
  };

  const handleAddClick = () => {
    if (activeTab === 'sectors') {
      openDrawer('addBranch', { title: 'إضافة قطاع جديد', subtitle: 'أدخل بيانات القطاع' });
      showToast('فتح نموذج إضافة قطاع جديد', 'info');
    } else {
      openDrawer('addBranch', { title: 'إضافة فرع جديد', subtitle: 'أدخل بيانات الفرع' });
      showToast('فتح نموذج إضافة فرع جديد', 'info');
    }
  };

  const handleEditBranch = (branch) => {
    openDrawer('editBranch', { title: 'تعديل بيانات الفرع', subtitle: branch.name, branch });
    showToast(`جاري تعديل: ${branch.name}`, 'info');
  };

  const handleDeleteBranch = (branch) => {
    setDeleteTarget(branch);
    openModal('confirmDelete', { branch });
  };

  const handleConfirmDelete = () => {
    showToast(`تم حذف الفرع: ${deleteTarget?.name}`, 'success');
    setDeleteTarget(null);
    closeModal();
  };

  const handleViewBranch = (branch) => {
    openDrawer('branchDetails', { title: 'تفاصيل الفرع', subtitle: branch.code, branch });
  };

  // ── KPI cards ──
  const kpis = [
    { label: 'إجمالي القطاعات', value: '4', icon: Building2, bg: 'bg-primary/10 text-primary' },
    { label: 'إجمالي الفروع', value: '122', icon: Users, bg: 'bg-secondary/10 text-secondary' },
    { label: 'الفروع النشطة', value: '106', icon: CheckCircle, bg: 'bg-primary-fixed text-primary' },
    { label: 'إجمالي المستندات', value: '30,810', icon: FolderArchive, bg: 'bg-surface-container text-on-surface-variant' },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-surface">
      <div className="p-6 max-w-[1400px] mx-auto">

        {/* ── Page Header ── */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-1">
              <span>الرئيسية</span>
              <span>/</span>
              <span className="text-primary font-medium">القطاعات والفروع</span>
            </nav>
            <h2 className="text-2xl font-bold text-on-surface">القطاعات والفروع</h2>
            <p className="text-sm text-on-surface-variant mt-1">إدارة هيكل المنظمة وفروعها التشغيلية</p>
          </div>
          <button
            onClick={handleAddClick}
            className="h-10 px-5 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
          >
            <Plus className="w-4 h-4" />
            {activeTab === 'sectors' ? 'إضافة قطاع' : 'إضافة فرع'}
          </button>
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${kpi.bg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant mb-0.5">{kpi.label}</p>
                  <p className="text-2xl font-bold text-on-surface">{kpi.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Tab Bar + Search ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex bg-surface-container rounded-xl p-1 gap-1">
            {[
              { key: 'sectors', label: 'القطاعات' },
              { key: 'branches', label: 'الفروع' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeTab === 'sectors' ? 'بحث في القطاعات والفروع...' : 'بحث عن فرع...'}
              className="bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary w-64 transition-colors"
            />
          </div>
        </div>

        {/* ── Sectors Tab ── */}
        {activeTab === 'sectors' && (
          <div className="space-y-4">
            {filteredSectors.map((sector) => (
              <SectorCard
                key={sector.id}
                sector={sector}
                isExpanded={expandedSector === sector.id}
                onToggle={() => handleToggleSector(sector.id)}
                onEdit={handleEditBranch}
                onDelete={handleDeleteBranch}
                onView={handleViewBranch}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        )}

        {/* ── Branches Tab ── */}
        {activeTab === 'branches' && (
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center">
              <h3 className="font-semibold text-on-surface">دليل الفروع الكامل</h3>
              <span className="text-sm text-on-surface-variant">{filteredAllBranches.length} فرع</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/50">
                    {['الاسم', 'الكود', 'القطاع', 'المنطقة', 'المستندات', 'الحالة', 'الإجراء'].map((col) => (
                      <th key={col} className="py-3 px-4 text-xs font-semibold text-on-surface-variant whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {filteredAllBranches.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-10 text-center text-on-surface-variant text-sm">
                        لا توجد فروع تطابق البحث
                      </td>
                    </tr>
                  ) : (
                    filteredAllBranches.map((branch, idx) => (
                      <tr
                        key={branch.id}
                        className={`hover:bg-surface-container/40 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}
                      >
                        <td className="py-3 px-4 whitespace-nowrap">
                          <p className="text-sm font-medium text-on-surface">{branch.name}</p>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-mono text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                            {branch.code}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{branch.sector}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="flex items-center gap-1 text-sm text-on-surface-variant">
                            <MapPin className="w-3.5 h-3.5" />
                            {branch.region}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="flex items-center gap-1 text-sm text-on-surface-variant">
                            <FolderArchive className="w-3.5 h-3.5" />
                            {branch.docs}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <StatusBadge status={branch.status} />
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleViewBranch(branch)}
                              className="w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                              title="عرض"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleEditBranch(branch)}
                              className="w-7 h-7 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                              title="تعديل"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteBranch(branch)}
                              className="w-7 h-7 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                              title="حذف"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* Table footer */}
            <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center text-sm text-on-surface-variant">
              <span>عرض {filteredAllBranches.length} من أصل {allBranches.length} فرع</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Delete Confirmation Modal ── */}
      <Modal
        isOpen={activeModal?.type === 'confirmDelete'}
        onClose={closeModal}
        title="تأكيد الحذف"
        footer={
          <>
            <button
              onClick={closeModal}
              className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-colors text-sm"
            >
              إلغاء
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-5 py-2 rounded-lg bg-error text-white hover:opacity-90 transition-opacity text-sm font-medium"
            >
              تأكيد الحذف
            </button>
          </>
        }
      >
        <div className="flex flex-col items-center gap-4 py-2">
          <div className="w-14 h-14 rounded-full bg-error-container flex items-center justify-center">
            <Trash2 className="w-7 h-7 text-error" />
          </div>
          <div className="text-center">
            <p className="text-on-surface font-medium mb-1">هل أنت متأكد من حذف هذا الفرع؟</p>
            <p className="text-on-surface-variant text-sm">
              سيتم حذف الفرع <strong>{deleteTarget?.name}</strong> بشكل نهائي ولا يمكن التراجع.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Organization;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  Search, Upload, Download, Grid, List, Filter, Folder, FileText,
  File, FileSpreadsheet, Image, Eye, MoreVertical, Plus,
  ChevronDown
} from 'lucide-react';

// ── Folder / sector data ──────────────────────────────────────────────────────
const sectorFolders = [
  { id: 'f1', name: 'قطاع المطاعم',       count: '1,245', icon: '🍽️', color: 'bg-[#fff3e0] text-[#e65100]', border: 'border-[#ff9939]' },
  { id: 'f2', name: 'قطاع الفنادق',       count: '892',   icon: '🏨', color: 'bg-[#e8f5e9] text-primary',   border: 'border-primary' },
  { id: 'f3', name: 'الشؤون القانونية',   count: '430',   icon: '⚖️', color: 'bg-[#ede7f6] text-[#512da8]', border: 'border-[#708cfd]' },
  { id: 'f4', name: 'الموارد البشرية',    count: '3,100', icon: '👥', color: 'bg-surface-container text-secondary', border: 'border-secondary' },
];

// ── Sample file data ──────────────────────────────────────────────────────────
const allFiles = [
  {
    id: 'F-001', name: 'تقرير الأرباح السنوي 2023.pdf', type: 'pdf', tab: 'financial',
    date: '2026-08-08', size: '1.2 MB', branch: 'الرياض', category: 'مالي',
    badge: 'مؤرشف', badgeColor: 'bg-[#e6f4ef] text-primary',
  },
  {
    id: 'F-002', name: 'عقد توريد أجهزة خوادم 2026.docx', type: 'docx', tab: 'contracts',
    date: '2026-08-07', size: '340 KB', branch: 'جدة', category: 'العقود',
    badge: 'قيد الاعتماد', badgeColor: 'bg-[#fff3cd] text-[#6a3700]',
  },
  {
    id: 'F-003', name: 'كشف رواتب يوليو 2026.xlsx', type: 'xlsx', tab: 'financial',
    date: '2026-08-06', size: '220 KB', branch: 'الدمام', category: 'مالي',
    badge: 'مؤرشف', badgeColor: 'bg-[#e6f4ef] text-primary',
  },
  {
    id: 'F-004', name: 'مسح OCR - عقود 2025.pdf', type: 'pdf', tab: 'ocr',
    date: '2026-08-05', size: '4.8 MB', branch: 'الرياض', category: 'OCR',
    badge: 'معالجة OCR', badgeColor: 'bg-surface-container-high text-on-surface-variant',
  },
  {
    id: 'F-005', name: 'تقرير التدقيق المالي Q2.pdf', type: 'pdf', tab: 'reports',
    date: '2026-08-04', size: '2.1 MB', branch: 'جدة', category: 'تقارير',
    badge: 'مؤرشف', badgeColor: 'bg-[#e6f4ef] text-primary',
  },
  {
    id: 'F-006', name: 'صور عقد الإيجار - جدة.jpg', type: 'image', tab: 'contracts',
    date: '2026-08-03', size: '5.6 MB', branch: 'جدة', category: 'العقود',
    badge: 'مؤرشف', badgeColor: 'bg-[#e6f4ef] text-primary',
  },
];

const tabs = [
  { id: 'all',       label: 'الكل' },
  { id: 'reports',   label: 'تقارير' },
  { id: 'contracts', label: 'عقود' },
  { id: 'ocr',       label: 'مستندات OCR' },
  { id: 'financial', label: 'ملفات مالية' },
];

const branches = ['جميع الفروع', 'الرياض', 'جدة', 'الدمام', 'أبها'];
const sectors  = ['جميع القطاعات', 'مطاعم', 'فنادق', 'عقارات', 'صناعة', 'خدمات'];

// ── File type icon ────────────────────────────────────────────────────────────
function FileTypeIcon({ type, size = 'w-8 h-8' }) {
  const cfg = {
    pdf:   { Icon: File,            color: 'text-error' },
    xlsx:  { Icon: FileSpreadsheet, color: 'text-[#217346]' },
    docx:  { Icon: FileText,        color: 'text-secondary' },
    image: { Icon: Image,           color: 'text-[#ff9939]' },
  };
  const { Icon, color } = cfg[type] || { Icon: FileText, color: 'text-on-surface-variant' };
  return <Icon className={`${size} ${color}`} />;
}

// ── File Grid Card ────────────────────────────────────────────────────────────
function FileGridCard({ file, onView }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant hover:shadow-md transition-shadow flex flex-col gap-3 group relative">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
          <FileTypeIcon type={file.type} />
        </div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors opacity-0 group-hover:opacity-100"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div className="absolute left-0 top-8 bg-white border border-outline-variant rounded-xl shadow-lg z-10 min-w-[130px] py-1 text-sm">
              <button
                className="w-full text-right px-3 py-2 hover:bg-surface-container flex items-center gap-2 text-on-surface"
                onClick={() => { onView(file); setMenuOpen(false); }}
              >
                <Eye className="w-3.5 h-3.5" /> عرض
              </button>
              <button className="w-full text-right px-3 py-2 hover:bg-surface-container flex items-center gap-2 text-on-surface">
                <Download className="w-3.5 h-3.5" /> تحميل
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-on-surface line-clamp-2 leading-snug">{file.name}</p>
        <div className="flex items-center gap-3 mt-1.5 text-xs text-on-surface-variant">
          <span>{file.date}</span>
          <span>•</span>
          <span>{file.size}</span>
        </div>
        <p className="text-xs text-on-surface-variant mt-1">{file.branch}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${file.badgeColor}`}>
          {file.badge}
        </span>
        <button
          onClick={() => onView(file)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-medium hover:bg-primary-container transition-colors"
        >
          <Eye className="w-3 h-3" />
          عرض
        </button>
      </div>
    </div>
  );
}

// ── File List Row ─────────────────────────────────────────────────────────────
function FileListRow({ file, onView }) {
  return (
    <tr className="hover:bg-surface-container transition-colors border-b border-outline-variant last:border-0">
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <FileTypeIcon type={file.type} size="w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-on-surface">{file.name}</p>
            <p className="text-xs text-on-surface-variant">{file.category}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3.5 text-sm text-on-surface-variant hidden md:table-cell">{file.date}</td>
      <td className="px-4 py-3.5 text-sm text-on-surface-variant hidden lg:table-cell">{file.size}</td>
      <td className="px-4 py-3.5 text-sm text-on-surface-variant hidden md:table-cell">{file.branch}</td>
      <td className="px-4 py-3.5">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${file.badgeColor}`}>
          {file.badge}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <button
          onClick={() => onView(file)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant text-xs font-medium text-on-surface hover:bg-surface-container transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          عرض
        </button>
      </td>
    </tr>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Archive() {
  const navigate = useNavigate();
  const { openDrawer, openModal } = useApp();
  const { showToast } = useToast();

  const [activeTab, setActiveTab]         = useState('all');
  const [viewMode, setViewMode]           = useState('grid');
  const [searchQuery, setSearchQuery]     = useState('');
  const [selectedBranch, setSelectedBranch] = useState('جميع الفروع');
  const [selectedSector, setSelectedSector] = useState('جميع القطاعات');

  // Filter files by tab + search + branch
  const filteredFiles = allFiles.filter((f) => {
    const matchTab    = activeTab === 'all' || f.tab === activeTab;
    const matchSearch = !searchQuery || f.name.includes(searchQuery) || f.category.includes(searchQuery);
    const matchBranch = selectedBranch === 'جميع الفروع' || f.branch === selectedBranch;
    return matchTab && matchSearch && matchBranch;
  });

  const handleViewFile = (file) => {
    openDrawer('fileDetails', {
      title: 'تفاصيل الملف',
      subtitle: file.id,
      details: {
        name:     file.name,
        type:     file.type.toUpperCase(),
        size:     file.size,
        date:     file.date,
        branch:   file.branch,
        category: file.category,
      },
    });
  };

  const handleUpload = () => {
    openModal('upload', {
      title:   'رفع ملف للأرشيف',
      message: 'سيتم رفع الملف المحدد إلى الأرشيف الإلكتروني.',
    });
  };

  const handleDownloadAll = () => {
    showToast('جاري تجهيز الملفات للتحميل...', 'info');
  };

  const storageUsed    = 78;
  const storageTotal   = 100;
  const storagePercent = (storageUsed / storageTotal) * 100;

  return (
    <div className="flex flex-col gap-6 p-6 bg-background min-h-full" dir="rtl">

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-1">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
          <button onClick={() => navigate('/dashboard')} className="hover:text-primary transition-colors">
            الرئيسية
          </button>
          <span>/</span>
          <span className="text-on-surface font-medium">الأرشيف الإلكتروني</span>
        </nav>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-on-surface">الأرشيف الإلكتروني</h1>
            <p className="text-sm text-on-surface-variant mt-0.5">إدارة واسترجاع الملفات والوثائق المؤرشفة</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              تحميل
            </button>
            <button
              onClick={handleUpload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition-colors text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              رفع ملف
            </button>
          </div>
        </div>
      </div>

      {/* ── Storage + Search row ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Search */}
        <div className="lg:col-span-2 relative">
          <Search className="absolute top-1/2 -translate-y-1/2 right-4 w-4 h-4 text-on-surface-variant pointer-events-none" />
          <input
            type="text"
            placeholder="ابحث عن ملف، تقرير، عقد..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-11 pl-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        {/* Storage indicator */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant px-4 py-3 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-on-surface-variant font-medium">التخزين المستخدم</span>
            <span className="text-on-surface font-bold">{storageUsed} GB / {storageTotal} GB</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${storagePercent}%` }}
            />
          </div>
          <p className="text-xs text-on-surface-variant">{storagePercent}% مستخدم من إجمالي السعة</p>
        </div>
      </div>

      {/* ── Filters row ─────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <Filter className="w-4 h-4" />
          <span>تصفية:</span>
        </div>
        {/* Branch filter */}
        <div className="relative">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="appearance-none pr-4 pl-8 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
          >
            {branches.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <ChevronDown className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-on-surface-variant pointer-events-none" />
        </div>
        {/* Sector filter */}
        <div className="relative">
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="appearance-none pr-4 pl-8 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
          >
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-on-surface-variant pointer-events-none" />
        </div>
        {/* View mode toggles */}
        <div className="flex items-center gap-1 bg-surface-container rounded-xl p-1 mr-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
            title="عرض شبكي"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
            title="عرض قائمة"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Sector Folder Cards ──────────────────────────────────────────────── */}
      <div>
        <h2 className="text-sm font-semibold text-on-surface-variant mb-3 flex items-center gap-2">
          <Folder className="w-4 h-4" />
          مجلدات القطاعات
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sectorFolders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedSector(folder.name.replace('قطاع ', ''))}
              className={`flex items-center gap-3 p-4 rounded-2xl border-2 ${folder.border} ${folder.color} hover:opacity-80 transition-all text-right w-full group`}
            >
              <span className="text-2xl">{folder.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{folder.name}</p>
                <p className="text-xs opacity-70 font-medium">{folder.count} ملف</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────────────── */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-1 p-3 border-b border-outline-variant overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="mr-auto text-xs text-on-surface-variant px-2">
            {filteredFiles.length} نتيجة
          </span>
        </div>

        {/* ── Grid View ─────────────────────────────────────────────────────── */}
        {viewMode === 'grid' && (
          <div className="p-4">
            {filteredFiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredFiles.map((file) => (
                  <FileGridCard key={file.id} file={file} onView={handleViewFile} />
                ))}
                {/* Upload CTA card */}
                <button
                  onClick={handleUpload}
                  className="rounded-2xl border-2 border-dashed border-outline-variant p-4 flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-[#f0faf5] transition-all min-h-[160px]"
                >
                  <div className="w-12 h-12 rounded-xl border-2 border-dashed border-current flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">رفع ملف جديد</p>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant gap-3">
                <Folder className="w-12 h-12 opacity-30" />
                <p className="text-sm">لا توجد ملفات مطابقة للبحث</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                  className="text-primary text-sm hover:underline"
                >
                  مسح التصفية
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── List View ─────────────────────────────────────────────────────── */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            {filteredFiles.length > 0 ? (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-container">
                    <th className="text-right px-5 py-3 text-xs font-semibold text-on-surface-variant">اسم الملف</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant hidden md:table-cell">التاريخ</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant hidden lg:table-cell">الحجم</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant hidden md:table-cell">الفرع</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant">الحالة</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file) => (
                    <FileListRow key={file.id} file={file} onView={handleViewFile} />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant gap-3">
                <FileText className="w-12 h-12 opacity-30" />
                <p className="text-sm">لا توجد ملفات مطابقة للبحث</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                  className="text-primary text-sm hover:underline"
                >
                  مسح التصفية
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


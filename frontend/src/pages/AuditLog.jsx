import React, { useState, useMemo } from 'react';
import { useToast } from '../context/ToastContext';
import { useApp } from '../context/AppContext';
import {
  Shield,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  User,
  Wifi,
  Fingerprint,
  Clock,
  ChevronLeft,
  ChevronRight,
  FileText,
  Printer,
} from 'lucide-react';
import { auditLogs } from '../data/mockData';

// ─── Extended audit data ────────────────────────────────────────────────────────

const extraLogs = [
  {
    id: 'EVT-8945',
    timestamp: '2026-08-09 09:55:03',
    user: 'خالد العتيبي',
    role: 'مشرف الفرع',
    action: 'دخول للنظام',
    branch: 'فرع الدمام',
    resource: 'Auth_Session',
    ip: '172.16.3.88',
    severity: 'معلومة',
    details: 'تسجيل دخول ناجح من جهاز كمبيوتر مكتبي',
  },
  {
    id: 'EVT-8946',
    timestamp: '2026-08-09 08:22:14',
    user: 'Unknown',
    role: 'غير محدد',
    action: 'محاولة دخول فاشلة',
    branch: 'الإدارة العامة',
    resource: 'Login_Portal',
    ip: '203.0.113.45',
    severity: 'حرج',
    details: 'محاولة دخول فاشلة متعددة - تم حظر العنوان تلقائياً',
  },
  {
    id: 'EVT-8947',
    timestamp: '2026-08-08 23:10:00',
    user: 'نظام النسخ الاحتياطي',
    role: 'Automated Task',
    action: 'نسخ احتياطي',
    branch: 'الخوادم المركزية',
    resource: 'DB_Backup_Full',
    ip: 'localhost',
    severity: 'معلومة',
    details: 'اكتمل النسخ الاحتياطي الكامل لقاعدة البيانات بنجاح (42 GB)',
  },
  {
    id: 'EVT-8948',
    timestamp: '2026-08-08 20:45:32',
    user: 'منى الزهراني',
    role: 'محلل مالي',
    action: 'تصدير تقرير',
    branch: 'فرع جدة',
    resource: 'Financial_Report_Q2.pdf',
    ip: '10.0.4.78',
    severity: 'تحذير',
    details: 'تم تصدير تقرير مالي سري خارج ساعات العمل الرسمية',
  },
];

const allAuditData = [...auditLogs, ...extraLogs];

// ─── Severity config ────────────────────────────────────────────────────────────

const severityConfig = {
  حرج: {
    label: 'حرج',
    bg: 'bg-error-container dark:bg-error/20',
    text: 'text-on-error-container dark:text-error-400',
    icon: XCircle,
    dot: 'bg-error',
  },
  تحذير: {
    label: 'تحذير',
    bg: 'bg-[#fff3cd] dark:bg-orange-900/30',
    text: 'text-[#6a3700] dark:text-orange-300',
    icon: AlertTriangle,
    dot: 'bg-[#ff9939]',
  },
  معلومة: {
    label: 'معلومة',
    bg: 'bg-primary-fixed dark:bg-primary/20',
    text: 'text-primary dark:text-primary-400',
    icon: Info,
    dot: 'bg-primary',
  },
};

const SeverityBadge = ({ severity }) => {
  const cfg = severityConfig[severity] || severityConfig['معلومة'];
  const Icon = cfg.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}>
      <Icon className="w-3 h-3" />
      {cfg.label}
    </span>
  );
};

// ─── KPI Card ──────────────────────────────────────────────────────────────────

const KpiCard = ({ label, value, subLabel, subColor, icon: Icon, iconBg, trend }) => (
  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
    <div className="flex justify-between items-start">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}>
        <Icon className="w-5 h-5" />
      </div>
      {trend && (
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            trend.startsWith('+') ? 'bg-primary-fixed text-primary' : 'bg-error-container text-on-error-container'
          }`}
        >
          {trend}
        </span>
      )}
    </div>
    <div>
      <p className="text-xs text-on-surface-variant mb-0.5">{label}</p>
      <p className="text-2xl font-bold text-on-surface">{value}</p>
      {subLabel && <p className={`text-xs mt-0.5 ${subColor || 'text-on-surface-variant'}`}>{subLabel}</p>}
    </div>
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE = 5;

const actionTypes = [
  'الكل',
  'تعديل صلاحيات',
  'استيراد أكسل',
  'أرشفة تلقائية',
  'دخول للنظام',
  'محاولة دخول فاشلة',
  'نسخ احتياطي',
  'تصدير تقرير',
];

const branchOptions = [
  'الكل',
  'الإدارة العامة',
  'فرع جدة',
  'فرع الدمام',
  'الخوادم المركزية',
];

const AuditLog = () => {
  const { showToast } = useToast();
  const { openDrawer } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedAction, setSelectedAction] = useState('الكل');
  const [selectedBranch, setSelectedBranch] = useState('الكل');
  const [dateRange, setDateRange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // ── Filtering ──

  const filtered = useMemo(() => {
    return allAuditData.filter((entry) => {
      const matchSearch =
        !searchQuery ||
        entry.user.includes(searchQuery) ||
        entry.action.includes(searchQuery) ||
        entry.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.ip.includes(searchQuery);

      const matchSeverity =
        selectedSeverity === 'all' ||
        (selectedSeverity === 'critical' && entry.severity === 'حرج') ||
        (selectedSeverity === 'warning' && entry.severity === 'تحذير') ||
        (selectedSeverity === 'info' && entry.severity === 'معلومة');

      const matchAction = selectedAction === 'الكل' || entry.action === selectedAction;
      const matchBranch = selectedBranch === 'الكل' || entry.branch === selectedBranch;

      return matchSearch && matchSeverity && matchAction && matchBranch;
    });
  }, [searchQuery, selectedSeverity, selectedAction, selectedBranch]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleViewDetails = (entry) => {
    openDrawer('auditDetails', {
      title: 'تفاصيل الحدث',
      subtitle: `ID: ${entry.id}`,
      details: { entry },
    });
  };

  const handleExportPDF = () => showToast('جاري تصدير سجل التدقيق...', 'info');
  const handleExportExcel = () => showToast('جاري تصدير البيانات...', 'info');
  const handlePrint = () => showToast('جاري التجهيز للطباعة...', 'info');

  const severityTabs = [
    { key: 'all', label: 'الكل', count: allAuditData.length },
    { key: 'critical', label: 'حرج', count: allAuditData.filter((e) => e.severity === 'حرج').length },
    { key: 'warning', label: 'تحذير', count: allAuditData.filter((e) => e.severity === 'تحذير').length },
    { key: 'info', label: 'معلومة', count: allAuditData.filter((e) => e.severity === 'معلومة').length },
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
              <span className="text-primary font-medium">سجل التدقيق</span>
            </nav>
            <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              سجل التدقيق الشامل
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">مراقبة وتتبع جميع الأنشطة والأحداث الأمنية في النظام</p>
          </div>

          {/* Export actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="h-9 px-4 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2 text-sm"
            >
              <Printer className="w-4 h-4" />
              طباعة
            </button>
            <button
              onClick={handleExportExcel}
              className="h-9 px-4 rounded-lg border border-primary text-primary hover:bg-surface-container transition-colors flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              Excel
            </button>
            <button
              onClick={handleExportPDF}
              className="h-9 px-5 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
            >
              <FileText className="w-4 h-4" />
              تصدير PDF
            </button>
          </div>
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard
            label="إجمالي الأحداث"
            value="14,280"
            icon={Shield}
            iconBg="bg-primary/10 text-primary"
            trend="+12%"
          />
          <KpiCard
            label="تنبيهات أمنية"
            value="42"
            subLabel="تتطلب مراجعة"
            subColor="text-[#6a3700] dark:text-orange-300"
            icon={AlertTriangle}
            iconBg="bg-[#fff3cd] dark:bg-orange-900/30 text-[#6a3700] dark:text-orange-300"
          />
          <KpiCard
            label="محاولات دخول فاشلة"
            value="18"
            subLabel="آخر 24 ساعة"
            subColor="text-error"
            icon={XCircle}
            iconBg="bg-error-container text-error"
            trend="-5%"
          />
          <KpiCard
            label="تغييرات الصلاحيات"
            value="12"
            subLabel="هذا الأسبوع"
            icon={Fingerprint}
            iconBg="bg-primary-fixed text-primary"
          />
        </div>

        {/* ── Severity Filter Tabs ── */}
        <div className="flex items-center gap-1 mb-5 bg-surface-container p-1 rounded-xl w-fit">
          {severityTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setSelectedSeverity(tab.key); setCurrentPage(1); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedSeverity === tab.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  selectedSeverity === tab.key
                    ? 'bg-on-primary/20 text-on-primary'
                    : 'bg-surface-container-highest text-on-surface-variant'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ── Filters Bar ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-4 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder="بحث بالمستخدم أو الإجراء أو IP..."
                className="w-full bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
              <input
                type="date"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
              />
            </div>

            {/* Action Type */}
            <div className="relative">
              <Filter className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
              <select
                value={selectedAction}
                onChange={(e) => { setSelectedAction(e.target.value); setCurrentPage(1); }}
                className="w-full bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer transition-colors"
              >
                {actionTypes.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>

            {/* Branch */}
            <div className="relative">
              <Wifi className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
              <select
                value={selectedBranch}
                onChange={(e) => { setSelectedBranch(e.target.value); setCurrentPage(1); }}
                className="w-full bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer transition-colors"
              >
                {branchOptions.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* ── Audit Log Table ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              أحداث النظام
            </h3>
            <span className="text-sm text-on-surface-variant">
              {filtered.length} حدث
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right min-w-[900px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/50">
                  {[
                    'التاريخ والوقت',
                    'المستخدم',
                    'نوع الإجراء',
                    'القطاع والفرع',
                    'المورد المستهدف',
                    'عنوان IP',
                    'درجة الخطورة',
                    'التفاصيل',
                  ].map((col) => (
                    <th
                      key={col}
                      className="py-3 px-4 text-xs font-semibold text-on-surface-variant whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-14 text-center">
                      <div className="flex flex-col items-center gap-3 text-on-surface-variant">
                        <Shield className="w-10 h-10 opacity-30" />
                        <p className="text-sm">لا توجد أحداث تطابق معايير البحث</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginated.map((entry, idx) => {
                    const cfg = severityConfig[entry.severity] || severityConfig['معلومة'];
                    return (
                      <tr
                        key={entry.id}
                        className={`hover:bg-surface-container/40 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}
                      >
                        {/* Timestamp */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <p className="text-xs font-mono text-on-surface">{entry.timestamp.split(' ')[0]}</p>
                          <p className="text-xs text-on-surface-variant">{entry.timestamp.split(' ')[1]}</p>
                        </td>

                        {/* User */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                              {entry.user.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-on-surface">{entry.user}</p>
                              <p className="text-[10px] text-on-surface-variant">{entry.role}</p>
                            </div>
                          </div>
                        </td>

                        {/* Action */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="text-sm text-on-surface font-medium">{entry.action}</span>
                        </td>

                        {/* Branch */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="text-sm text-on-surface-variant">{entry.branch}</span>
                        </td>

                        {/* Resource */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="font-mono text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                            {entry.resource}
                          </span>
                        </td>

                        {/* IP */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span dir="ltr" className="text-xs font-mono text-on-surface-variant">{entry.ip}</span>
                        </td>

                        {/* Severity */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <SeverityBadge severity={entry.severity} />
                        </td>

                        {/* View Details */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <button
                            onClick={() => handleViewDetails(entry)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors text-xs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            عرض
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* ── Pagination ── */}
          <div className="px-5 py-4 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-on-surface-variant">
            <span>
              عرض {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} من أصل {filtered.length} حدث
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm transition-colors ${
                    page === currentPage
                      ? 'bg-primary text-on-primary border-primary shadow-sm'
                      : 'border-outline-variant hover:bg-surface-container'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  BarChart3, Download, Filter, Eye, Calendar, TrendingUp,
  FileText, Printer, RefreshCw, ChevronDown
} from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const monthlyTrendData = [
  { month: 'يناير', تقارير: 168, معتمد: 142 },
  { month: 'فبراير', تقارير: 195, معتمد: 170 },
  { month: 'مارس', تقارير: 210, معتمد: 185 },
  { month: 'أبريل', تقارير: 178, معتمد: 155 },
  { month: 'مايو', تقارير: 230, معتمد: 200 },
  { month: 'يونيو', تقارير: 248, معتمد: 218 },
  { month: 'يوليو', تقارير: 220, معتمد: 192 },
  { month: 'أغسطس', تقارير: 265, معتمد: 234 },
  { month: 'سبتمبر', تقارير: 190, معتمد: 168 },
  { month: 'أكتوبر', تقارير: 242, معتمد: 215 },
  { month: 'نوفمبر', تقارير: 258, معتمد: 228 },
  { month: 'ديسمبر', تقارير: 246, معتمد: 218 },
];

const sectorData = [
  { name: 'المطاعم', تقارير: 680 },
  { name: 'الفنادق', تقارير: 540 },
  { name: 'الاستراحات', تقارير: 420 },
  { name: 'المالية', تقارير: 390 },
  { name: 'الموارد البشرية', تقارير: 280 },
];

const statusDistribution = [
  { name: 'مكتمل', value: 1820, color: '#003527' },
  { name: 'قيد الاعتماد', value: 420, color: '#3755c3' },
  { name: 'معلق', value: 42, color: '#ff9939' },
  { name: 'مرفوض', value: 168, color: '#ba1a1a' },
];

const reportsTableData = [
  {
    id: 'RPT-1041',
    title: 'تقرير الأداء المالي الربعي Q2',
    sector: 'المالية',
    author: 'سارة محمد',
    status: 'مكتمل',
    date: '2026-08-07',
    statusType: 'completed',
  },
  {
    id: 'RPT-1042',
    title: 'تقرير إدارة الموارد البشرية - يوليو',
    sector: 'الموارد البشرية',
    author: 'خالد العمري',
    status: 'قيد الاعتماد',
    date: '2026-08-06',
    statusType: 'pending',
  },
  {
    id: 'RPT-1043',
    title: 'تقرير الاستراحات الشهري - أغسطس',
    sector: 'الاستراحات',
    author: 'نورة الفيصل',
    status: 'معلق',
    date: '2026-08-05',
    statusType: 'hold',
  },
  {
    id: 'RPT-1044',
    title: 'تقرير إيرادات فروع المطاعم',
    sector: 'المطاعم',
    author: 'أحمد عبدالله',
    status: 'مكتمل',
    date: '2026-08-04',
    statusType: 'completed',
  },
  {
    id: 'RPT-1045',
    title: 'تقرير استيعاب الفنادق - الموسم الصيفي',
    sector: 'الفنادق',
    author: 'فاطمة الزهراني',
    status: 'قيد الاعتماد',
    date: '2026-08-03',
    statusType: 'pending',
  },
];

const branches = [
  { id: 'all', name: 'جميع الفروع' },
  { id: 'b1', name: 'الإدارة العامة - الرياض' },
  { id: 'b2', name: 'فرع جدة - الكورنيش' },
  { id: 'b3', name: 'فرع الدمام - حي الشاطئ' },
  { id: 'b4', name: 'فرع أبها - الأمانة' },
];

const TABS = [
  { id: 'overview', label: 'نظرة عامة' },
  { id: 'financial', label: 'مالي' },
  { id: 'operations', label: 'عمليات' },
  { id: 'audit', label: 'تدقيق' },
];

const PERIODS = [
  { id: 'week', label: 'هذا الأسبوع' },
  { id: 'month', label: 'هذا الشهر' },
  { id: 'quarter', label: 'هذا الربع' },
  { id: 'year', label: 'هذا العام' },
];

// ─── Status Badge ───────────────────────────────────────────────────────────────
const StatusBadge = ({ status, type }) => {
  const styles = {
    completed: 'bg-primary-fixed text-primary dark:bg-primary/20 dark:text-primary-400',
    pending: 'bg-[#dce8ff] text-secondary dark:bg-blue-900/30 dark:text-blue-300',
    hold: 'bg-[#fff3cd] text-[#6a3700] dark:bg-orange-900/30 dark:text-orange-300',
    rejected: 'bg-error-container text-on-error-container dark:bg-error/20 dark:text-error-400',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${styles[type] || styles.pending}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
};

// ─── Custom Tooltip ─────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-3 shadow-lg text-sm">
        <p className="font-medium text-on-surface mb-1">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── Main Component ─────────────────────────────────────────────────────────────
const Reports = () => {
  const navigate = useNavigate();
  const { openDrawer, openModal } = useApp();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const handleExportPDF = () => showToast('جاري تصدير التقرير بصيغة PDF...', 'info');
  const handleExportExcel = () => showToast('جاري تصدير التقرير بصيغة Excel...', 'success');
  const handlePrint = () => showToast('جاري تجهيز ملف الطباعة...', 'info');
  const handleRefresh = () => showToast('تم تحديث البيانات بنجاح', 'success');
  const handleDownloadRow = (id) => showToast(`جاري تحميل التقرير ${id}...`, 'success');
  const handleViewRow = (row) =>
    openDrawer('reportDetails', { title: row.title, subtitle: `التقرير: ${row.id}`, data: row });
  const handleApprove = (row) =>
    openModal('confirm', {
      title: 'اعتماد التقرير',
      message: `هل تريد اعتماد التقرير "${row.title}"؟`,
      confirmLabel: 'اعتماد',
      confirmVariant: 'success',
    });

  return (
    <div className="flex-1 overflow-y-auto bg-surface custom-scrollbar">
      <div className="p-6 md:p-8 max-w-[1400px] mx-auto">

        {/* ── Page Header ── */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex items-center gap-1 text-xs text-on-surface-variant mb-2">
              <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">الرئيسية</button>
              <span>/</span>
              <span className="text-on-surface font-medium">التقارير والإحصائيات</span>
            </nav>
            <h1 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              التقارير والإحصائيات
            </h1>
            <p className="text-sm text-on-surface-variant mt-1">مركز التحليلات والتقارير الشاملة لدار الصفاء</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleRefresh}
              className="h-9 px-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-1.5 text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              تحديث
            </button>
            <button
              onClick={handlePrint}
              className="h-9 px-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-1.5 text-sm"
            >
              <Printer className="w-4 h-4" />
              طباعة
            </button>
            <button
              onClick={handleExportExcel}
              className="h-9 px-3 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-1.5 text-sm"
            >
              <Download className="w-4 h-4" />
              Excel
            </button>
            <button
              onClick={handleExportPDF}
              className="h-9 px-4 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
            >
              <Download className="w-4 h-4" />
              تصدير PDF
            </button>
          </div>
        </div>

        {/* ── Tab Bar ── */}
        <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl mb-6 w-fit">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Filters Row ── */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-1">
            {PERIODS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPeriod(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedPeriod === p.id
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
            <select
              value={selectedBranch}
              onChange={e => setSelectedBranch(e.target.value)}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-2 pr-9 pl-7 text-sm text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
            >
              {branches.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
          </div>
          <div className="relative">
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
            <select className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-2 pr-9 pl-7 text-sm text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer">
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
            <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
          </div>
        </div>

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <span className="flex items-center gap-1 text-xs text-primary bg-primary-fixed px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> +8%
              </span>
            </div>
            <p className="text-sm text-on-surface-variant mb-1">إجمالي التقارير</p>
            <h3 className="text-3xl font-bold text-on-surface">2,450</h3>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-[#dce8ff] dark:bg-blue-900/30 flex items-center justify-center text-secondary dark:text-blue-300">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="flex items-center gap-1 text-xs text-secondary dark:text-blue-300 bg-[#dce8ff] dark:bg-blue-900/30 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> +3%
              </span>
            </div>
            <p className="text-sm text-on-surface-variant mb-1">معدل الاعتماد</p>
            <h3 className="text-3xl font-bold text-on-surface">87%</h3>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow border-b-4 border-b-[#ff9939] dark:border-b-orange-500/50">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-[#fff3cd] dark:bg-orange-900/30 flex items-center justify-center text-[#6a3700] dark:text-orange-300">
                <Filter className="w-5 h-5" />
              </div>
            </div>
            <p className="text-sm text-on-surface-variant mb-1">تقارير معلقة</p>
            <h3 className="text-3xl font-bold text-on-surface">42</h3>
          </div>
          {/* Card 4 */}
          <div className="bg-primary text-on-primary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 0% 100%, #ffffff 0%, transparent 60%)' }} />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <p className="text-primary-fixed-dim text-sm mb-1 relative z-10">وقت المعالجة</p>
            <h3 className="text-3xl font-bold relative z-10">2.3 <span className="text-lg font-normal">يوم</span></h3>
          </div>
        </div>

        {/* ── Charts Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Line Chart – Monthly Trend */}
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold text-on-surface">اتجاه التقارير الشهري</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">مقارنة التقارير المُعدَّة والمعتمدة</p>
              </div>
              <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-lg">2026</span>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={monthlyTrendData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#bfc9c3" strokeOpacity={0.4} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#404944' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#404944' }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => <span className="text-xs text-on-surface-variant">{value}</span>}
                />
                <Line type="monotone" dataKey="تقارير" stroke="#003527" strokeWidth={2.5} dot={{ r: 3, fill: '#003527' }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="معتمد" stroke="#3755c3" strokeWidth={2} dot={{ r: 3, fill: '#3755c3' }} strokeDasharray="5 3" activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Donut Chart – Status Distribution */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-5">
            <div className="mb-4">
              <h3 className="font-semibold text-on-surface">توزيع الحالات</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">توزيع حالات التقارير الحالية</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, name]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {statusDistribution.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-on-surface-variant">{item.name}</span>
                  </div>
                  <span className="font-medium text-on-surface">{item.value.toLocaleString('ar')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart – Top Sectors */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-on-surface">أعلى القطاعات تقارير</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">إجمالي التقارير حسب القطاع</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sectorData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#bfc9c3" strokeOpacity={0.4} vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#404944' }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#404944' }} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="تقارير" fill="#003527" radius={[6, 6, 0, 0]} maxBarSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Reports Table ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
            <div>
              <h3 className="font-semibold text-on-surface">قائمة التقارير</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">آخر التقارير المُعدَّة في النظام</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportExcel}
                className="h-8 px-3 rounded-lg border border-outline-variant text-sm text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                تصدير
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30">
                  {['الرقم', 'العنوان', 'القطاع', 'المُعِد', 'الحالة', 'التاريخ', 'الإجراء'].map(h => (
                    <th key={h} className="py-3 px-4 text-xs font-semibold text-on-surface-variant whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {reportsTableData.map((row, idx) => (
                  <tr key={row.id} className={`hover:bg-surface-container/30 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="text-xs font-mono text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">{row.id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-on-surface max-w-[220px] truncate">{row.title}</p>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{row.sector}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                          {row.author.charAt(0)}
                        </div>
                        <span className="text-sm text-on-surface">{row.author}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <StatusBadge status={row.status} type={row.statusType} />
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{row.date}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleViewRow(row)}
                          title="عرض"
                          className="w-7 h-7 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDownloadRow(row.id)}
                          title="تحميل"
                          className="w-7 h-7 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        {row.statusType === 'pending' && (
                          <button
                            onClick={() => handleApprove(row)}
                            className="px-2.5 py-1 rounded-lg bg-primary text-on-primary text-xs font-medium hover:bg-primary-container transition-colors"
                          >
                            اعتماد
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center">
            <span className="text-sm text-on-surface-variant">عرض 1 إلى 5 من أصل 2,450 تقرير</span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors text-sm disabled:opacity-50" disabled>‹</button>
              <button className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center text-sm font-medium">1</button>
              <button className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-sm">2</button>
              <button className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-sm">3</button>
              <span className="px-1 text-on-surface-variant text-sm">...</span>
              <button className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors text-sm">›</button>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-xs text-on-surface-variant">
          <span>© 2026 دار الصفاء - مركز التقارير والإحصائيات</span>
          <span className="text-primary font-medium">Reports & Analytics</span>
        </footer>

      </div>
    </div>
  );
};

export default Reports;



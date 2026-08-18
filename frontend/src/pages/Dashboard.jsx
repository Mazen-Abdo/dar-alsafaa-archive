import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  Building2, FileText, ScanText, UploadCloud, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle, Clock, Users, FolderArchive, BarChart3,
  Plus, Download, Eye, RefreshCw
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { recentDocuments, notificationsList } from '../data/mockData';

// ── Static chart data ────────────────────────────────────────────────────────
const monthlyData = [
  { month: 'ينا', docs: 1200 },
  { month: 'فبر', docs: 1450 },
  { month: 'مار', docs: 1380 },
  { month: 'أبر', docs: 1600 },
  { month: 'ماي', docs: 1800 },
  { month: 'يون', docs: 2100 },
];

const sectorData = [
  { name: 'مطاعم',  value: 35 },
  { name: 'فنادق',  value: 45 },
  { name: 'عقارات', value: 30 },
  { name: 'تجزئة',  value: 25 },
  { name: 'صناعة',  value: 20 },
  { name: 'خدمات',  value: 40 },
];

const PIE_COLORS = ['#003527', '#95d3ba', '#3755c3', '#064e3b', '#ff9939', '#708cfd'];

// ── KPI card data ────────────────────────────────────────────────────────────
const kpiCards = [
  {
    id: 'docs',
    label: 'إجمالي المستندات',
    value: '142,850',
    trend: '+12%',
    trendUp: true,
    sub: 'مقارنةً بالشهر الماضي',
    icon: FolderArchive,
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    id: 'ocr',
    label: 'معالجة OCR',
    value: '98.5%',
    trend: '+0.5%',
    trendUp: true,
    sub: 'نسبة النجاح الإجمالية',
    icon: ScanText,
    iconBg: 'bg-primary/10 dark:bg-primary/20',
    iconColor: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    id: 'pending',
    label: 'التقارير المعلقة',
    value: '28',
    trend: 'تحتاج مراجعة',
    trendUp: false,
    isAlert: true,
    sub: 'طلبات بانتظار الاعتماد',
    icon: AlertTriangle,
    iconBg: 'bg-error-container dark:bg-red-900/30',
    iconColor: 'text-error',
    borderColor: 'border-error',
  },
  {
    id: 'storage',
    label: 'استهلاك التخزين',
    value: '64%',
    trend: '6.4 TB / 10 TB',
    trendUp: null,
    sub: 'السعة الكلية للخوادم',
    icon: UploadCloud,
    iconBg: 'bg-surface-container dark:bg-slate-700',
    iconColor: 'text-on-surface-variant',
    borderColor: 'border-outline-variant',
  },
];

// ── Status badge helper ───────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    'مكتمل':        'bg-primary/10 text-primary dark:bg-primary/20',
    'قيد الاعتماد': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'معالجة OCR':  'bg-surface-container-high text-on-surface-variant',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${map[status] || 'bg-surface-container text-on-surface-variant'}`}>
      {status}
    </span>
  );
}

// ── Custom tooltip ────────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-container-lowest dark:bg-slate-800 border border-outline-variant/50 dark:border-slate-700 rounded-lg px-3 py-2 shadow-md text-sm text-on-surface">
        <p className="font-semibold">{label}</p>
        <p className="text-primary">{payload[0].value.toLocaleString()} مستند</p>
      </div>
    );
  }
  return null;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const { openDrawer } = useApp();
  const { showToast } = useToast();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      showToast('تم تحديث البيانات بنجاح', 'success');
    }, 1200);
  };

  const handleNewReport = () => {
    showToast('تم إنشاء التقرير بنجاح', 'success');
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-background min-h-full" dir="rtl">

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-1">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-on-surface font-medium">لوحة التحكم التنفيذية</span>
        </nav>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-on-surface">لوحة التحكم التنفيذية</h1>
            <p className="text-sm text-on-surface-variant mt-0.5">نظرة شاملة على أداء المنظومة الأرشيفية</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors text-sm"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              تحديث
            </button>
            <button
              onClick={() => navigate('/data-ops/excel-import')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              استيراد Excel
            </button>
            <button
              onClick={() => navigate('/data-ops/ocr')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors text-sm font-medium"
            >
              <ScanText className="w-4 h-4" />
              OCR
            </button>
            <button
              onClick={handleNewReport}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              تقرير جديد
            </button>
          </div>
        </div>
      </div>

      {/* ── KPI Cards ────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`bg-surface-container-lowest rounded-2xl p-5 border-r-4 ${card.borderColor} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-on-surface-variant truncate">{card.label}</p>
                  <p className="text-3xl font-bold text-on-surface mt-1">{card.value}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    {card.trendUp === true && <TrendingUp className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                    {card.trendUp === false && !card.isAlert && <TrendingDown className="w-3.5 h-3.5 text-error flex-shrink-0" />}
                    {card.isAlert && <AlertTriangle className="w-3.5 h-3.5 text-error flex-shrink-0" />}
                    <span className={`text-xs font-medium ${
                      card.trendUp === true ? 'text-primary' :
                      card.trendUp === false || card.isAlert ? 'text-error' :
                      'text-on-surface-variant'
                    }`}>
                      {card.trend}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">{card.sub}</p>
                </div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${card.iconBg}`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Main content row ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left / center charts + table */}
        <div className="xl:col-span-2 flex flex-col gap-6">

          {/* Area Chart */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-on-surface">نشاط المستندات الشهري</h2>
                <p className="text-xs text-on-surface-variant">آخر 6 أشهر</p>
              </div>
              <BarChart3 className="w-5 h-5 text-on-surface-variant" />
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={monthlyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDocs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#003527" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#003527" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f8" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#404944' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#404944' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="docs"
                  stroke="#003527"
                  strokeWidth={2.5}
                  fill="url(#colorDocs)"
                  dot={{ fill: '#003527', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#003527' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-on-surface">توزيع المستندات حسب القطاع</h2>
                <p className="text-xs text-on-surface-variant">عدد الملفات لكل قطاع (بالآلاف)</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sectorData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f8" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#404944' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#404944' }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(v) => [`${v}k مستند`, 'العدد']}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #bfc9c3', fontSize: '12px' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {sectorData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Documents Table */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant">
              <h2 className="text-base font-semibold text-on-surface">آخر المستندات المضافة</h2>
              <Link to="/archive" className="text-sm text-primary hover:underline font-medium">
                عرض الكل
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-container">
                    <th className="text-right px-5 py-3 text-xs font-semibold text-on-surface-variant">رقم المستند</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant">العنوان</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant hidden md:table-cell">التصنيف</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant hidden lg:table-cell">الفرع</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-on-surface-variant">الحالة</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {recentDocuments.map((row) => (
                    <tr key={row.id} className="hover:bg-surface-container transition-colors">
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                          {row.id}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 max-w-[200px]">
                        <p className="text-on-surface font-medium truncate">{row.title}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{row.date}</p>
                      </td>
                      <td className="px-4 py-3.5 text-on-surface-variant hidden md:table-cell text-xs">{row.category}</td>
                      <td className="px-4 py-3.5 hidden lg:table-cell">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-on-surface-variant" />
                          <span className="text-xs text-on-surface-variant">{row.branch}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => openDrawer('fileDetails', {
                            title: 'تفاصيل المستند',
                            subtitle: row.id,
                            details: row,
                          })}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant text-xs font-medium text-on-surface hover:bg-surface-container transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          عرض
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right side panel */}
        <div className="flex flex-col gap-6">

          {/* Pie Chart */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-semibold text-on-surface mb-4">نسبة القطاعات</h2>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {sectorData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v, n) => [`${v}k`, n]}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #bfc9c3', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {sectorData.map((sector, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                  <span className="text-xs text-on-surface-variant truncate">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant">
              <h2 className="text-base font-semibold text-on-surface">الإشعارات الأخيرة</h2>
              <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">
                {notificationsList.filter(n => n.unread).length}
              </span>
            </div>
            <div className="divide-y divide-outline-variant">
              {notificationsList.map((notif) => {
                const IconMap = {
                  approval: CheckCircle,
                  alert: AlertTriangle,
                  info: Clock,
                };
                const ColorMap = {
                  approval: 'text-primary bg-primary/10 dark:bg-primary/20',
                  alert:    'text-error bg-error-container dark:bg-red-900/30',
                  info:     'text-on-surface-variant bg-surface-container dark:bg-slate-700/60',
                };
                const NIcon = IconMap[notif.type] || Clock;
                return (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 px-5 py-4 transition-colors hover:bg-surface-container dark:hover:bg-slate-800/40 ${
                      notif.unread
                        ? 'bg-primary/[0.06] dark:bg-primary/[0.12] border-r-2 border-primary'
                        : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${ColorMap[notif.type]}`}>
                      <NIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        notif.unread
                          ? 'text-slate-900 dark:text-slate-100 font-semibold'
                          : 'text-on-surface-variant'
                      }`}>
                        {notif.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{notif.time}</p>
                    </div>
                    {notif.unread && (
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="px-5 py-3 border-t border-outline-variant">
              <button className="w-full text-center text-sm text-primary hover:underline font-medium">
                عرض جميع الإشعارات
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-semibold text-on-surface mb-4">إحصائيات سريعة</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: 'المستخدمون النشطون', value: '342', icon: Users, color: 'text-secondary' },
                { label: 'سجلات مستوردة اليوم', value: '12,400', icon: FileText, color: 'text-primary' },
                { label: 'تنبيهات الأمان', value: '42', icon: AlertTriangle, color: 'text-error' },
              ].map((stat, i) => {
                const SIcon = stat.icon;
                return (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-container">
                    <div className="flex items-center gap-2.5">
                      <SIcon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-sm text-on-surface-variant">{stat.label}</span>
                    </div>
                    <span className="text-sm font-bold text-on-surface">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



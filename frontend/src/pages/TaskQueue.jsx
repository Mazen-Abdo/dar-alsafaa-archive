import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { useApp } from '../context/AppContext';
import {
  ListTodo,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Filter,
  Search,
  ChevronDown,
  AlertTriangle,
  User,
  FileText,
  ChevronRight,
  CheckSquare,
  Calendar,
  Building2,
} from 'lucide-react';

/* ─────────────────────────── mock data ─────────────────────────── */

const PENDING_TASKS = [
  {
    id: 'REQ-1041',
    title: 'عقد توريد معدات طبية - المرحلة الثانية',
    submitter: 'د. خالد الحربي',
    sector: 'المشتريات',
    priority: 'عاجل',
    date: '2026-08-09',
  },
  {
    id: 'REQ-1042',
    title: 'تقرير التدقيق المالي - الربع الثالث',
    submitter: 'سارة محمد',
    sector: 'المالية',
    priority: 'مرتفع',
    date: '2026-08-08',
  },
  {
    id: 'REQ-1043',
    title: 'محضر اجتماع مجلس الإدارة - أغسطس',
    submitter: 'فهد العتيبي',
    sector: 'الإدارة العليا',
    priority: 'متوسط',
    date: '2026-08-08',
  },
  {
    id: 'REQ-1044',
    title: 'تعديل هيكل الرواتب - Q3',
    submitter: 'ليلى الزهراني',
    sector: 'الموارد البشرية',
    priority: 'منخفض',
    date: '2026-08-07',
  },
  {
    id: 'REQ-1045',
    title: 'عقد صيانة شبكة فرع الدمام',
    submitter: 'عمر السلمي',
    sector: 'تقنية المعلومات',
    priority: 'عاجل',
    date: '2026-08-07',
  },
  {
    id: 'REQ-1046',
    title: 'تقرير الامتثال التنظيمي - SFDA',
    submitter: 'نورة القحطاني',
    sector: 'الشؤون التنظيمية',
    priority: 'مرتفع',
    date: '2026-08-06',
  },
];

const APPROVED_TASKS = [
  {
    id: 'REQ-1030',
    title: 'عقد الاستشارات الهندسية - المبنى الجديد',
    submitter: 'م. بندر الشمري',
    sector: 'المشاريع',
    priority: 'مرتفع',
    date: '2026-08-05',
    approvedBy: 'أحمد عبدالله',
  },
  {
    id: 'REQ-1031',
    title: 'التقرير السنوي للجودة 2025',
    submitter: 'ريم الدوسري',
    sector: 'الجودة',
    priority: 'متوسط',
    date: '2026-08-04',
    approvedBy: 'أحمد عبدالله',
  },
  {
    id: 'REQ-1032',
    title: 'سياسة حوكمة البيانات v2.1',
    submitter: 'تركي الغامدي',
    sector: 'التحول الرقمي',
    priority: 'عاجل',
    date: '2026-08-03',
    approvedBy: 'أحمد عبدالله',
  },
];

const REJECTED_TASKS = [
  {
    id: 'REQ-1020',
    title: 'طلب شراء أثاث مكتبي - فرع أبها',
    submitter: 'محمد الأسمري',
    sector: 'الشؤون الإدارية',
    priority: 'منخفض',
    date: '2026-08-01',
    reason: 'يتجاوز الميزانية المعتمدة للربع الحالي',
  },
  {
    id: 'REQ-1021',
    title: 'تقرير مقارنة الموردين - Q2',
    submitter: 'هند البقمي',
    sector: 'المشتريات',
    priority: 'متوسط',
    date: '2026-07-30',
    reason: 'البيانات غير مكتملة، يرجى إعادة التقديم',
  },
];

const PRIORITY_COLORS = {
  عاجل: 'bg-error-container text-on-error-container',
  مرتفع: 'bg-orange-100 text-orange-700',
  متوسط: 'bg-yellow-100 text-yellow-700',
  منخفض: 'bg-green-100 text-green-700',
};

const PRIORITY_OPTIONS = ['الكل', 'عاجل', 'مرتفع', 'متوسط', 'منخفض'];

/* ─────────────────────────── sub-components ─────────────────────────── */

const StatCard = ({ label, value, icon: Icon, color, sub }) => (
  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-2xl font-bold text-on-surface">{value}</p>
      <p className="text-sm text-on-surface-variant">{label}</p>
      {sub && <p className="text-xs text-on-surface-variant mt-0.5">{sub}</p>}
    </div>
  </div>
);

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */

export default function TaskQueue() {
  const { showToast } = useToast();
  const { openDrawer, openModal } = useApp();

  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('الكل');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  /* filter helpers */
  const filterTasks = (tasks) =>
    tasks.filter(t => {
      const matchSearch =
        searchQuery === '' ||
        t.title.includes(searchQuery) ||
        t.submitter.includes(searchQuery) ||
        t.id.includes(searchQuery);
      const matchPriority = selectedPriority === 'الكل' || t.priority === selectedPriority;
      return matchSearch && matchPriority;
    });

  const filteredPending = filterTasks(PENDING_TASKS);
  const filteredApproved = filterTasks(APPROVED_TASKS);
  const filteredRejected = filterTasks(REJECTED_TASKS);

  /* row selection */
  const toggleRow = (id) =>
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );

  const handleBulkApprove = () => {
    const count = selectedRows.length || 5;
    showToast(`تم اعتماد ${count} طلبات دفعة واحدة`, 'success');
    setSelectedRows([]);
  };

  const handleApprove = (task) => {
    showToast('تم الاعتماد بنجاح', 'success');
    openModal('approvalConfirm', { title: task.title, id: task.id });
  };

  const handleReject = (task) => {
    openDrawer('rejectReason', {
      title: 'رفض الطلب',
      subtitle: 'أدخل سبب الرفض',
      taskId: task.id,
      taskTitle: task.title,
    });
  };

  const handleView = (task) => {
    openDrawer('taskDetails', {
      title: 'تفاصيل الطلب',
      subtitle: task.id,
      task,
    });
  };

  /* ── pending table ── */
  const renderPendingTable = () => (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
      {/* bulk actions bar */}
      {selectedRows.length > 0 && (
        <div className="flex items-center justify-between bg-primary/10 px-5 py-3 border-b border-outline-variant">
          <span className="text-sm font-medium text-primary">
            {selectedRows.length} طلب محدد
          </span>
          <button
            onClick={handleBulkApprove}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary text-sm hover:bg-primary-container transition"
          >
            <CheckSquare className="w-4 h-4" />
            اعتماد جماعي
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant text-on-surface-variant">
              <th className="px-4 py-3 text-right w-10">
                <input
                  type="checkbox"
                  onChange={e =>
                    setSelectedRows(e.target.checked ? filteredPending.map(t => t.id) : [])
                  }
                  checked={selectedRows.length === filteredPending.length && filteredPending.length > 0}
                  className="accent-primary"
                />
              </th>
              <th className="px-4 py-3 text-right font-medium">رقم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">العنوان</th>
              <th className="px-4 py-3 text-right font-medium">مقدم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">القطاع</th>
              <th className="px-4 py-3 text-right font-medium">الأولوية</th>
              <th className="px-4 py-3 text-right font-medium">تاريخ التقديم</th>
              <th className="px-4 py-3 text-right font-medium">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredPending.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-on-surface-variant">
                  لا توجد طلبات تطابق معايير البحث
                </td>
              </tr>
            ) : (
              filteredPending.map(task => (
                <tr
                  key={task.id}
                  className={`border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition ${
                    selectedRows.includes(task.id) ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(task.id)}
                      onChange={() => toggleRow(task.id)}
                      className="accent-primary"
                    />
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-primary">{task.id}</td>
                  <td className="px-4 py-3">
                    <span className="font-medium text-on-surface line-clamp-1 max-w-[180px] block">
                      {task.title}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-xs text-primary font-bold flex-shrink-0">
                        {task.submitter.charAt(0)}
                      </div>
                      <span className="text-on-surface-variant whitespace-nowrap">{task.submitter}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{task.sector}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${PRIORITY_COLORS[task.priority]}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{task.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApprove(task)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-xs font-medium hover:bg-green-200 transition whitespace-nowrap"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        اعتماد
                      </button>
                      <button
                        onClick={() => handleReject(task)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-error-container text-on-error-container text-xs font-medium hover:bg-error/20 transition whitespace-nowrap"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        رفض
                      </button>
                      <button
                        onClick={() => handleView(task)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant text-xs font-medium hover:bg-surface-container-high transition"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  /* ── approved table ── */
  const renderApprovedTable = () => (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant text-on-surface-variant">
              <th className="px-4 py-3 text-right font-medium">رقم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">العنوان</th>
              <th className="px-4 py-3 text-right font-medium">مقدم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">القطاع</th>
              <th className="px-4 py-3 text-right font-medium">الأولوية</th>
              <th className="px-4 py-3 text-right font-medium">تاريخ الاعتماد</th>
              <th className="px-4 py-3 text-right font-medium">اعتمد بواسطة</th>
              <th className="px-4 py-3 text-right font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filteredApproved.map(task => (
              <tr key={task.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition">
                <td className="px-4 py-3 font-mono text-xs text-primary">{task.id}</td>
                <td className="px-4 py-3 font-medium text-on-surface">{task.title}</td>
                <td className="px-4 py-3 text-on-surface-variant">{task.submitter}</td>
                <td className="px-4 py-3 text-on-surface-variant">{task.sector}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${PRIORITY_COLORS[task.priority]}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-4 py-3 text-on-surface-variant">{task.date}</td>
                <td className="px-4 py-3 text-on-surface-variant">{task.approvedBy}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 w-fit">
                    <CheckCircle className="w-3.5 h-3.5" />
                    مُعتمَد
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  /* ── rejected table ── */
  const renderRejectedTable = () => (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant text-on-surface-variant">
              <th className="px-4 py-3 text-right font-medium">رقم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">العنوان</th>
              <th className="px-4 py-3 text-right font-medium">مقدم الطلب</th>
              <th className="px-4 py-3 text-right font-medium">القطاع</th>
              <th className="px-4 py-3 text-right font-medium">الأولوية</th>
              <th className="px-4 py-3 text-right font-medium">تاريخ التقديم</th>
              <th className="px-4 py-3 text-right font-medium">سبب الرفض</th>
              <th className="px-4 py-3 text-right font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filteredRejected.map(task => (
              <tr key={task.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition">
                <td className="px-4 py-3 font-mono text-xs text-primary">{task.id}</td>
                <td className="px-4 py-3 font-medium text-on-surface">{task.title}</td>
                <td className="px-4 py-3 text-on-surface-variant">{task.submitter}</td>
                <td className="px-4 py-3 text-on-surface-variant">{task.sector}</td>
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${PRIORITY_COLORS[task.priority]}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-4 py-3 text-on-surface-variant">{task.date}</td>
                <td className="px-4 py-3 text-on-surface-variant max-w-[180px]">
                  <span className="block truncate text-xs">{task.reason}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-error-container text-on-error-container w-fit">
                    <XCircle className="w-3.5 h-3.5" />
                    مرفوض
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  /* ═══════════════════════ RENDER ═══════════════════════ */

  return (
    <div className="min-h-screen bg-surface p-6" dir="rtl">
      {/* ── Header ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
          <span>الرئيسية</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-on-surface font-medium">طابور المهام والاعتمادات</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <ListTodo className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-on-surface">طابور المهام والاعتمادات</h1>
              <p className="text-sm text-on-surface-variant">مراجعة واعتماد طلبات المستندات والتقارير</p>
            </div>
          </div>
          <button
            onClick={handleBulkApprove}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition shadow-sm"
          >
            <CheckSquare className="w-4 h-4" />
            اعتماد جماعي (5)
          </button>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="معلق الاعتماد"
          value="18"
          icon={Clock}
          color="bg-yellow-100 text-yellow-600"
        />
        <StatCard
          label="تم الاعتماد"
          value="142"
          icon={CheckCircle}
          color="bg-green-100 text-green-600"
        />
        <StatCard
          label="مرفوض"
          value="23"
          icon={XCircle}
          color="bg-error-container text-error"
        />
        <StatCard
          label="متأخر"
          value="5 أيام"
          icon={AlertTriangle}
          color="bg-orange-100 text-orange-600"
          sub="متوسط التأخير"
        />
      </div>

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
          <input
            type="text"
            placeholder="بحث بالعنوان أو مقدم الطلب أو الرقم..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest pr-9 pl-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Priority filter */}
        <div className="relative">
          <button
            onClick={() => setShowFilterMenu(p => !p)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-sm text-on-surface hover:bg-surface-container transition"
          >
            <Filter className="w-4 h-4 text-on-surface-variant" />
            {selectedPriority === 'الكل' ? 'تصفية الأولوية' : selectedPriority}
            <ChevronDown className="w-4 h-4 text-on-surface-variant" />
          </button>
          {showFilterMenu && (
            <div className="absolute left-0 top-full mt-1 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-lg z-10 min-w-[150px] overflow-hidden">
              {PRIORITY_OPTIONS.map(opt => (
                <button
                  key={opt}
                  onClick={() => { setSelectedPriority(opt); setShowFilterMenu(false); }}
                  className={`w-full text-right px-4 py-2.5 text-sm transition ${
                    selectedPriority === opt
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="flex gap-1 mb-4 bg-surface-container-low rounded-xl p-1 w-fit">
        {[
          { key: 'pending', label: 'بانتظار الاعتماد', badge: 18 },
          { key: 'approved', label: 'تمت الموافقة', badge: null },
          { key: 'rejected', label: 'مرفوض', badge: null },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab.key
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-error text-white'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Table ── */}
      {activeTab === 'pending' && renderPendingTable()}
      {activeTab === 'approved' && renderApprovedTable()}
      {activeTab === 'rejected' && renderRejectedTable()}
    </div>
  );
}



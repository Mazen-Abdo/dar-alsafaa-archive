import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  Bell, BellOff, Check, CheckCheck, Filter, Trash2, Eye,
  AlertTriangle, Info, CheckCircle, XCircle, Clock
} from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'approval',
    title: 'طلب اعتماد مستند جديد',
    body: 'تقرير مالي Q3 يحتاج اعتمادك قبل نهاية اليوم',
    time: 'منذ 10 دقائق',
    unread: true,
  },
  {
    id: 2,
    type: 'alert',
    title: 'فشل في معالجة ملف OCR',
    body: 'ملف المستودع_2026.pdf لم يتم معالجته بسبب تلف في البيانات',
    time: 'منذ 25 دقيقة',
    unread: true,
  },
  {
    id: 3,
    type: 'info',
    title: 'استيراد بيانات مكتمل',
    body: 'تم استيراد 1,200 سجل بنجاح من ملف مبيعات_أكتوبر.xlsx',
    time: 'منذ ساعة',
    unread: false,
  },
  {
    id: 4,
    type: 'system',
    title: 'تحديث النظام المجدول',
    body: 'تحديث النظام المجدول يوم الجمعة الساعة 2 صباحاً – يُرجى حفظ العمل',
    time: 'منذ 3 ساعات',
    unread: true,
  },
  {
    id: 5,
    type: 'approval',
    title: 'اعتماد تقرير الأرباح',
    body: 'تمت الموافقة على تقرير الأرباح السنوي من قِبل المدير المالي',
    time: 'منذ 5 ساعات',
    unread: false,
  },
  {
    id: 6,
    type: 'alert',
    title: 'تنبيه أمني',
    body: 'محاولة دخول غير مصرح بها من IP: 185.12.x.x – تم الحظر تلقائياً',
    time: 'أمس',
    unread: false,
  },
  {
    id: 7,
    type: 'info',
    title: 'انضمام عضو جديد',
    body: 'مرحباً بعضو جديد: سارة محمد انضمت للفريق كمحلل وثائق',
    time: 'أمس',
    unread: false,
  },
  {
    id: 8,
    type: 'system',
    title: 'اكتمال النسخة الاحتياطية',
    body: 'النسخة الاحتياطية الأسبوعية مكتملة بنجاح – الحجم: 4.2 GB',
    time: 'منذ يومين',
    unread: false,
  },
  {
    id: 9,
    type: 'approval',
    title: 'طلب إضافة فرع جديد',
    body: 'طلب إضافة فرع جديد في أبها بانتظار مراجعتك والاعتماد',
    time: 'منذ يومين',
    unread: true,
  },
  {
    id: 10,
    type: 'info',
    title: 'انتهاء مهلة الاستيراد',
    body: 'انتهت مهلة استيراد الأكسل المجدولة دون اكتمال العملية',
    time: 'منذ 3 أيام',
    unread: false,
  },
];

const typeConfig = {
  approval: {
    label: 'اعتماد',
    icon: CheckCircle,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    border: 'border-emerald-200 dark:border-emerald-800',
    badgeBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  },
  alert: {
    label: 'تنبيه',
    icon: AlertTriangle,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/30',
    border: 'border-red-200 dark:border-red-800',
    badgeBg: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
  },
  info: {
    label: 'معلومة',
    icon: Info,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    border: 'border-blue-200 dark:border-blue-800',
    badgeBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  },
  system: {
    label: 'نظام',
    icon: Clock,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    border: 'border-purple-200 dark:border-purple-800',
    badgeBg: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  },
};

const filterTabs = [
  { key: 'all', label: 'الكل' },
  { key: 'approval', label: 'اعتماد' },
  { key: 'alert', label: 'تنبيهات' },
  { key: 'info', label: 'معلومات' },
  { key: 'system', label: 'النظام' },
];

export default function Notifications() {
  const { openModal } = useApp();
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const filtered = activeFilter === 'all'
    ? notifications
    : notifications.filter((n) => n.type === activeFilter);

  const countForFilter = (key) =>
    key === 'all'
      ? notifications.filter((n) => n.unread).length
      : notifications.filter((n) => n.type === key && n.unread).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('تم تمييز جميع الإشعارات كمقروءة', 'success');
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    showToast('تم حذف الإشعار', 'info');
  };

  const clearAll = () => {
    openModal('confirm', {
      title: 'مسح جميع الإشعارات',
      message: 'هل أنت متأكد من رغبتك في حذف جميع الإشعارات؟ لا يمكن التراجع عن هذا الإجراء.',
      onConfirm: () => {
        setNotifications([]);
        showToast('تم مسح جميع الإشعارات', 'success');
      },
    });
  };

  return (
    <div className="min-h-screen bg-surface p-6" dir="rtl">
      {/* Breadcrumbs */}
      <div className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
        <span>الرئيسية</span>
        <span>/</span>
        <span className="text-primary font-medium">مركز الإشعارات</span>
      </div>

      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Bell className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-on-surface">مركز الإشعارات</h1>
            <p className="text-sm text-on-surface-variant">
              {unreadCount > 0 ? `لديك ${unreadCount} إشعار غير مقروء` : 'لا توجد إشعارات غير مقروءة'}
            </p>
          </div>
          {unreadCount > 0 && (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {unreadCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={markAllRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 rounded-lg border border-outline-variant/40 bg-surface-container-lowest dark:border-slate-700 px-4 py-2 text-sm font-medium text-on-surface transition hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CheckCheck className="h-4 w-4" />
            تمييز الكل كمقروء
          </button>
          <button
            onClick={clearAll}
            disabled={notifications.length === 0}
            className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 transition hover:bg-red-100 dark:hover:bg-red-900/40 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />
            مسح الكل
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 flex items-center gap-1 overflow-x-auto rounded-xl bg-surface-container p-1">
        {filterTabs.map((tab) => {
          const count = countForFilter(tab.key);
          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === tab.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab.label}
              {count > 0 && (
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold ${
                    activeFilter === tab.key ? 'bg-white/30 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Notifications List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest dark:bg-slate-900 py-24 text-center shadow-sm border border-outline-variant/20 dark:border-slate-800">
          <BellOff className="mb-4 h-16 w-16 text-outline-variant" />
          <h3 className="mb-2 text-lg font-semibold text-on-surface">لا توجد إشعارات</h3>
          <p className="text-sm text-on-surface-variant">
            {activeFilter === 'all' ? 'صندوق الإشعارات فارغ' : 'لا توجد إشعارات من هذا النوع'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((notif) => {
            const cfg = typeConfig[notif.type];
            const Icon = cfg.icon;
            return (
              <div
                key={notif.id}
                className={`group relative flex gap-4 rounded-2xl border bg-surface-container-lowest dark:bg-slate-900 p-4 shadow-sm transition-all hover:shadow-md ${
                  notif.unread
                    ? 'border-primary/30 dark:border-primary/20 ring-1 ring-primary/10'
                    : 'border-outline-variant/30 dark:border-slate-800'
                }`}
              >
                {/* Unread dot */}
                {notif.unread && (
                  <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-primary" />
                )}

                {/* Icon */}
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg}`}>
                  <Icon className={`h-5 w-5 ${cfg.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${cfg.badgeBg}`}>
                      {cfg.label}
                    </span>
                    <h3 className={`text-sm font-semibold ${notif.unread ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                      {notif.title}
                    </h3>
                  </div>
                  <p className="mb-2 text-sm text-on-surface-variant leading-relaxed">{notif.body}</p>
                  <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                    <Clock className="h-3 w-3" />
                    {notif.time}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-shrink-0 flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  {notif.unread && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      title="تمييز كمقروء"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition hover:bg-primary hover:text-on-primary"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    title="حذف"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

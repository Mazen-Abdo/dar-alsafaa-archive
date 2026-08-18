import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import {
  Users, Plus, Search, Filter, Shield, Edit, Trash2, Eye,
  UserCheck, UserX, ChevronDown, Key, Lock, X, Save, ChevronLeft, ChevronRight
} from 'lucide-react';

// ── Initial mock data ────────────────────────────────────────────────────────
const INITIAL_USERS = [
  { id: 1, name: 'أحمد عبدالله',  email: 'a.abdullah@daralsafaa.com', role: 'مدير النظام',          roleType: 'admin',      branch: 'الإدارة العامة - الرياض',  lastLogin: '2026-08-09 14:32', initials: 'أع', avatarBg: 'bg-primary', active: true },
  { id: 2, name: 'سارة محمد',     email: 's.mohammed@daralsafaa.com', role: 'محلل بيانات',           roleType: 'analyst',    branch: 'فرع جدة - الكورنيش',       lastLogin: '2026-08-09 11:15', initials: 'سم', avatarBg: 'bg-secondary', active: true },
  { id: 3, name: 'خالد العمري',   email: 'k.alomri@daralsafaa.com',   role: 'مشرف أرشيف',           roleType: 'supervisor', branch: 'فرع الدمام - حي الشاطئ',   lastLogin: '2026-08-08 09:40', initials: 'خع', avatarBg: 'bg-[#3755c3]', active: true },
  { id: 4, name: 'نورة الفيصل',   email: 'n.alfaisal@daralsafaa.com', role: 'موظف إدخال بيانات',    roleType: 'operator',   branch: 'فرع جدة - الكورنيش',       lastLogin: '2026-08-07 16:10', initials: 'نف', avatarBg: 'bg-[#6b5ea8]', active: true },
  { id: 5, name: 'فاطمة الزهراني', email: 'f.alzahrani@daralsafaa.com',role: 'مراجع مالي',           roleType: 'auditor',    branch: 'الإدارة العامة - الرياض',  lastLogin: '2026-08-09 08:55', initials: 'فز', avatarBg: 'bg-[#2d6a4f]', active: true },
  { id: 6, name: 'محمد الغامدي',  email: 'm.alghamdi@daralsafaa.com', role: 'مشرف أرشيف',           roleType: 'supervisor', branch: 'فرع أبها - الأمانة',        lastLogin: '2026-08-06 13:20', initials: 'مغ', avatarBg: 'bg-[#b5436c]', active: false },
  { id: 7, name: 'عمر السلمي',    email: 'o.alsalmi@daralsafaa.com',  role: 'محلل بيانات',           roleType: 'analyst',    branch: 'الإدارة العامة - الرياض',  lastLogin: '2026-08-05 10:00', initials: 'عس', avatarBg: 'bg-[#0891b2]', active: true },
  { id: 8, name: 'ريم العتيبي',   email: 'r.alotaibi@daralsafaa.com', role: 'موظف إدخال بيانات',    roleType: 'operator',   branch: 'فرع الدمام - حي الشاطئ',   lastLogin: '2026-08-04 15:30', initials: 'رع', avatarBg: 'bg-[#9d4edd]', active: true },
  { id: 9, name: 'بندر المطيري',  email: 'b.almutairi@daralsafaa.com',role: 'مدير فرع',              roleType: 'supervisor', branch: 'فرع أبها - الأمانة',        lastLogin: '2026-08-03 09:15', initials: 'بم', avatarBg: 'bg-[#059669]', active: true },
  { id:10, name: 'حنان القحطاني', email: 'h.alqahtani@daralsafaa.com',role: 'مراجع مالي',            roleType: 'auditor',    branch: 'فرع جدة - الكورنيش',       lastLogin: '2026-08-02 14:45', initials: 'حق', avatarBg: 'bg-[#d97706]', active: false },
  { id:11, name: 'سلطان الحربي',  email: 's.alharbi@daralsafaa.com',  role: 'محلل بيانات',           roleType: 'analyst',    branch: 'الإدارة العامة - الرياض',  lastLogin: '2026-08-01 11:00', initials: 'سح', avatarBg: 'bg-[#dc2626]', active: true },
  { id:12, name: 'مها الشمري',    email: 'm.alshamri@daralsafaa.com', role: 'موظف إدخال بيانات',    roleType: 'operator',   branch: 'فرع الدمام - حي الشاطئ',   lastLogin: '2026-07-31 08:30', initials: 'مش', avatarBg: 'bg-[#7c3aed]', active: true },
];

const ROLES_LIST = ['مدير النظام', 'مدير فرع', 'مشرف أرشيف', 'محلل بيانات', 'مراجع مالي', 'موظف إدخال بيانات'];
const BRANCHES_LIST = ['الإدارة العامة - الرياض', 'فرع جدة - الكورنيش', 'فرع الدمام - حي الشاطئ', 'فرع أبها - الأمانة'];
const ROLE_TYPE_MAP = { 'مدير النظام': 'admin', 'مدير فرع': 'supervisor', 'مشرف أرشيف': 'supervisor', 'محلل بيانات': 'analyst', 'مراجع مالي': 'auditor', 'موظف إدخال بيانات': 'operator' };
const AVATAR_COLORS = ['bg-primary','bg-secondary','bg-[#3755c3]','bg-[#6b5ea8]','bg-[#2d6a4f]','bg-[#b5436c]','bg-[#0891b2]','bg-[#059669]'];

const roleLabels = {
  admin:      { label: 'مدير النظام',         cls: 'bg-primary/10 text-primary' },
  analyst:    { label: 'محلل بيانات',          cls: 'bg-secondary/10 text-secondary' },
  supervisor: { label: 'مشرف/مدير فرع',       cls: 'bg-[#6b5ea8]/10 text-[#6b5ea8]' },
  operator:   { label: 'موظف إدخال',          cls: 'bg-surface-container-highest text-on-surface-variant' },
  auditor:    { label: 'مراجع مالي',           cls: 'bg-[#2d6a4f]/10 text-[#2d6a4f]' },
};

const ROLES_CARDS = [
  { id: 'admin',      title: 'مدير النظام',          desc: 'صلاحيات كاملة على جميع وحدات النظام',                  count: 8,   perms: 42, color: 'border-primary',     iconBg: 'bg-primary/10 text-primary' },
  { id: 'supervisor', title: 'مشرف أرشيف',           desc: 'إدارة الوثائق والموافقة على عمليات الأرشفة',            count: 34,  perms: 28, color: 'border-secondary',   iconBg: 'bg-secondary/10 text-secondary' },
  { id: 'analyst',    title: 'محلل بيانات',           desc: 'تحليل البيانات وإعداد التقارير والإحصاءات',             count: 62,  perms: 18, color: 'border-[#6b5ea8]',   iconBg: 'bg-[#6b5ea8]/10 text-[#6b5ea8]' },
  { id: 'operator',   title: 'موظف إدخال بيانات',    desc: 'إدخال وفهرسة الوثائق والمستندات الجديدة',              count: 238, perms: 8,  color: 'border-[#2d6a4f]',   iconBg: 'bg-[#2d6a4f]/10 text-[#2d6a4f]' },
];

const SECURITY_POLICIES = [
  { title: 'سياسة كلمة المرور', desc: 'الحد الأدنى 10 أحرف، يجب أن تحتوي على أرقام ورموز', icon: Key,    status: 'مُفعَّل',  type: 'active' },
  { title: 'المصادقة الثنائية (2FA)', desc: 'إلزامية لجميع حسابات المشرفين والمديرين',        icon: Shield, status: 'مُفعَّل',  type: 'active' },
  { title: 'جلسة تسجيل الدخول', desc: 'انتهاء الجلسة تلقائياً بعد 30 دقيقة من التعطل',       icon: Lock,   status: 'مُفعَّل',  type: 'active' },
  { title: 'قائمة IP المسموح بها', desc: 'تقييد الوصول للشبكات الداخلية المعتمدة فقط',        icon: Shield, status: 'جزئي',     type: 'partial' },
];

const PAGE_SIZE = 6;

// ── Toggle ────────────────────────────────────────────────────────────────────
const Toggle = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-primary' : 'bg-outline-variant'}`}
  >
    <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${checked ? 'right-0.5' : 'left-0.5'}`} style={{ transform: checked ? 'translateX(-20px)' : 'translateX(0)' }} />
  </button>
);

// ── User Form (Add / Edit) ────────────────────────────────────────────────────
const UserForm = ({ user, onSave, onClose }) => {
  const [form, setForm] = useState({
    name:    user?.name    || '',
    email:   user?.email   || '',
    role:    user?.role    || ROLES_LIST[0],
    branch:  user?.branch  || BRANCHES_LIST[0],
    active:  user?.active  ?? true,
    password: '',
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'الاسم مطلوب';
    if (!form.email.trim()) e.email = 'البريد الإلكتروني مطلوب';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'بريد غير صالح';
    if (!user && !form.password) e.password = 'كلمة المرور مطلوبة للمستخدم الجديد';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => { e.preventDefault(); if (validate()) onSave(form); };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 p-1" dir="rtl">
      {/* Name */}
      <div>
        <label className="block text-xs font-medium text-on-surface-variant mb-1">الاسم الكامل *</label>
        <input value={form.name} onChange={e => set('name', e.target.value)}
          className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-primary ${errors.name ? 'border-error' : 'border-outline-variant/50'} bg-surface`} />
        {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-medium text-on-surface-variant mb-1">البريد الإلكتروني *</label>
        <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
          className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-primary ${errors.email ? 'border-error' : 'border-outline-variant/50'} bg-surface`} />
        {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
      </div>

      {/* Password (only for new users) */}
      {!user && (
        <div>
          <label className="block text-xs font-medium text-on-surface-variant mb-1">كلمة المرور *</label>
          <input type="password" value={form.password} onChange={e => set('password', e.target.value)}
            className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-primary ${errors.password ? 'border-error' : 'border-outline-variant/50'} bg-surface`} />
          {errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
        </div>
      )}

      {/* Role */}
      <div>
        <label className="block text-xs font-medium text-on-surface-variant mb-1">الدور / الصلاحية *</label>
        <div className="relative">
          <select value={form.role} onChange={e => set('role', e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-outline-variant/50 text-sm bg-surface focus:outline-none focus:border-primary appearance-none cursor-pointer">
            {ROLES_LIST.map(r => <option key={r}>{r}</option>)}
          </select>
          <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
        </div>
      </div>

      {/* Branch */}
      <div>
        <label className="block text-xs font-medium text-on-surface-variant mb-1">القطاع / الفرع *</label>
        <div className="relative">
          <select value={form.branch} onChange={e => set('branch', e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-outline-variant/50 text-sm bg-surface focus:outline-none focus:border-primary appearance-none cursor-pointer">
            {BRANCHES_LIST.map(b => <option key={b}>{b}</option>)}
          </select>
          <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
        </div>
      </div>

      {/* Active toggle */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
        <div>
          <p className="text-sm font-medium text-on-surface">تفعيل الحساب</p>
          <p className="text-xs text-on-surface-variant">السماح للمستخدم بتسجيل الدخول</p>
        </div>
        <Toggle checked={form.active} onChange={v => set('active', v)} />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 pt-2">
        <button type="button" onClick={onClose}
          className="flex-1 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant text-sm font-medium hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
          <X className="w-4 h-4" /> إلغاء
        </button>
        <button type="submit"
          className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <Save className="w-4 h-4" /> {user ? 'حفظ التعديلات' : 'إضافة المستخدم'}
        </button>
      </div>
    </form>
  );
};

// ── Inline Drawer (sidebar) ───────────────────────────────────────────────────
const InlineDrawer = ({ open, title, subtitle, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-[420px] max-w-[95vw] bg-surface dark:bg-slate-900 dark:border-slate-800 z-50 shadow-2xl flex flex-col" dir="rtl">
        <div className="flex items-center justify-between p-5 border-b border-outline-variant/30">
          <div>
            <h3 className="font-bold text-on-surface">{title}</h3>
            {subtitle && <p className="text-xs text-on-surface-variant mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </>
  );
};

// ── Confirm Delete Modal ──────────────────────────────────────────────────────
const ConfirmModal = ({ user, onConfirm, onClose }) => {
  if (!user) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-surface dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl" dir="rtl">
          <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center mx-auto mb-4">
            <Trash2 className="w-6 h-6 text-error" />
          </div>
          <h3 className="text-lg font-bold text-on-surface text-center mb-2">حذف المستخدم</h3>
          <p className="text-sm text-on-surface-variant text-center mb-6">
            هل أنت متأكد من حذف <span className="font-semibold text-on-surface">{user.name}</span>؟
            <br />لا يمكن التراجع عن هذا الإجراء.
          </p>
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant text-sm font-medium hover:bg-surface-container transition-colors">إلغاء</button>
            <button onClick={onConfirm} className="flex-1 py-2.5 rounded-xl bg-error text-white text-sm font-bold hover:bg-error/90 transition-colors">حذف نهائياً</button>
          </div>
        </div>
      </div>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ── Main Component ─────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
let nextId = INITIAL_USERS.length + 1;

const UsersPermissions = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // ── Users state ─────────────────────────────────────────────────────────────
  const [users, setUsers] = useState(INITIAL_USERS);

  // ── UI state ────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab]     = useState('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole]   = useState('جميع الأدوار');
  const [selectedStatus, setSelectedStatus] = useState('جميع الحالات');
  const [currentPage, setCurrentPage] = useState(1);

  // drawer states
  const [drawerMode, setDrawerMode]   = useState(null); // 'add' | 'edit' | 'view'
  const [drawerUser, setDrawerUser]   = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // ── Derived data ─────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return users.filter(u => {
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || u.name.includes(searchQuery) || u.email.toLowerCase().includes(q) || u.branch.includes(searchQuery);
      const matchRole   = selectedRole === 'جميع الأدوار' || u.role === selectedRole;
      const matchStatus = selectedStatus === 'جميع الحالات' || (selectedStatus === 'نشط' ? u.active : !u.active);
      return matchSearch && matchRole && matchStatus;
    });
  }, [users, searchQuery, selectedRole, selectedStatus]);

  const totalPages  = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePageNum = Math.min(currentPage, totalPages);
  const pageUsers   = filtered.slice((safePageNum - 1) * PAGE_SIZE, safePageNum * PAGE_SIZE);

  const activeCount   = users.filter(u => u.active).length;
  const inactiveCount = users.length - activeCount;
  const adminCount    = users.filter(u => u.roleType === 'admin').length;

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const openAdd  = () => { setDrawerMode('add'); setDrawerUser(null); };
  const openEdit = (u) => { setDrawerMode('edit'); setDrawerUser(u); };
  const openView = (u) => { setDrawerMode('view'); setDrawerUser(u); };
  const closeDrawer = () => { setDrawerMode(null); setDrawerUser(null); };

  const handleToggle = (userId) => {
    setUsers(prev => prev.map(u => {
      if (u.id !== userId) return u;
      const next = { ...u, active: !u.active };
      showToast(next.active ? `تم تفعيل حساب ${u.name}` : `تم تعطيل حساب ${u.name}`, next.active ? 'success' : 'warning');
      return next;
    }));
  };

  const handleSave = (form) => {
    if (drawerMode === 'add') {
      const initials = form.name.split(' ').slice(0, 2).map(w => w[0]).join('');
      const newUser = {
        id: nextId++,
        name:      form.name.trim(),
        email:     form.email.trim(),
        role:      form.role,
        roleType:  ROLE_TYPE_MAP[form.role] || 'operator',
        branch:    form.branch,
        lastLogin: '—',
        initials,
        avatarBg:  AVATAR_COLORS[nextId % AVATAR_COLORS.length],
        active:    form.active,
      };
      setUsers(prev => [newUser, ...prev]);
      showToast(`تمت إضافة المستخدم ${form.name} بنجاح`, 'success');
    } else if (drawerMode === 'edit') {
      setUsers(prev => prev.map(u => u.id === drawerUser.id
        ? { ...u, name: form.name.trim(), email: form.email.trim(), role: form.role, roleType: ROLE_TYPE_MAP[form.role] || 'operator', branch: form.branch, active: form.active }
        : u
      ));
      showToast(`تم تحديث بيانات ${form.name} بنجاح`, 'success');
    }
    closeDrawer();
    setCurrentPage(1);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setUsers(prev => prev.filter(u => u.id !== deleteTarget.id));
    showToast(`تم حذف المستخدم ${deleteTarget.name} بنجاح`, 'success');
    setDeleteTarget(null);
    setCurrentPage(1);
  };

  const TABS = [
    { id: 'users',       label: 'المستخدمون',           icon: Users },
    { id: 'roles',       label: 'الأدوار والصلاحيات',   icon: Shield },
    { id: 'permissions', label: 'سياسات الأمان',         icon: Lock },
  ];

  return (
    <div className="p-6 md:p-8 bg-background min-h-full" dir="rtl">

      {/* ── Header ── */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="text-xs text-on-surface-variant mb-2 flex items-center gap-1">
            <button onClick={() => navigate('/dashboard')} className="hover:text-primary">الرئيسية</button>
            <span>/</span>
            <span className="text-on-surface font-medium">المستخدمون والصلاحيات</span>
          </nav>
          <h1 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> إدارة المستخدمين والصلاحيات
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">إدارة حسابات المستخدمين والأدوار وسياسات الأمان</p>
        </div>
        <button onClick={openAdd}
          className="h-10 px-5 rounded-xl bg-primary text-on-primary hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm">
          <Plus className="w-4 h-4" /> إضافة مستخدم جديد
        </button>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'إجمالي المستخدمين', value: users.length,  icon: Users,     bg: 'bg-primary/10 text-primary' },
          { label: 'نشط',               value: activeCount,   icon: UserCheck,  bg: 'bg-primary-fixed text-primary' },
          { label: 'غير نشط',           value: inactiveCount, icon: UserX,      bg: 'bg-error-container text-on-error-container' },
          { label: 'مدراء النظام',       value: adminCount,    icon: Shield,     bg: 'bg-primary text-on-primary', dark: true },
        ].map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`rounded-xl p-4 border border-outline-variant/20 shadow-sm ${s.dark ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest'}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 ${s.bg}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className={`text-2xl font-bold ${s.dark ? 'text-on-primary' : 'text-on-surface'}`}>{s.value}</p>
              <p className={`text-xs mt-1 ${s.dark ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* ── Tab bar ── */}
      <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl mb-6 w-fit">
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-surface text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>
              <Icon className="w-4 h-4" /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* ══ TAB: USERS ══════════════════════════════════════════════════════════ */}
      {activeTab === 'users' && (
        <>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <input value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder="بحث عن مستخدم..."
                className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="relative">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <select value={selectedRole} onChange={e => { setSelectedRole(e.target.value); setCurrentPage(1); }}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-2 pr-9 pl-7 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
                {['جميع الأدوار', ...ROLES_LIST].map(r => <option key={r}>{r}</option>)}
              </select>
              <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
            </div>
            <div className="relative">
              <select value={selectedStatus} onChange={e => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
                className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl py-2 px-4 pl-7 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
                {['جميع الحالات', 'نشط', 'غير نشط'].map(s => <option key={s}>{s}</option>)}
              </select>
              <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
            </div>
            <span className="text-xs text-on-surface-variant mr-auto">{filtered.length} مستخدم</span>
          </div>

          {/* Table */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30">
                    {['الاسم', 'الدور', 'القطاع / الفرع', 'الحالة', 'آخر دخول', 'الإجراء'].map(h => (
                      <th key={h} className="py-3 px-4 text-xs font-semibold text-on-surface-variant whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {pageUsers.length === 0 ? (
                    <tr><td colSpan={6} className="py-12 text-center text-on-surface-variant text-sm">لا توجد نتائج تطابق بحثك</td></tr>
                  ) : pageUsers.map(user => {
                    const rl = roleLabels[user.roleType] || roleLabels.operator;
                    return (
                      <tr key={user.id} className="hover:bg-surface-container/30 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white ${user.avatarBg}`}>{user.initials}</div>
                            <div>
                              <p className="text-sm font-medium text-on-surface">{user.name}</p>
                              <p className="text-xs text-on-surface-variant">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${rl.cls}`}>
                            <Shield className="w-3 h-3" />{user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-on-surface-variant max-w-[160px] truncate">{user.branch}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Toggle checked={user.active} onChange={() => handleToggle(user.id)} />
                            <span className={`text-xs font-medium ${user.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                              {user.active ? 'نشط' : 'غير نشط'}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{user.lastLogin}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <button onClick={() => openView(user)} title="عرض" className="w-7 h-7 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"><Eye className="w-4 h-4" /></button>
                            <button onClick={() => openEdit(user)} title="تعديل" className="w-7 h-7 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors"><Edit className="w-4 h-4" /></button>
                            <button onClick={() => setDeleteTarget(user)} title="حذف" className="w-7 h-7 rounded-lg hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ── */}
            <div className="p-4 border-t border-outline-variant/30 flex justify-between items-center">
              <span className="text-sm text-on-surface-variant">
                عرض {filtered.length === 0 ? 0 : (safePageNum - 1) * PAGE_SIZE + 1}–{Math.min(safePageNum * PAGE_SIZE, filtered.length)} من أصل {filtered.length} مستخدم
              </span>
              <div className="flex items-center gap-1">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={safePageNum === 1}
                  className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors ${p === safePageNum ? 'bg-primary text-on-primary font-bold' : 'border border-outline-variant hover:bg-surface-container text-on-surface-variant'}`}>
                    {p}
                  </button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={safePageNum === totalPages}
                  className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ══ TAB: ROLES ══════════════════════════════════════════════════════════ */}
      {activeTab === 'roles' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {ROLES_CARDS.map(role => (
              <div key={role.id} className={`bg-surface-container-lowest rounded-xl border-2 ${role.color} border-opacity-60 p-5 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${role.iconBg}`}><Shield className="w-5 h-5" /></div>
                  <button onClick={() => showToast(`جاري فتح تعديل دور "${role.title}"...`, 'info')}
                    className="h-8 px-3 rounded-lg border border-outline-variant text-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-1.5">
                    <Edit className="w-3.5 h-3.5" /> تعديل
                  </button>
                </div>
                <h3 className="font-semibold text-on-surface mb-1">{role.title}</h3>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{role.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
                  <div className="flex items-center gap-1.5 text-sm"><Users className="w-4 h-4 text-on-surface-variant" /><span className="font-medium text-on-surface">{role.count}</span><span className="text-on-surface-variant">مستخدم</span></div>
                  <div className="flex items-center gap-1.5 text-sm"><Key className="w-4 h-4 text-on-surface-variant" /><span className="font-medium text-on-surface">{role.perms}</span><span className="text-on-surface-variant">صلاحية</span></div>
                </div>
              </div>
            ))}
          </div>
          {/* Permissions matrix */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-outline-variant/30"><h3 className="font-semibold text-on-surface">مصفوفة الصلاحيات</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead><tr className="bg-surface-container-low border-b border-outline-variant/30">
                  <th className="py-3 px-4 text-xs font-semibold text-on-surface-variant">الصلاحية</th>
                  {ROLES_CARDS.map(r => <th key={r.id} className="py-3 px-4 text-xs font-semibold text-on-surface-variant text-center">{r.title}</th>)}
                </tr></thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {[
                    ['عرض الوثائق',     true, true, true, true],
                    ['رفع الوثائق',     true, true, true, true],
                    ['اعتماد الوثائق',  true, true, false, false],
                    ['حذف الوثائق',     true, false, false, false],
                    ['إدارة المستخدمين',true, false, false, false],
                    ['تصدير التقارير',  true, true, true, false],
                    ['إعدادات النظام',  true, false, false, false],
                  ].map(([label, ...perms], ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}>
                      <td className="py-2.5 px-4 font-medium text-on-surface">{label}</td>
                      {perms.map((p, pi) => (
                        <td key={pi} className="py-2.5 px-4 text-center">
                          {p ? <span className="inline-flex w-5 h-5 rounded-full bg-primary-fixed text-primary text-xs items-center justify-center">✓</span>
                             : <span className="inline-flex w-5 h-5 rounded-full bg-error-container text-on-error-container text-xs items-center justify-center">✗</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ══ TAB: SECURITY POLICIES ══════════════════════════════════════════════ */}
      {activeTab === 'permissions' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {SECURITY_POLICIES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Icon className="w-5 h-5" /></div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${p.type === 'active' ? 'bg-primary-fixed text-primary' : 'bg-[#fff3cd] text-[#6a3700]'}`}>{p.status}</span>
                  </div>
                  <h3 className="font-semibold text-on-surface mb-1">{p.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{p.desc}</p>
                  <button onClick={() => showToast(`جاري فتح إعدادات "${p.title}"...`, 'info')}
                    className="h-8 px-3 rounded-lg border border-outline-variant text-sm text-on-surface-variant hover:bg-surface-container flex items-center gap-1.5">
                    <Edit className="w-3.5 h-3.5" /> تعديل السياسة
                  </button>
                </div>
              );
            })}
          </div>
          <div className="bg-primary rounded-xl p-6 text-on-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #ffffff 0%, transparent 50%)' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Shield className="w-5 h-5" /><h3 className="font-semibold">ملخص الحماية الأمنية</h3></div>
                <p className="text-primary-fixed-dim text-sm">جميع سياسات الأمان الرئيسية مُفعَّلة. يُنصح بمراجعة قائمة IP المسموح بها.</p></div>
              <div className="flex items-center gap-6">
                <div className="text-center"><p className="text-3xl font-bold">87%</p><p className="text-primary-fixed-dim text-xs">نقاط الأمان</p></div>
                <button onClick={() => showToast('جاري إعداد تقرير الأمان الكامل...', 'info')} className="h-10 px-4 rounded-xl bg-surface-container-lowest text-primary dark:bg-slate-700 dark:text-white text-sm font-medium hover:bg-primary-fixed transition-colors">تقرير كامل</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Inline Drawer for Add/Edit/View ── */}
      <InlineDrawer
        open={!!drawerMode}
        onClose={closeDrawer}
        title={drawerMode === 'add' ? 'إضافة مستخدم جديد' : drawerMode === 'edit' ? `تعديل: ${drawerUser?.name}` : `ملف: ${drawerUser?.name}`}
        subtitle={drawerMode === 'view' ? drawerUser?.email : undefined}
      >
        {(drawerMode === 'add' || drawerMode === 'edit') && (
          <UserForm user={drawerMode === 'edit' ? drawerUser : null} onSave={handleSave} onClose={closeDrawer} />
        )}
        {drawerMode === 'view' && drawerUser && (
          <div className="space-y-4" dir="rtl">
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white ${drawerUser.avatarBg}`}>{drawerUser.initials}</div>
              <div><h3 className="font-bold text-on-surface">{drawerUser.name}</h3><p className="text-sm text-on-surface-variant">{drawerUser.email}</p></div>
            </div>
            {[
              { label: 'الدور',         value: drawerUser.role },
              { label: 'الفرع',         value: drawerUser.branch },
              { label: 'آخر دخول',     value: drawerUser.lastLogin },
              { label: 'الحالة',        value: drawerUser.active ? 'نشط ✓' : 'غير نشط' },
            ].map(row => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-outline-variant/20">
                <span className="text-sm text-on-surface-variant">{row.label}</span>
                <span className="text-sm font-medium text-on-surface">{row.value}</span>
              </div>
            ))}
            <button onClick={() => { closeDrawer(); openEdit(drawerUser); }}
              className="w-full mt-4 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary/90 flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" /> تعديل البيانات
            </button>
          </div>
        )}
      </InlineDrawer>

      {/* ── Delete Confirm Modal ── */}
      <ConfirmModal user={deleteTarget} onConfirm={confirmDelete} onClose={() => setDeleteTarget(null)} />
    </div>
  );
};

export default UsersPermissions;

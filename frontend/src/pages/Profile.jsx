import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  User, Mail, Phone, Building2, Shield, Edit, Camera,
  Save, Lock, Key, LogOut, Bell, Eye, EyeOff, X,
  CheckCircle, Clock, FileText, Activity, ChevronRight
} from 'lucide-react';

const Toggle = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-primary' : 'bg-outline-variant'}`}
  >
    <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
  </button>
);

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, activeBranch, logout } = useApp();
  const { showToast } = useToast();

  // Guard: should not render without a user (ProtectedRoute handles redirect)
  if (!currentUser) return null;

  const [activeTab, setActiveTab] = useState('info');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    phone: '0501234567',
    department: 'إدارة النظام',
    role: currentUser.roleLabel || currentUser.role,
  });
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [passForm, setPassForm] = useState({ old: '', new: '', confirm: '' });

  const handleSaveProfile = () => {
    setIsEditing(false);
    showToast('تم حفظ الملف الشخصي بنجاح ✓', 'success');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!passForm.old || !passForm.new) { showToast('يرجى ملء جميع الحقول', 'error'); return; }
    if (passForm.new !== passForm.confirm) { showToast('كلمة المرور الجديدة غير متطابقة', 'error'); return; }
    setPassForm({ old: '', new: '', confirm: '' });
    showToast('تم تغيير كلمة المرور بنجاح', 'success');
  };

  const handleLogout = () => {
    logout();
    showToast('تم تسجيل الخروج بنجاح', 'info');
    navigate('/login', { replace: true });
  };

  const recentActivity = [
    { id: 1, action: 'رفع مستند جديد', resource: 'تقرير_أرباح_Q3.pdf', time: 'منذ 10 دقائق', icon: FileText },
    { id: 2, action: 'اعتماد تقرير', resource: 'ميزانية_الربع_الأول.xlsx', time: 'منذ ساعتين', icon: CheckCircle },
    { id: 3, action: 'تعديل صلاحيات مستخدم', resource: 'سارة محمد', time: 'أمس 14:30', icon: Shield },
    { id: 4, action: 'تصدير تقرير', resource: 'سجل_التدقيق_2026.pdf', time: 'أمس 10:15', icon: FileText },
    { id: 5, action: 'إضافة فرع جديد', resource: 'فرع الطائف - المركز', time: 'منذ يومين', icon: Building2 },
  ];

  const activeSessions = [
    { id: 1, device: 'Chrome / Windows 11', location: 'الرياض، السعودية', time: 'الآن', current: true },
    { id: 2, device: 'Safari / iPhone 15', location: 'جدة، السعودية', time: 'منذ 3 ساعات', current: false },
  ];

  return (
    <div className="p-6 md:p-8 bg-background min-h-full">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">الملف الشخصي</h1>
          <p className="text-on-surface-variant text-sm mt-1">إدارة معلوماتك الشخصية وإعدادات الأمان</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-error border border-error/30 hover:bg-error-container/20 transition-colors text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          تسجيل الخروج
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Card - Avatar & Stats */}
        <div className="lg:col-span-1 space-y-4">
          {/* Avatar Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="relative mb-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-md"
              />
              <button
                onClick={() => showToast('ميزة تغيير الصورة ستكون متاحة قريباً', 'info')}
                className="absolute bottom-0 left-0 w-7 h-7 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <h2 className="text-lg font-bold text-on-surface">{formData.name}</h2>
            <p className="text-sm text-primary font-medium mt-0.5">{formData.role}</p>
            <div className="flex items-center gap-1 text-xs text-on-surface-variant mt-1">
              <Building2 className="w-3 h-3" />
              {activeBranch.name}
            </div>
            <div className="mt-3 px-3 py-1 bg-primary-container/20 rounded-full text-xs text-primary font-medium border border-primary/20">
              ● نشط الآن
            </div>
          </div>

          {/* Stats */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 shadow-sm space-y-3">
            {[
              { label: 'المستندات المرفوعة', value: '142', color: 'text-primary' },
              { label: 'التقارير المُعتمدة', value: '38', color: 'text-primary-fixed-dim' },
              { label: 'أيام العمل', value: '847', color: 'text-secondary' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between py-1 border-b border-outline-variant/20 last:border-0">
                <span className="text-sm text-on-surface-variant">{stat.label}</span>
                <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Tabs */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="flex gap-1 bg-surface-container-low p-1 rounded-xl mb-6 w-fit">
            {[
              { id: 'info', label: 'المعلومات الشخصية', icon: User },
              { id: 'security', label: 'الأمان والخصوصية', icon: Shield },
              { id: 'activity', label: 'سجل النشاط', icon: Activity },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-surface text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-outline-variant/20">
                <h3 className="font-semibold text-on-surface">المعلومات الشخصية</h3>
                {!isEditing ? (
                  <button onClick={() => setIsEditing(true)} className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium">
                    <Edit className="w-4 h-4" /> تعديل
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button onClick={() => setIsEditing(false)} className="flex items-center gap-1.5 text-sm text-on-surface-variant border border-outline-variant/30 px-3 py-1.5 rounded-lg hover:bg-surface-container-high">
                      <X className="w-4 h-4" /> إلغاء
                    </button>
                    <button onClick={handleSaveProfile} className="flex items-center gap-1.5 text-sm text-on-primary bg-primary px-3 py-1.5 rounded-lg hover:bg-primary/90">
                      <Save className="w-4 h-4" /> حفظ
                    </button>
                  </div>
                )}
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: 'الاسم الكامل', key: 'name', icon: User, type: 'text' },
                  { label: 'البريد الإلكتروني', key: 'email', icon: Mail, type: 'email' },
                  { label: 'رقم الجوال', key: 'phone', icon: Phone, type: 'tel' },
                  { label: 'الإدارة', key: 'department', icon: Building2, type: 'text' },
                ].map(field => {
                  const Icon = field.icon;
                  return (
                    <div key={field.key}>
                      <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">{field.label}</label>
                      {isEditing ? (
                        <div className="relative">
                          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/60" />
                          <input
                            type={field.type}
                            value={formData[field.key]}
                            onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                            className="w-full pr-9 pl-4 py-2.5 bg-surface border border-outline-variant/50 rounded-lg text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 py-2.5 px-3 bg-surface-container-low/50 rounded-lg">
                          <Icon className="w-4 h-4 text-on-surface-variant/60" />
                          <span className="text-sm text-on-surface">{formData[field.key]}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">الدور الوظيفي</label>
                  <div className="flex items-center gap-2 py-2.5 px-3 bg-primary-container/10 rounded-lg border border-primary/20">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{formData.role}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-5">
              {/* Change Password */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm">
                <div className="p-5 border-b border-outline-variant/20">
                  <h3 className="font-semibold text-on-surface flex items-center gap-2"><Lock className="w-4 h-4 text-primary" />تغيير كلمة المرور</h3>
                </div>
                <form onSubmit={handleChangePassword} className="p-6 space-y-4">
                  {[
                    { label: 'كلمة المرور الحالية', key: 'old', show: showOldPass, setShow: setShowOldPass },
                    { label: 'كلمة المرور الجديدة', key: 'new', show: showNewPass, setShow: setShowNewPass },
                    { label: 'تأكيد كلمة المرور الجديدة', key: 'confirm', show: showNewPass, setShow: setShowNewPass },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="text-xs font-medium text-on-surface-variant mb-1.5 block">{field.label}</label>
                      <div className="relative">
                        <input
                          type={field.show ? 'text' : 'password'}
                          value={passForm[field.key]}
                          onChange={(e) => setPassForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                          className="w-full pr-4 pl-10 py-2.5 bg-surface border border-outline-variant/50 rounded-lg text-on-surface text-sm focus:outline-none focus:border-primary"
                        />
                        <button type="button" onClick={() => field.setShow(!field.show)} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                          {field.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Key className="w-4 h-4" /> تحديث كلمة المرور
                  </button>
                </form>
              </div>

              {/* 2FA & Sessions */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm">
                <div className="p-5 border-b border-outline-variant/20">
                  <h3 className="font-semibold text-on-surface flex items-center gap-2"><Shield className="w-4 h-4 text-primary" />الأمان المتقدم</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl">
                    <div>
                      <p className="font-medium text-on-surface text-sm">المصادقة الثنائية (2FA)</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">حماية إضافية لحسابك عبر رمز التحقق</p>
                    </div>
                    <Toggle checked={twoFA} onChange={(v) => { setTwoFA(v); showToast(v ? 'تم تفعيل المصادقة الثنائية' : 'تم إيقاف المصادقة الثنائية', v ? 'success' : 'warning'); }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface mb-3">الجلسات النشطة</h4>
                    <div className="space-y-2">
                      {activeSessions.map(session => (
                        <div key={session.id} className="flex items-center justify-between p-3 bg-surface-container-low/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${session.current ? 'bg-primary' : 'bg-on-surface-variant/40'}`} />
                            <div>
                              <p className="text-sm font-medium text-on-surface">{session.device}</p>
                              <p className="text-xs text-on-surface-variant">{session.location} · {session.time}</p>
                            </div>
                          </div>
                          {!session.current && (
                            <button onClick={() => showToast('تم إنهاء الجلسة بنجاح', 'success')} className="text-xs text-error hover:text-error/80 font-medium">إنهاء</button>
                          )}
                          {session.current && <span className="text-xs text-primary bg-primary-container/20 px-2 py-0.5 rounded-full">الجلسة الحالية</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-sm">
              <div className="p-5 border-b border-outline-variant/20">
                <h3 className="font-semibold text-on-surface flex items-center gap-2"><Activity className="w-4 h-4 text-primary" />سجل النشاط الأخير</h3>
              </div>
              <div className="p-4 divide-y divide-outline-variant/20">
                {recentActivity.map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-center gap-4 py-4 hover:bg-surface-container-low/30 px-2 rounded-lg transition-colors">
                      <div className="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-on-surface">{item.action}</p>
                        <p className="text-xs text-on-surface-variant truncate mt-0.5">{item.resource}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-on-surface-variant flex-shrink-0">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import {
  Settings,
  Shield,
  Bell,
  Database,
  Globe,
  Moon,
  Sun,
  Save,
  RefreshCw,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  ChevronRight,
  Zap,
  Link2,
} from 'lucide-react';

/* ─────────────────────────── helpers ─────────────────────────── */

const Toggle = ({ enabled, onChange, label, description }) => (
  <div className="flex items-center justify-between py-4 border-b border-outline-variant last:border-0">
    <div className="flex flex-col gap-0.5">
      <span className="text-sm font-medium text-on-surface">{label}</span>
      {description && <span className="text-xs text-on-surface-variant">{description}</span>}
    </div>
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled ? 'bg-primary' : 'bg-outline-variant'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

const SectionCard = ({ title, children }) => (
  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 mb-5">
    {title && <h3 className="text-base font-semibold text-on-surface mb-4">{title}</h3>}
    {children}
  </div>
);

const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5 mb-4">
    <label className="text-sm font-medium text-on-surface-variant">{label}</label>
    {children}
  </div>
);

const inputCls =
  'w-full rounded-xl border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition';

const selectCls = inputCls + ' cursor-pointer';

/* ─────────────────────────── tab data ─────────────────────────── */

const TABS = [
  { key: 'general', label: 'إعدادات عامة', icon: Settings },
  { key: 'security', label: 'الأمان', icon: Shield },
  { key: 'notifications', label: 'الإشعارات', icon: Bell },
  { key: 'archive', label: 'سياسات الأرشيف', icon: Database },
  { key: 'integrations', label: 'التكاملات', icon: Link2 },
];

/* ─────────────────────────── integrations data ─────────────────────────── */

const INTEGRATIONS = [
  {
    id: 'smtp',
    name: 'خادم البريد الإلكتروني (SMTP)',
    description: 'إرسال الإشعارات والتقارير عبر البريد',
    status: true,
    color: 'bg-blue-100 text-blue-700',
    icon: '✉',
  },
  {
    id: 'ldap',
    name: 'مزامنة LDAP / Active Directory',
    description: 'مزامنة حسابات المستخدمين مع دليل المؤسسة',
    status: true,
    color: 'bg-purple-100 text-purple-700',
    icon: '🔗',
  },
  {
    id: 'backup',
    name: 'التخزين السحابي للنسخ الاحتياطية',
    description: 'نسخ احتياطي آلي إلى S3 / Azure Blob',
    status: false,
    color: 'bg-orange-100 text-orange-700',
    icon: '☁',
  },
  {
    id: 'sso',
    name: 'تسجيل الدخول الموحد (SSO / SAML)',
    description: 'تفعيل المصادقة عبر SAML 2.0',
    status: false,
    color: 'bg-green-100 text-green-700',
    icon: '🔑',
  },
];

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */

export default function SettingsPage() {
  const { showToast } = useToast();

  /* tab */
  const [activeTab, setActiveTab] = useState('general');

  /* general settings */
  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'دار الصفاء - منصة الأرشيف الذكي',
    language: 'ar',
    timezone: 'Asia/Riyadh',
    dateFormat: 'DD/MM/YYYY',
  });

  /* security settings */
  const [securitySettings, setSecuritySettings] = useState({
    twoFA: true,
    sessionTimeout: true,
    passwordExpiry: false,
    ipWhitelist: false,
    sessionTimeoutMinutes: 30,
  });

  /* notification settings */
  const [notifSettings, setNotifSettings] = useState({
    emailNotif: true,
    smsNotif: false,
    browserNotif: true,
    reportReady: true,
    documentApproval: true,
    systemAlerts: true,
  });

  /* archive settings */
  const [retentionDays, setRetentionDays] = useState(365);
  const [autoArchive, setAutoArchive] = useState(true);
  const [ocrEnabled, setOcrEnabled] = useState(true);
  const [compressionEnabled, setCompressionEnabled] = useState(false);

  /* integrations */
  const [integrations, setIntegrations] = useState(INTEGRATIONS);

  /* ── helpers ── */
  const updateGeneral = (key, val) => setGeneralSettings(p => ({ ...p, [key]: val }));
  const updateSecurity = (key, val) => setSecuritySettings(p => ({ ...p, [key]: val }));
  const updateNotif = (key, val) => setNotifSettings(p => ({ ...p, [key]: val }));
  const toggleIntegration = (id) =>
    setIntegrations(prev =>
      prev.map(i => (i.id === id ? { ...i, status: !i.status } : i))
    );

  const saveGeneral = () => showToast('تم حفظ الإعدادات العامة بنجاح', 'success');
  const saveSecurity = () => showToast('تم حفظ إعدادات الأمان بنجاح', 'success');
  const saveNotifications = () => showToast('تم حفظ تفضيلات الإشعارات بنجاح', 'success');
  const saveArchive = () => showToast('تم حفظ سياسات الأرشفة بنجاح', 'success');
  const saveIntegrations = () => showToast('تم حفظ إعدادات التكاملات بنجاح', 'success');

  /* ─────────────── TAB PANELS ─────────────── */

  const renderGeneral = () => (
    <div>
      <SectionCard title="معلومات المنصة">
        <FormField label="اسم المنصة">
          <input
            className={inputCls}
            value={generalSettings.platformName}
            onChange={e => updateGeneral('platformName', e.target.value)}
          />
        </FormField>
        <FormField label="لغة الواجهة">
          <select
            className={selectCls}
            value={generalSettings.language}
            onChange={e => updateGeneral('language', e.target.value)}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </FormField>
        <FormField label="المنطقة الزمنية">
          <select
            className={selectCls}
            value={generalSettings.timezone}
            onChange={e => updateGeneral('timezone', e.target.value)}
          >
            <option value="Asia/Riyadh">توقيت الرياض (AST +3)</option>
            <option value="UTC">UTC</option>
            <option value="Asia/Dubai">توقيت دبي (+4)</option>
            <option value="Europe/London">توقيت لندن (GMT)</option>
          </select>
        </FormField>
        <FormField label="تنسيق التاريخ">
          <select
            className={selectCls}
            value={generalSettings.dateFormat}
            onChange={e => updateGeneral('dateFormat', e.target.value)}
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            <option value="DD-MM-YYYY هجري">هجري</option>
          </select>
        </FormField>
      </SectionCard>

      <SectionCard title="الشعار والهوية البصرية">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-on-primary text-3xl font-bold">
            ص
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 rounded-xl border border-outline-variant text-sm text-on-surface hover:bg-surface-container transition">
              تغيير الشعار
            </button>
            <span className="text-xs text-on-surface-variant">PNG أو SVG · حجم أقصى 2MB</span>
          </div>
        </div>
      </SectionCard>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => showToast('تم إعادة ضبط الإعدادات', 'info')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline-variant text-sm text-on-surface hover:bg-surface-container transition"
        >
          <RefreshCw className="w-4 h-4" />
          إعادة الضبط
        </button>
        <button
          onClick={saveGeneral}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition"
        >
          <Save className="w-4 h-4" />
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div>
      <SectionCard title="المصادقة والجلسات">
        <Toggle
          enabled={securitySettings.twoFA}
          onChange={v => updateSecurity('twoFA', v)}
          label="تفعيل المصادقة الثنائية (2FA)"
          description="يتطلب رمز TOTP عند تسجيل الدخول من أجهزة جديدة"
        />
        <Toggle
          enabled={securitySettings.sessionTimeout}
          onChange={v => updateSecurity('sessionTimeout', v)}
          label="تسجيل خروج تلقائي"
          description="تسجيل الخروج تلقائياً عند انتهاء مدة الخمول"
        />
        {securitySettings.sessionTimeout && (
          <div className="mt-3 mb-2 flex items-center gap-4">
            <label className="text-sm text-on-surface-variant whitespace-nowrap">مدة الخمول (دقيقة):</label>
            <input
              type="number"
              min={5}
              max={240}
              value={securitySettings.sessionTimeoutMinutes}
              onChange={e => updateSecurity('sessionTimeoutMinutes', Number(e.target.value))}
              className="w-28 rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}
        <Toggle
          enabled={securitySettings.passwordExpiry}
          onChange={v => updateSecurity('passwordExpiry', v)}
          label="انتهاء صلاحية كلمة المرور"
          description="إلزام المستخدمين بتغيير كلمة المرور كل 90 يوماً"
        />
        <Toggle
          enabled={securitySettings.ipWhitelist}
          onChange={v => updateSecurity('ipWhitelist', v)}
          label="قائمة العناوين المسموحة (IP Whitelist)"
          description="السماح بالدخول من عناوين IP محددة فقط"
        />
      </SectionCard>

      <SectionCard title="سجل محاولات الدخول">
        <div className="space-y-3">
          {[
            { ip: '192.168.1.105', time: 'اليوم 14:32', status: 'success', user: 'أحمد عبدالله' },
            { ip: '10.0.4.52', time: 'اليوم 13:15', status: 'success', user: 'سارة محمد' },
            { ip: '185.220.101.47', time: 'أمس 22:08', status: 'fail', user: 'مجهول' },
          ].map((entry, i) => (
            <div key={i} className="flex items-center justify-between bg-surface-container-low rounded-xl px-4 py-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-on-surface">{entry.user}</span>
                <span className="text-xs text-on-surface-variant">{entry.ip} · {entry.time}</span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                entry.status === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-error-container text-on-error-container'
              }`}>
                {entry.status === 'success' ? 'ناجح' : 'فاشل'}
              </span>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="flex justify-end gap-3">
        <button
          onClick={saveSecurity}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition"
        >
          <Save className="w-4 h-4" />
          حفظ إعدادات الأمان
        </button>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div>
      <SectionCard title="قنوات الإشعارات">
        <Toggle
          enabled={notifSettings.emailNotif}
          onChange={v => updateNotif('emailNotif', v)}
          label="إشعارات البريد الإلكتروني"
          description="إرسال تنبيهات عبر البريد الإلكتروني المسجَّل"
        />
        <Toggle
          enabled={notifSettings.smsNotif}
          onChange={v => updateNotif('smsNotif', v)}
          label="إشعارات الرسائل النصية (SMS)"
          description="تنبيهات نصية للعمليات الحرجة"
        />
        <Toggle
          enabled={notifSettings.browserNotif}
          onChange={v => updateNotif('browserNotif', v)}
          label="إشعارات المتصفح"
          description="إشعارات فورية داخل المنصة"
        />
      </SectionCard>

      <SectionCard title="أنواع الإشعارات">
        <Toggle
          enabled={notifSettings.reportReady}
          onChange={v => updateNotif('reportReady', v)}
          label="اكتمال التقارير"
          description="إشعار عند الانتهاء من إنشاء تقرير"
        />
        <Toggle
          enabled={notifSettings.documentApproval}
          onChange={v => updateNotif('documentApproval', v)}
          label="طلبات الاعتماد"
          description="إشعار عند ورود طلب اعتماد مستند جديد"
        />
        <Toggle
          enabled={notifSettings.systemAlerts}
          onChange={v => updateNotif('systemAlerts', v)}
          label="تنبيهات النظام"
          description="أخطاء المعالجة وتحذيرات الأمان وتنبيهات الصيانة"
        />
      </SectionCard>

      <div className="flex justify-end">
        <button
          onClick={saveNotifications}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition"
        >
          <Save className="w-4 h-4" />
          حفظ تفضيلات الإشعارات
        </button>
      </div>
    </div>
  );

  const renderArchive = () => (
    <div>
      <SectionCard title="سياسة الاحتفاظ بالمستندات">
        <FormField label={`فترة الاحتفاظ: ${retentionDays} يوم`}>
          <input
            type="range"
            min={30}
            max={3650}
            step={30}
            value={retentionDays}
            onChange={e => setRetentionDays(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-on-surface-variant mt-1">
            <span>30 يوم</span>
            <span>1 سنة</span>
            <span>5 سنوات</span>
            <span>10 سنوات</span>
          </div>
        </FormField>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-sm text-on-surface-variant">أو أدخل يدوياً:</span>
          <input
            type="number"
            min={30}
            max={3650}
            value={retentionDays}
            onChange={e => setRetentionDays(Number(e.target.value))}
            className="w-28 rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="text-sm text-on-surface-variant">يوم</span>
        </div>
      </SectionCard>

      <SectionCard title="إعدادات الأرشفة التلقائية">
        <Toggle
          enabled={autoArchive}
          onChange={setAutoArchive}
          label="الأرشفة التلقائية"
          description="نقل المستندات المنتهية الصلاحية تلقائياً إلى الأرشيف الجامد"
        />
        <Toggle
          enabled={ocrEnabled}
          onChange={setOcrEnabled}
          label="معالجة OCR التلقائية"
          description="استخراج النصوص من المستندات الممسوحة ضوئياً فور رفعها"
        />
        <Toggle
          enabled={compressionEnabled}
          onChange={setCompressionEnabled}
          label="ضغط الملفات عند الأرشفة"
          description="تقليل حجم الملفات باستخدام خوارزمية LZMA عند نقلها للأرشيف"
        />
      </SectionCard>

      <SectionCard title="إحصاءات التخزين الحالية">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'إجمالي الملفات', value: '142,850' },
            { label: 'الحجم المستخدم', value: '2.4 TB' },
            { label: 'الملفات المؤرشفة', value: '98,320' },
          ].map((stat, i) => (
            <div key={i} className="bg-surface-container-low rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-on-surface-variant mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="flex justify-end gap-3">
        <button
          onClick={saveArchive}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition"
        >
          <Save className="w-4 h-4" />
          حفظ سياسات الأرشفة
        </button>
      </div>
    </div>
  );

  const renderIntegrations = () => (
    <div>
      <SectionCard title="التكاملات المتاحة">
        <div className="space-y-4">
          {integrations.map(intg => (
            <div
              key={intg.id}
              className="flex items-center justify-between bg-surface-container-low rounded-xl px-5 py-4 border border-outline-variant"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${intg.color}`}>
                  {intg.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{intg.name}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{intg.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  intg.status ? 'bg-green-100 text-green-700' : 'bg-surface-container text-on-surface-variant'
                }`}>
                  {intg.status ? 'مُفعَّل' : 'معطَّل'}
                </span>
                <button
                  type="button"
                  onClick={() => toggleIntegration(intg.id)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                    intg.status ? 'bg-primary' : 'bg-outline-variant'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ${
                      intg.status ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <button
          onClick={saveIntegrations}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary-container transition"
        >
          <Save className="w-4 h-4" />
          حفظ إعدادات التكاملات
        </button>
      </div>
    </div>
  );

  const panelMap = {
    general: renderGeneral,
    security: renderSecurity,
    notifications: renderNotifications,
    archive: renderArchive,
    integrations: renderIntegrations,
  };

  /* ═══════════════════════ RENDER ═══════════════════════ */

  return (
    <div className="min-h-screen bg-surface p-6" dir="rtl">
      {/* ── Header ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
          <span>الرئيسية</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-on-surface font-medium">إعدادات النظام</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-on-surface">إعدادات النظام</h1>
            <p className="text-sm text-on-surface-variant">تحكم كامل في تكوين المنصة وسياساتها</p>
          </div>
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="flex gap-6">
        {/* Sidebar tabs */}
        <aside className="w-60 flex-shrink-0">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm transition border-b border-outline-variant last:border-0 ${
                    active
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content panel */}
        <main className="flex-1 min-w-0">
          {panelMap[activeTab]?.()}
        </main>
      </div>
    </div>
  );
}

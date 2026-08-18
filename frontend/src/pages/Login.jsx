import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp, DEMO_USERS } from '../context/AppContext';
import { Building2, Mail, Lock, Eye, EyeOff, Shield, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

// Role badge colors
const roleBadge = {
  super_admin:    { label: 'مدير النظام (Super Admin)',      cls: 'bg-primary/10 text-primary border-primary/20' },
  branch_manager: { label: 'مدير فرع (Branch Manager)',      cls: 'bg-secondary/10 text-secondary border-secondary/20' },
  data_clerk:     { label: 'موظف إدخال بيانات (Data Clerk)', cls: 'bg-[#6b5ea8]/10 text-[#6b5ea8] border-[#6b5ea8]/20' },
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useApp();

  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState('');
  const [remember, setRemember]       = useState(false);
  const [showDemoPanel, setShowDemoPanel] = useState(false);

  const fillDemo = (user) => {
    setEmail(user.email);
    setPassword(user.password);
    setError('');
    setShowDemoPanel(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('يرجى إدخال البريد الإلكتروني وكلمة المرور');
      return;
    }

    const matched = DEMO_USERS.find(
      u => u.email === email.trim() && u.password === password
    );

    if (!matched) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      login(matched);
      navigate('/dashboard', { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* ── Left decorative panel ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-[#001f14] flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
        {/* glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-fixed-dim/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-sm">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-xl">
            <Building2 className="w-10 h-10 text-primary-fixed-dim" />
          </div>
          <h1 className="text-3xl font-black text-white mb-3">دار الصفاء الذكية</h1>
          <p className="text-primary-fixed-dim/80 text-sm leading-relaxed">
            نظام الأرشيف الذكي والرقابة المؤسسية — منصة متكاملة لإدارة الوثائق والمستندات لجميع فروع دار الصفاء
          </p>

          {/* Feature bullets */}
          <div className="mt-10 space-y-3 text-right">
            {[
              'أرشفة ذكية بتقنية OCR بدقة 98.5%',
              'إدارة صلاحيات متعددة المستويات',
              'تقارير وتحليلات مالية لحظية',
              'سجل تدقيق شامل ومحمي',
            ].map(f => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary-fixed-dim flex-shrink-0" />
                <span className="text-sm text-primary-fixed-dim/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right login form ── */}
      <div className="flex-1 bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-7 h-7 text-on-primary" />
            </div>
            <h1 className="text-xl font-bold text-on-surface">دار الصفاء الذكية</h1>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-on-surface">تسجيل الدخول</h2>
              <p className="text-on-surface-variant text-sm mt-1">أدخل بياناتك للوصول إلى النظام</p>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-error-container/40 text-on-error-container border border-error/30 rounded-xl p-3 mb-4 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1.5">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    placeholder="you@daralsafaa.com"
                    className="w-full pr-10 pl-4 py-3 bg-surface border border-outline-variant/50 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1.5">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    placeholder="••••••••"
                    className="w-full pr-10 pl-10 py-3 bg-surface border border-outline-variant/50 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(p => !p)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded accent-primary"
                  />
                  <span className="text-sm text-on-surface-variant">تذكرني</span>
                </label>
                <button
                  type="button"
                  onClick={() => setError('يرجى التواصل مع مدير النظام لإعادة تعيين كلمة المرور')}
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold text-sm hover:bg-primary/90 active:scale-[0.99] transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                    جاري تسجيل الدخول...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    تسجيل الدخول
                  </>
                )}
              </button>
            </form>

            {/* ── Demo Users Panel ── */}
            <div className="mt-6 pt-5 border-t border-outline-variant/30">
              <button
                onClick={() => setShowDemoPanel(p => !p)}
                className="w-full flex items-center justify-between text-sm text-on-surface-variant hover:text-on-surface transition-colors group"
              >
                <span className="font-medium">🔑 مستخدمون تجريبيون للعرض</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDemoPanel ? 'rotate-180' : ''}`} />
              </button>

              {showDemoPanel && (
                <div className="mt-3 space-y-2">
                  {DEMO_USERS.map(user => (
                    <button
                      key={user.id}
                      onClick={() => fillDemo(user)}
                      className="w-full text-right p-3 rounded-xl border border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low/50 transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-on-surface">{user.name}</p>
                          <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium flex-shrink-0 ${roleBadge[user.role]?.cls}`}>
                          {roleBadge[user.role]?.label}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-on-surface-variant/70">
                        {user.role === 'super_admin' && '✅ يرى جميع الشاشات والإعدادات'}
                        {user.role === 'branch_manager' && '⚠️ لا يرى الإعدادات ومصفوفة الصلاحيات'}
                        {user.role === 'data_clerk' && '🔒 يرى الأرشيف ومعالجة OCR فقط'}
                      </div>
                    </button>
                  ))}
                  <p className="text-xs text-on-surface-variant/60 text-center pt-1">
                    انقر على أي مستخدم لملء البيانات تلقائياً
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-on-surface-variant mt-4">
            © 2026 دار الصفاء — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

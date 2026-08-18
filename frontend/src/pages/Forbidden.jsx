import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, ShieldX } from 'lucide-react';

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8" dir="rtl">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="text-[120px] font-black text-error/10 leading-none select-none">403</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-error-container/50 rounded-2xl flex items-center justify-center shadow-lg border border-error/20">
              <ShieldX className="w-12 h-12 text-error/60" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-on-surface mb-3">غير مصرح بالوصول</h1>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
          ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة. يرجى التواصل مع مدير النظام للحصول على الإذن اللازم.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline-variant/40 text-on-surface hover:bg-surface-container-high text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            الصفحة السابقة
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary/90 text-sm font-medium transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            لوحة التحكم
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;

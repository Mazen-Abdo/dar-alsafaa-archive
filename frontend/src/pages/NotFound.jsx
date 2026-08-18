import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8" dir="rtl">
      <div className="text-center max-w-md">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="text-[120px] font-black text-outline-variant/20 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-surface-container rounded-2xl flex items-center justify-center shadow-lg border border-outline-variant/30">
              <AlertCircle className="w-12 h-12 text-on-surface-variant/40" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-on-surface mb-3">الصفحة غير موجودة</h1>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها أو حذفها. تحقق من الرابط أو عد للصفحة الرئيسية.
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

export default NotFound;

import React from 'react';

const Screen17 = () => {
  return (
    <>
      <div className="">

{/*  Content Canvas - Suppressing nav for error dead-end  */}
<div className="flex-1 flex flex-col min-h-screen relative">
{/*  Global Error Banner  */}
<div className="w-full bg-error-container text-on-error-container px-margin-desktop py-md flex items-center justify-between border-b border-error/20">
<div className="flex items-center gap-md">
<span data-weight="fill" className="material-symbols-outlined text-error">warning</span>
<div>
<h2 className="font-title-md text-title-md">نظام الطوارئ النشط</h2>
<p className="font-body-md text-body-md opacity-90 mt-xs">تم تسجيل انقطاع في الخدمة المركزية.</p>
</div>
</div>
</div>
{/*  Main Content Area  */}
<main className="flex-1 flex items-center justify-center p-margin-desktop relative overflow-hidden">
{/*  Abstract Error Background  */}
<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<span className="material-symbols-outlined text-[400px] text-error">cloud_off</span>
</div>
{/*  Error Card (Glassmorphism/Premium)  */}
<div className="relative bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant rounded-xl shadow-lg p-3xl max-w-2xl w-full text-center z-10">
<div className="w-3xl h-3xl bg-error-container rounded-full flex items-center justify-center mx-auto mb-lg">
<span className="material-symbols-outlined text-error text-[48px]">dns</span>
</div>
<h1 className="font-display-sm text-display-sm text-on-surface mb-sm">حدث خطأ غير متوقع في النظام</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg mx-auto">
                    فقد الاتصال بالخادم. نحن نعمل على إصلاح المشكلة حالياً لاستعادة الخدمات في أقرب وقت. يرجى المحاولة مرة أخرى لاحقاً.
                </p>
{/*  Technical Details  */}
<div dir="ltr" className="bg-surface-container-low rounded-lg p-md mb-xl border border-outline-variant/50 inline-block text-left">
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono">
<span className="font-bold text-error">ERR-8842</span> : 500 INTERNAL_SERVER_ERROR
                    </p>
</div>
{/*  Actions  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-md">
<button className="bg-primary text-on-primary hover:bg-primary/90 transition-colors px-xl py-md rounded-lg font-title-md text-title-md flex items-center gap-sm w-full sm:w-auto shadow-sm">
<span className="material-symbols-outlined">refresh</span>
                        إعادة المحاولة
                    </button>
<button className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors px-xl py-md rounded-lg font-title-md text-title-md w-full sm:w-auto border border-outline-variant">
                        التواصل مع الدعم
                    </button>
</div>
</div>
</main>
</div>

</div>
    </>
  );
};

export default Screen17;

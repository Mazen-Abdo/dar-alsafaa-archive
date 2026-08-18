import React from 'react';

const Screen2 = () => {
  return (
    <>
      <div className="">

{/*  Suppressed Nav Shell based on rules: Content Relevance Check - Error 404/403 page does not logically sit under categories, suppress navigation to prioritize the content canvas.  */}
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col justify-center items-center w-full min-h-screen p-margin-mobile md:p-margin-desktop bg-surface relative overflow-hidden">
{/*  Ambient Background Glow  */}
<div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center opacity-30">
<div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
<div className="w-[600px] h-[600px] bg-error/5 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
</div>
{/*  403 Container  */}
<div className="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-lg border border-outline-variant/30 p-8 md:p-12 text-center animate-fade-in-up">
{/*  Icon/Illustration Area  */}
<div className="mx-auto w-24 h-24 md:w-32 md:h-32 bg-error/10 text-error rounded-full flex items-center justify-center mb-8 shadow-sm">
<span className="material-symbols-outlined text-[48px] md:text-[64px]" style={{"fontVariationSettings":"'FILL' 1"}}>
                    lock_person
                </span>
</div>
{/*  Error Code  */}
<div className="font-display-lg text-display-lg text-primary mb-xs">
                403
            </div>
{/*  Headings  */}
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md">
                عفواً، لا تملك الصلاحية الكافية للوصول إلى هذه الصفحة
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto mb-xl">
                هذه الصفحة مخصصة لمدراء القطاعات فقط. يرجى التواصل مع مسؤول النظام إذا كنت تعتقد أن هذا خطأ.
            </p>
{/*  Actions  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-md">
<a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-sm px-6 py-3 bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
                    العودة للوحة القيادة
                </a>
<a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-sm px-6 py-3 bg-surface-container-low text-primary border border-outline-variant/50 rounded-lg font-title-md text-title-md hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                    طلب رفع الصلاحيات من المسؤول
                </a>
</div>
{/*  Decorative Elements  */}
<div className="mt-xl pt-lg border-t border-outline-variant/20 flex justify-center items-center gap-sm text-on-surface-variant/60 font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">security</span>
<span>منصة المشاريع - نظام دار الصفاء الذكي</span>
</div>
</div>
</main>
<style dangerouslySetInnerHTML={{ __html: "\n        @keyframes fadeInUp {\n            from {\n                opacity: 0;\n                transform: translateY(20px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n        .animate-fade-in-up {\n            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n        }\n    " }} />

</div>
    </>
  );
};

export default Screen2;

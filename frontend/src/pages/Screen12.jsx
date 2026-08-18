import React from 'react';

const Screen12 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<div className="">

{/*  Main Workspace: Empty State  */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop flex flex-col items-center justify-center relative overflow-hidden bg-surface">
{/*  Background Subtle Pattern (Decorative)  */}
<div className="absolute inset-0 opacity-5 pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, #064E3B 1px, transparent 0)","backgroundSize":"32px 32px"}}></div>
<div className="max-w-xl w-full text-center relative z-10 p-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center">
{/*  Illustration  */}
<div className="w-64 h-64 mb-8 relative">
<img alt="مجلد فارغ" data-alt="A friendly, modern enterprise vector illustration of an empty digital folder or vault. The style is clean, using a color palette of deep green and subtle greys on a white background. The folder is slightly open, revealing empty space inside. The overall mood is approachable and professional, designed for an empty state in a SaaS application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5htIDdDQySuNsEQlmAfgi0KFJP7lVDKuRHj-IBDiSlhQfx6tFO_ryhX_oarI5rO6WqmK6ZUxC024dS7T5_RcjGk4gobnK5waQIsaQu3PtCvAU_5Q1DKmW9VAx2UHCrj9DOBpYICFX-kQczO4exZgaND69FwLjSqQP7b1Pyob6wdPEhY55ZFE6B-KQTFzhprSo6FX77hMs_rRhHXLAyYniU3w-3WchGEgUoxAp-kc7rx-VrxL4T5ZiuQ" className="w-full h-full object-contain" />
</div>
{/*  Text Content  */}
<h1 className="text-headline-lg font-headline-lg text-on-surface mb-4">لا توجد مستندات مؤرشفة حتى الآن</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-md mx-auto mb-10">
                    ابدأ بتنظيم أرشيفك الإلكتروني عن طريق رفع الملفات أو سحبها هنا مباشرة.
                </p>
{/*  Primary CTA  */}
<button className="bg-primary text-on-primary hover:opacity-90 hover:text-on-primary-container px-8 py-4 rounded-xl font-title-lg text-title-lg shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-3">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                    رفع أول مستند للأرشيف
                </button>
{/*  Drag and drop zone hint  */}
<div className="mt-8 pt-8 border-t border-dashed border-outline-variant w-full">
<p className="text-label-md font-label-md text-outline flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[16px]">info</span>
                        يمكنك أيضاً سحب وإفلات الملفات في هذه المساحة
                    </p>
</div>
</div>
</main>
</div>

</div>
    </>
  );
};

export default Screen12;


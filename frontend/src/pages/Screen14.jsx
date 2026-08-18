import React from 'react';

const Screen14 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Canvas  */}
<main className="flex-grow flex flex-col items-center justify-center py-xl px-margin-mobile md:px-margin-desktop bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23003527\\' fill-opacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
<div className="w-full max-w-[1024px] bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden border border-outline-variant/50">

<div className="p-lg md:p-xl border-b border-outline-variant/30 bg-surface">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">مرحباً بعودتك، اختر وجهتك</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">الرجاء تحديد القطاع والفرع الذي ترغب في الدخول إليه لمتابعة العمل.</p>
</div>
<div className="w-full md:w-72 relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input placeholder="ابحث عن فرع أو قطاع..." type="text" className="w-full bg-surface-container-lowest border border-outline text-on-surface rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md transition-shadow" />
</div>
</div>
</div>
{/*  Branches Grid  */}
<div className="p-lg md:p-xl bg-background/50">
{/*  Category 1: Restaurants  */}
<div className="mb-lg">
<h2 className="font-title-lg text-title-lg text-on-secondary-container mb-md flex items-center gap-2">
<span data-icon="restaurant" className="material-symbols-outlined text-secondary">restaurant</span>
                        قطاع المطاعم
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
{/*  Branch Card 1 (Selected/Main)  */}
<div onclick="selectBranch(this)" className="branch-card selected relative bg-surface-container-lowest rounded-lg p-md border-outline cursor-pointer overflow-hidden">
<div className="card-overlay absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-300"></div>
<div className="absolute top-3 left-3">
<span data-icon="check_circle" className="material-symbols-outlined text-primary icon-fill">check_circle</span>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
<span data-icon="storefront" className="material-symbols-outlined">storefront</span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-label-md">الفرع الرئيسي</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">فرع الرياض (العليا)</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-md text-body-md mb-3">
<span data-icon="location_on" className="material-symbols-outlined text-sm">location_on</span>
<span>منطقة الرياض، المملكة العربية السعودية</span>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/30 pt-3 mt-2">
<span className="font-label-sm text-label-sm text-surface-tint">نشط الآن</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span data-icon="group" className="material-symbols-outlined text-[14px]">group</span> 45 موظف
                                </span>
</div>
</div>
{/*  Branch Card 2  */}
<div onclick="selectBranch(this)" className="branch-card relative bg-surface-container-lowest rounded-lg p-md border-outline cursor-pointer overflow-hidden">
<div className="card-overlay absolute inset-0 bg-primary/5 opacity-0 pointer-events-none transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 check-icon hidden">
<span data-icon="check_circle" className="material-symbols-outlined text-primary icon-fill">check_circle</span>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-surface-container-high text-on-surface rounded-full flex items-center justify-center">
<span data-icon="storefront" className="material-symbols-outlined">storefront</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">فرع جدة (التحلية)</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-md text-body-md mb-3">
<span data-icon="location_on" className="material-symbols-outlined text-sm">location_on</span>
<span>منطقة مكة المكرمة، السعودية</span>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/30 pt-3 mt-2">
<span className="font-label-sm text-label-sm text-surface-tint">نشط الآن</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span data-icon="group" className="material-symbols-outlined text-[14px]">group</span> 32 موظف
                                </span>
</div>
</div>
{/*  Branch Card 3  */}
<div onclick="selectBranch(this)" className="branch-card relative bg-surface-container-lowest rounded-lg p-md border-outline cursor-pointer overflow-hidden">
<div className="card-overlay absolute inset-0 bg-primary/5 opacity-0 pointer-events-none transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 check-icon hidden">
<span data-icon="check_circle" className="material-symbols-outlined text-primary icon-fill">check_circle</span>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-surface-container-high text-on-surface rounded-full flex items-center justify-center">
<span data-icon="storefront" className="material-symbols-outlined">storefront</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">فرع الدمام (الشاطئ)</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-md text-body-md mb-3">
<span data-icon="location_on" className="material-symbols-outlined text-sm">location_on</span>
<span>المنطقة الشرقية، السعودية</span>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/30 pt-3 mt-2">
<span className="font-label-sm text-label-sm text-outline">مغلق حالياً</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span data-icon="group" className="material-symbols-outlined text-[14px]">group</span> 28 موظف
                                </span>
</div>
</div>
</div>
</div>
{/*  Category 2: Hotels  */}
<div>
<h2 className="font-title-lg text-title-lg text-tertiary mb-md flex items-center gap-2">
<span data-icon="hotel" className="material-symbols-outlined text-tertiary-container">hotel</span>
                        قطاع الفنادق
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
{/*  Branch Card 4  */}
<div onclick="selectBranch(this)" className="branch-card relative bg-surface-container-lowest rounded-lg p-md border-outline cursor-pointer overflow-hidden">
<div className="card-overlay absolute inset-0 bg-primary/5 opacity-0 pointer-events-none transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 check-icon hidden">
<span data-icon="check_circle" className="material-symbols-outlined text-primary icon-fill">check_circle</span>
</div>
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-surface-container-high text-on-surface rounded-full flex items-center justify-center">
<span data-icon="apartment" className="material-symbols-outlined">apartment</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">فندق الصفاء - مكة</h3>
<div className="flex items-center gap-1 text-on-surface-variant font-body-md text-body-md mb-3">
<span data-icon="location_on" className="material-symbols-outlined text-sm">location_on</span>
<span>المنطقة المركزية، مكة المكرمة</span>
</div>
<div className="flex justify-between items-center border-t border-outline-variant/30 pt-3 mt-2">
<span className="font-label-sm text-label-sm text-surface-tint">نشط الآن</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span data-icon="group" className="material-symbols-outlined text-[14px]">group</span> 120 موظف
                                </span>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Action Area  */}
<div className="p-lg md:p-xl bg-surface border-t border-outline-variant/30 flex justify-end">
<button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-title-md text-title-md py-3 px-8 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                    الدخول للفرع المحدد
                    <span data-icon="arrow_forward" className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
</button>
</div>
</div>
</main>
{/*  Global Footer (Minimal for Context)  */}
<footer className="bg-surface-container-low w-full border-t border-outline-variant mt-auto">
<div className="flex flex-col md:flex-row-reverse justify-between items-center px-margin-mobile md:px-margin-desktop py-lg w-full max-w-[1440px] mx-auto">
<div className="font-title-md text-title-md text-on-surface mb-4 md:mb-0">
                دار الصفاء
            </div>
<div className="flex gap-4 mb-4 md:mb-0">
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-opacity duration-200">الدعم الفني</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-opacity duration-200">الشروط والأحكام</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline transition-opacity duration-200">سياسة الخصوصية</a>
</div>
<div className="font-label-md text-label-md text-on-surface-variant">
                © ٢٠٢٤ دار الصفاء. جميع الحقوق محفوظة.
            </div>
</div>
</footer>
<script dangerouslySetInnerHTML={{ __html: "\n        function selectBranch(element) {\n            // Remove selected class from all cards\n            document.querySelectorAll('.branch-card').forEach(card => {\n                card.classList.remove('selected');\n                card.classList.remove('border-primary');\n                \n                // Hide check icon if it exists\n                const checkIcon = card.querySelector('.absolute.top-3.left-3');\n                if(checkIcon && !checkIcon.classList.contains('hidden') && !card.classList.contains('selected-init')) {\n                     // We need a robust way to handle the checkmark swap. \n                     // For this simple UI script, we just toggle visibility of a container.\n                     // The initial selected card has the icon hardcoded without 'hidden' class, others have 'hidden'.\n                }\n            });\n\n            // Reset all check icons to hidden, except we inject it dynamically for simplicity\n            document.querySelectorAll('.branch-card').forEach(card => {\n                const iconContainer = card.querySelector('.absolute.top-3.left-3');\n                if(iconContainer) {\n                    iconContainer.innerHTML = '';\n                }\n            });\n\n            // Add selected to clicked\n            element.classList.add('selected');\n            \n            // Add check icon to selected\n            let iconContainer = element.querySelector('.absolute.top-3.left-3');\n            if(!iconContainer) {\n                 iconContainer = document.createElement('div');\n                 iconContainer.className = 'absolute top-3 left-3';\n                 element.appendChild(iconContainer);\n            }\n            iconContainer.innerHTML = '<span class=\"material-symbols-outlined text-primary icon-fill\" data-icon=\"check_circle\">check_circle</span>';\n        }\n    " }} />

</div>
    </>
  );
};

export default Screen14;

import React from 'react';

const Screen5 = () => {
  return (
    <>
      <div className="">

{/*  Main Content  */}
<main className="">
<div className="flex-1 p-margin-desktop max-w-7xl mx-auto w-full">
{/*  Breadcrumbs & Header  */}
<div className="mb-lg">

<div className="flex justify-between items-end">
<h1 className="font-display-sm text-display-sm text-on-background">مركز التنبيهات</h1>
<div className="flex gap-4">
<button className="text-primary hover:text-primary-container font-title-md text-title-md transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">done_all</span>
                            تحديد الكل كمقروء
                        </button>
</div>
</div>
</div>
{/*  Content Layout: Sidebar + List  */}
<div className="flex gap-gutter">
{/*  Inner Sidebar: Categories  */}

{/*  Notification List  */}
<div className="flex-1 flex flex-col gap-4">
{/*  Filters  */}
<div className="flex gap-2 mb-2">
<button className="px-4 py-1.5 rounded-full border border-primary text-primary bg-primary/5 font-title-md text-title-md transition-colors hover:bg-primary/10">الكل</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-title-md text-title-md transition-colors hover:bg-surface-container">غير مقروء</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-title-md text-title-md transition-colors hover:bg-surface-container">مقروء</button>
</div>
{/*  Alert Cards  */}
<div className="flex flex-col gap-3">
{/*  Unread Notification (Security)  */}
<div className="bg-surface-container-low rounded-xl p-4 border border-error/20 flex gap-4 relative overflow-hidden group shadow-sm hover:shadow transition-shadow">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined icon-filled">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
                                        محاولة تسجيل دخول غير مصرح بها
                                        <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
</h4>
<span className="text-on-surface-variant font-label-md text-label-md whitespace-nowrap">منذ 10 دقائق</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3">تم رصد محاولة تسجيل دخول فاشلة متعددة من عنوان IP غير معروف. يرجى مراجعة سجلات الأمان.</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary font-title-md text-title-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">visibility</span>
                                        عرض التفاصيل
                                    </button>
<button className="text-on-surface-variant hover:text-on-surface font-title-md text-title-md flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
                                        أرشفة
                                    </button>
</div>
</div>
</div>
{/*  Unread Notification (Report)  */}
<div className="bg-surface-container-low rounded-xl p-4 border border-primary/20 flex gap-4 relative overflow-hidden group shadow-sm hover:shadow transition-shadow">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="w-12 h-12 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined icon-filled">analytics</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
                                        اكتمل إنشاء التقرير الشهري
                                        <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
</h4>
<span className="text-on-surface-variant font-label-md text-label-md whitespace-nowrap">منذ ساعتين</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3">تقرير جرد الأصول لشهر أكتوبر جاهز الآن للتحميل والمراجعة.</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary font-title-md text-title-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">download</span>
                                        تحميل التقرير
                                    </button>
<button className="text-on-surface-variant hover:text-on-surface font-title-md text-title-md flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
                                        أرشفة
                                    </button>
</div>
</div>
</div>
{/*  Read Notification (OCR)  */}
<div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant flex gap-4 group hover:bg-surface-container-low transition-colors">
<div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0 opacity-70">
<span className="material-symbols-outlined">document_scanner</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-title-lg text-title-lg text-on-surface opacity-80">
                                        نجاح معالجة مستندات الدفعة 402
                                    </h4>
<span className="text-on-surface-variant font-label-md text-label-md whitespace-nowrap opacity-70">أمس، 14:30</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3 opacity-80">تمت معالجة 50 مستنداً بنجاح عبر نظام OCR وتم تحديث قاعدة البيانات.</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary font-title-md text-title-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">visibility</span>
                                        عرض التفاصيل
                                    </button>
</div>
</div>
</div>
{/*  Read Notification (Data Import)  */}
<div className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant flex gap-4 group hover:bg-surface-container-low transition-colors">
<div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0 opacity-70">
<span className="material-symbols-outlined">cloud_done</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-title-lg text-title-lg text-on-surface opacity-80">
                                        تم مزامنة البيانات بنجاح
                                    </h4>
<span className="text-on-surface-variant font-label-md text-label-md whitespace-nowrap opacity-70">أمس، 09:15</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3 opacity-80">تم استيراد بيانات الأصول الجديدة من الفرع الرئيسي بنجاح وبدون أخطاء.</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-primary font-title-md text-title-md hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">visibility</span>
                                        عرض التفاصيل
                                    </button>
</div>
</div>
</div>
</div>
{/*  Pagination (Optional visual indicator)  */}
<div className="flex justify-center mt-4 mb-lg">
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"><span className="material-symbols-outlined">chevron_right</span></button>
<span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-title-md text-title-md">1</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant flex items-center justify-center font-title-md text-title-md transition-colors">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant flex items-center justify-center font-title-md text-title-md transition-colors">3</button>
<span className="text-on-surface-variant">...</span>
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
</div>
</div>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="">
<p className="font-label-md text-label-md text-primary">© 2024 نظام دار الصفاء الذكي. جميع الحقوق محفوظة.</p>
<div className="flex gap-4">
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">الشروط والأحكام</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">سياسة الخصوصية</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">اتصل بنا</a>
</div>
</footer>
</main>

</div>
    </>
  );
};

export default Screen5;

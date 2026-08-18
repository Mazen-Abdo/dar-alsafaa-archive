import React from 'react';

const Screen9 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Canvas  */}
<main className="">
{/*  Search Header & Tabs  */}
<div className="bg-surface-container-lowest border-b border-outline-variant px-margin-desktop py-lg">
<div className="flex flex-col gap-md">
<div className="flex items-baseline gap-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface">نتائج البحث عن "تقرير الربع الثالث"</h1>
<span className="font-title-md text-title-md text-on-surface-variant">(54 نتيجة)</span>
</div>
<div className="flex gap-lg border-b border-outline-variant mt-md overflow-x-auto no-scrollbar">
<button className="pb-3 border-b-2 border-primary text-primary font-title-md text-title-md whitespace-nowrap px-2">الكل</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-title-md text-title-md whitespace-nowrap px-2">المستندات</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-title-md text-title-md whitespace-nowrap px-2">التقارير</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-title-md text-title-md whitespace-nowrap px-2">المستخدمين</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-title-md text-title-md whitespace-nowrap px-2">الفروع</button>
</div>
</div>
</div>
<div className="flex-1 px-margin-desktop py-lg flex flex-col lg:flex-row gap-gutter">
{/*  Filters Sidebar  */}

{/*  Results List  */}
<div className="flex-1 flex flex-col gap-lg">
{/*  Category: Reports  */}
<section>
<h2 className="font-title-lg text-title-lg text-on-surface mb-md flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                        التقارير (2)
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-sm">
<h3 className="font-title-md text-title-md text-primary">تقرير الأداء للربع الثالث 2024</h3>
<span className="bg-primary/10 text-primary px-2 py-1 rounded text-label-md font-label-md">معتمد</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">ملخص شامل لأداء الفروع الرئيسية خلال الربع الثالث مع تحليل المؤشرات المالية.</p>
<div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                    15 أكتوبر 2024
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">person</span>
                                    أحمد محمود
                                </div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-sm">
<h3 className="font-title-md text-title-md text-primary">مسودة تقرير الميزانية - الربع الثالث</h3>
<span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-label-md font-label-md">قيد المراجعة</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">التفاصيل الأولية لميزانية الربع الثالث بانتظار اعتماد الإدارة المالية.</p>
<div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                    12 أكتوبر 2024
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">person</span>
                                    سارة خالد
                                </div>
</div>
</div>
</div>
</section>
{/*  Category: Documents  */}
<section>
<h2 className="font-title-lg text-title-lg text-on-surface mb-md mt-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">description</span>
                        المستندات (3)
                    </h2>
<div className="flex flex-col gap-3">
<div className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant flex items-center gap-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center text-red-600">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>picture_as_pdf</span>
</div>
<div className="flex-1">
<h3 className="font-title-md text-title-md text-on-surface">مرفقات_تقرير_الربع_الثالث_النهائي.pdf</h3>
<div className="flex items-center gap-4 mt-1 font-body-md text-body-md text-on-surface-variant">
<span>2.4 MB</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>تم الأرشفة: 16 أكتوبر 2024</span>
</div>
</div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
<div className="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant flex items-center gap-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center text-green-600">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>table_chart</span>
</div>
<div className="flex-1">
<h3 className="font-title-md text-title-md text-on-surface">بيانات_خام_الربع_الثالث.xlsx</h3>
<div className="flex items-center gap-4 mt-1 font-body-md text-body-md text-on-surface-variant">
<span>5.1 MB</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>تم الأرشفة: 14 أكتوبر 2024</span>
</div>
</div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
</section>
{/*  Category: Users  */}
<section>
<h2 className="font-title-lg text-title-lg text-on-surface mb-md mt-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">group</span>
                        المستخدمين المرتبطين (2)
                    </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant flex items-center gap-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
<img alt="صورة المستخدم" data-alt="Portrait of an Arabic male corporate financial analyst in a modern office. Bright, professional lighting, modern enterprise style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB87bnAPT2Nx-mPW7fHEtaLPCDGTGtOjT8UxJOXHHajLzFKLl8BS-Gmzh6IIUJi5Ehfth_7oKEkDv6yBD2HVWK8pu9GxtV1IZO6BOF26L30CmEAJ4HgkeadSUy95lGyn6wlKC42KHLMuiwyH5YpnRK9UBi7ozvAGrIGh_vd_zUwvt5s1A0gHoDETrVLwNVkD6389j6W14uoFSKZqOmjhwSOyg9XRIt4sZtyjWbr_MG99uuIw2f4_bWNaQ" className="w-full h-full object-cover" />
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">أحمد محمود</h3>
<p className="font-body-md text-body-md text-on-surface-variant">محلل مالي - الإدارة المالية</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant flex items-center gap-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shrink-0">
<img alt="صورة المستخدم" data-alt="Portrait of an Arabic female corporate manager in a modern office setting. Clean, high-end professional lighting, modern enterprise style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnXpKqtcxNIJ5HqT4_BD-BRFxVpxbQszqVb0GWd9bSrsgjFcPogQvEFflt5Phu2atfIxLN3rtCsIwG-c9IBN6ZedF0ixWRJWrDgpH1Qla3GSiOtttLiOzHW39Hn5rqrq4enIrWBOGE-ClzMCvdCfRG4iThJ_sSIp6s7mx9Bz_-_NAzx59iR16HccRnmw6QaRaY3yXfc65RSkW0M2brjAHSjXzf6g9pv1lVSZLHxSl_lB3-a7q8uN3WUw" className="w-full h-full object-cover" />
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">سارة خالد</h3>
<p className="font-body-md text-body-md text-on-surface-variant">مدير قسم - التخطيط الاستراتيجي</p>
</div>
</div>
</div>
</section>
</div>
</div>
{/*  Footer  */}
<footer className="">
<div className="font-label-md text-label-md text-on-surface-variant">
                © 2024 نظام دار الصفاء الذكي. جميع الحقوق محفوظة.
            </div>
<div className="flex items-center gap-md font-label-md text-label-md">
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">الشروط والأحكام</a>
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">سياسة الخصوصية</a>
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">اتصل بنا</a>
</div>
<div className="font-title-md text-title-md text-secondary">
                دار الصفاء
            </div>
</footer>
</main>

</div>
    </>
  );
};

export default Screen9;

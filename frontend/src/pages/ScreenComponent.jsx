
import React from 'react';

const ScreenComponent = () => {
  return (
    <>
      
{/*  TopNavBar  */}
<header className="h-16 w-full fixed top-0 z-40 pr-[280px] bg-surface dark:bg-surface-dim border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop transition-all duration-300 md:pr-[280px] pr-0">
<div className="flex items-center flex-1">
<span className="font-title-lg text-title-lg text-primary dark:text-primary-fixed-dim">نظام دار الصفاء الذكي</span>
</div>
<div className="flex items-center gap-md">
<div className="relative w-96 hidden lg:block">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input placeholder="ابحث..." type="text" value="تقرير الربع الثالث" className="w-full bg-surface-container-low border-none rounded-full pl-4 pr-10 py-2 focus:ring-2 focus:ring-primary text-body-md font-body-md text-on-surface" />
</div>
<button className="hover:bg-surface-container-high transition-all p-2 rounded-full hover:opacity-80">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">notifications</span>
</button>
<button className="hover:bg-surface-container-high transition-all p-2 rounded-full hover:opacity-80">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">help_outline</span>
</button>
<button className="hover:bg-surface-container-high transition-all p-2 rounded-full hover:opacity-80">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">dark_mode</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden ml-2 border border-outline-variant">
<img alt="صورة المستخدم الشخصية" data-alt="A professional portrait photo of a corporate executive in a modern office setting. The lighting is bright and clean, typical of a high-end corporate environment. The person is looking directly at the camera with a slight, confident smile. The background is slightly blurred showing subtle office elements. Ensure a premium, modern aesthetic suitable for an enterprise dashboard avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOkOzZWPnH-sHFfiX8rBpCfqKu3IeMrFXjdLmV_pubkSTzq-y8bbobCs1bA5vZFaTm9pp07gOG3FIa-FFiiuezS568tdyDORl9kA2zXyyXwbkaVb5_Q3Ebjl2UEq3I0SpMG4HuuVQR_p1-xlZv-YwoqOjcZe98sjC__A3lAfeC0mMy2jt5HrIbIwCZpO8J3WBtUSSpjpcJBVsrT331yyI9t0JHQiUrN9-w2spox2ZVQpNjm6hKU-2kzw" className="w-full h-full object-cover" />
</div>
</div>
</header>
{/*  SideNavBar  */}
<nav className="w-[280px] h-full fixed right-0 top-0 bg-primary-container dark:bg-primary-container border-l border-outline-variant shadow-sm flex flex-col overflow-y-auto hidden md:flex z-50">
<div className="p-lg flex flex-col items-center border-b border-on-primary-container/20">
<div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center mb-4">
<span className="font-headline-md text-headline-md font-bold text-primary">د</span>
</div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary-container">دار الصفاء</h1>
<p className="text-on-primary-container opacity-80 font-body-md text-body-md">نظام الإدارة الذكي</p>
</div>
<div className="flex-1 py-md flex flex-col gap-sm">
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-title-md text-title-md">لوحة القيادة</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-title-md text-title-md">إدارة الأصول</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary border-r-4 border-primary-fixed hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>analytics</span>
<span className="font-title-md text-title-md">التقارير</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">group</span>
<span className="font-title-md text-title-md">المستخدمين</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">settings</span>
<span className="font-title-md text-title-md">الإعدادات</span>
</a>
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">support_agent</span>
<span className="font-title-md text-title-md">الدعم الفني</span>
</a>
</div>
<div className="p-lg">
<button className="w-full bg-primary-fixed text-on-primary-container py-3 rounded-lg font-title-md text-title-md hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add</span>
                 إضافة أصل جديد
             </button>
</div>
<div className="mt-auto border-t border-on-primary-container/20 py-sm">
<a href="#" className="flex items-center gap-3 px-4 py-3 text-on-primary-container opacity-80 hover:bg-primary/20 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">logout</span>
<span className="font-title-md text-title-md">تسجيل الخروج</span>
</a>
</div>
</nav>
{/*  Main Content Canvas  */}
<main className="flex-1 md:pr-[280px] pt-16 flex flex-col">
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
<aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-lg">
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant">
<h3 className="font-title-lg text-title-lg text-on-surface mb-md">تصفية النتائج</h3>
<div className="flex flex-col gap-md">
<div>
<label className="font-title-md text-title-md text-on-surface-variant block mb-2">تاريخ النشر</label>
<select className="w-full bg-surface-container-low border-none rounded-lg p-3 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary">
<option>آخر 30 يوم</option>
<option>هذا العام</option>
<option>الكل</option>
</select>
</div>
<div>
<label className="font-title-md text-title-md text-on-surface-variant block mb-2">القطاع</label>
<select className="w-full bg-surface-container-low border-none rounded-lg p-3 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary">
<option>المالية</option>
<option>الموارد البشرية</option>
<option>تقنية المعلومات</option>
</select>
</div>
<div>
<label className="font-title-md text-title-md text-on-surface-variant block mb-2">نوع الملف</label>
<div className="flex flex-col gap-2 mt-2">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" type="checkbox" className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">PDF</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" type="checkbox" className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">Excel</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input type="checkbox" className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">Word</span>
</label>
</div>
</div>
</div>
</div>
</aside>
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
<footer className="w-full py-md md:pr-[280px] bg-surface-container-low dark:bg-inverse-surface border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-desktop mt-auto gap-4">
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

    </>
  );
};

export default ScreenComponent;
  
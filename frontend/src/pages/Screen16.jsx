import React from 'react';

const Screen16 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<main className="">
{/*  Page Header & Breadcrumbs  */}
<div className="px-margin-desktop py-lg bg-surface border-b border-outline-variant/50">
<div className="flex items-center gap-2 font-body-md text-body-md text-outline mb-2">
<a href="#" className="hover:text-primary transition-colors">لوحة القيادة</a>
<span className="material-symbols-outlined text-sm">chevron_left</span>
<span className="text-on-surface">الملف الشخصي</span>
</div>
<div className="flex items-center gap-6 mt-4">
<div className="relative">
<div className="w-24 h-24 rounded-full border-4 border-surface shadow-sm overflow-hidden bg-surface-container-highest shrink-0">
<img alt="أحمد عبدالله" data-alt="Detailed professional portrait of an Arab corporate executive named Ahmed Abdullah, wearing a crisp white thobe and dark besht, looking confident, soft studio lighting, modern minimalist background, enterprise profile context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3aZo3lUq76cOzx0gQ2V1V8OMfmIg21jgaww89lg2JejDMt4xBeuDHhVAVpSgxnhDGy6g_p1xHkpwDOjUnFQz5-3nLEb-WzdyK67QlhOwIpTnY9oFg7CG4gzOnuKEb7pd4hAkq862lYOc6GUX0TchlMm3-tp9LXHvISw_8pAUuwNLUu15oKuSP8wTb37HxfwNH21MK3s4VZcu4g6BlE7ZIXjrXD8LwIWSBCkSyGUs3YvhfHE4ax1-yrg" className="w-full h-full object-cover" />
</div>
<button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-md hover:bg-primary-container transition-colors border-2 border-surface">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>edit</span>
</button>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">أحمد عبدالله</h2>
<p className="font-title-md text-title-md text-primary mt-1">مدير النظام</p>
</div>
</div>
</div>
{/*  Scrollable Content  */}
<div className="p-margin-desktop flex-1 overflow-y-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter max-w-[1200px] mx-auto">
{/*  Left Column (Wider on Desktop)  */}
<div className="lg:col-span-8 flex flex-col gap-gutter">
{/*  Section 1: Personal Info  */}
<section className="bg-surface rounded-xl border border-outline-variant/40 shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/40 bg-surface-container-lowest flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-md">person</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface">المعلومات الشخصية</h3>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">الاسم الكامل</label>
<input type="text" value="أحمد عبدالله" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">البريد الإلكتروني</label>
<input dir="ltr" type="email" value="ahmed.a@daralsafaa.com" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" style={{"textAlign":"right"}} />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">رقم الهاتف</label>
<input dir="ltr" type="tel" value="+966 50 123 4567" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" style={{"textAlign":"right"}} />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">لغة الواجهة المفضلة</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none">
<option selected="" value="ar">العربية</option>
<option value="en">English</option>
</select>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
<div className="md:col-span-2 mt-2 flex justify-end">
<button className="bg-primary text-on-primary font-title-md text-title-md px-6 py-2.5 rounded-lg hover:bg-primary-container transition-colors shadow-sm">
                                    حفظ التغييرات
                                </button>
</div>
</div>
</section>
{/*  Section 4: Recent User Activity Log  */}
<section className="bg-surface rounded-xl border border-outline-variant/40 shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/40 bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-md">history</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface">آخر النشاطات</h3>
</div>
<button className="text-primary font-label-md text-label-md hover:underline">عرض السجل كاملاً</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-surface-container-highest/50 border-b border-outline-variant/40 font-title-md text-title-md text-on-surface-variant">
<th className="py-3 px-lg font-medium">النشاط</th>
<th className="py-3 px-lg font-medium">التاريخ والوقت</th>
<th className="py-3 px-lg font-medium">الموقع / IP</th>
<th className="py-3 px-lg font-medium">الحالة</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/20">
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-lg">تسجيل الدخول للنظام</td>
<td className="py-3 px-lg text-outline">اليوم، 08:30 ص</td>
<td dir="ltr" className="py-3 px-lg text-outline">192.168.1.101</td>
<td className="py-3 px-lg">
<span className="inline-flex items-center gap-1 bg-primary-fixed/30 text-primary-container px-2 py-1 rounded-md font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> ناجح
                                            </span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-lg">تعديل صلاحيات المستخدم "محمد علي"</td>
<td className="py-3 px-lg text-outline">أمس، 02:15 م</td>
<td dir="ltr" className="py-3 px-lg text-outline">192.168.1.101</td>
<td className="py-3 px-lg">
<span className="inline-flex items-center gap-1 bg-primary-fixed/30 text-primary-container px-2 py-1 rounded-md font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> ناجح
                                            </span>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="py-3 px-lg">إضافة أصل جديد "معدات مطبخ"</td>
<td className="py-3 px-lg text-outline">24 أكتوبر، 11:00 ص</td>
<td dir="ltr" className="py-3 px-lg text-outline">192.168.1.101</td>
<td className="py-3 px-lg">
<span className="inline-flex items-center gap-1 bg-primary-fixed/30 text-primary-container px-2 py-1 rounded-md font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> ناجح
                                            </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/*  Right Column (Sidebar for Security & Access)  */}
<div className="lg:col-span-4 flex flex-col gap-gutter">
{/*  Section 3: Assigned Access  */}
<section className="bg-surface rounded-xl border border-outline-variant/40 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-lg">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-md">shield_person</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface">الصلاحيات والوصول</h3>
</div>
<div className="flex flex-col gap-4">
<div>
<h4 className="font-title-md text-title-md text-on-surface-variant mb-3 border-b border-outline-variant/20 pb-2">القطاعات المعينة</h4>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/20 text-primary px-3 py-1.5 rounded-lg font-label-md">
<span className="material-symbols-outlined text-sm">restaurant</span>
                                        قطاع المطاعم
                                    </span>
<span className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/20 text-primary px-3 py-1.5 rounded-lg font-label-md">
<span className="material-symbols-outlined text-sm">local_cafe</span>
                                        قطاع المقاهي
                                    </span>
</div>
</div>
<div className="mt-2">
<h4 className="font-title-md text-title-md text-on-surface-variant mb-3 border-b border-outline-variant/20 pb-2">الفروع المُدارة</h4>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/50 p-2.5 rounded-lg">
<span className="font-body-md text-body-md text-on-surface">فرع الرياض - العليا</span>
<span className="material-symbols-outlined text-primary text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/50 p-2.5 rounded-lg">
<span className="font-body-md text-body-md text-on-surface">فرع جدة - التحلية</span>
<span className="material-symbols-outlined text-primary text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
</div>
</div>
<div className="mt-4 bg-secondary-fixed/30 p-4 rounded-lg border border-secondary/20 flex gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">info</span>
<p className="font-label-md text-label-md text-on-surface-variant">كمدير نظام، لديك وصول كامل لقراءة وتعديل البيانات في القطاعات والفروع المذكورة أعلاه.</p>
</div>
</div>
</section>
{/*  Section 2: Security & Credentials  */}
<section className="bg-surface rounded-xl border border-outline-variant/40 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-lg">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-error/10 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-md">lock</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface">الأمان وكلمة المرور</h3>
</div>
<div className="flex flex-col gap-5">
{/*  2FA Status  */}
<div className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-lg">
<div>
<h4 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
                                        المصادقة الثنائية (2FA)
                                        <span className="bg-primary-fixed/30 text-primary-container px-2 py-0.5 rounded text-xs font-medium">مفعل</span>
</h4>
<p className="font-label-md text-label-md text-outline mt-1">طبقة حماية إضافية لحسابك.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" disabled="" type="checkbox" value="" className="sr-only peer" />
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<hr className="border-outline-variant/30" />
{/*  Password Change  */}
<form className="flex flex-col gap-4">
<h4 className="font-title-md text-title-md text-on-surface">تغيير كلمة المرور</h4>
<div className="flex flex-col gap-2 relative">
<label className="font-label-md text-label-md text-on-surface-variant">كلمة المرور الحالية</label>
<input placeholder="••••••••" type="password" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">كلمة المرور الجديدة</label>
<input placeholder="••••••••" type="password" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-on-surface-variant">تأكيد كلمة المرور الجديدة</label>
<input placeholder="••••••••" type="password" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 font-body-lg text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
</div>
<button type="button" className="mt-2 w-full bg-surface-container-high border border-outline-variant text-primary font-title-md text-title-md px-6 py-2.5 rounded-lg hover:bg-surface-variant transition-colors">
                                    تحديث كلمة المرور
                                </button>
</form>
</div>
</section>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="bg-surface-container-low dark:bg-inverse-surface text-primary dark:text-on-primary-container font-label-md text-label-md w-full py-md px-margin-desktop border-t border-outline-variant flex justify-between items-center mt-auto z-10 shrink-0">
<div className="text-on-surface-variant">
                © 2024 نظام دار الصفاء الذكي. جميع الحقوق محفوظة.
            </div>
<div className="flex gap-4">
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">الشروط والأحكام</a>
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">سياسة الخصوصية</a>
<a href="#" className="text-on-surface-variant hover:text-primary transition-opacity duration-200">اتصل بنا</a>
</div>
</footer>
</main>

</div>
    </>
  );
};

export default Screen16;


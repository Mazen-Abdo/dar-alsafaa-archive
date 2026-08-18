import React from 'react';

const Screen15 = () => {
  return (
    <>
      <div className="">

{/*  JSON Component: SideNavBar  */}

{/*  Main Content Wrapper  */}
<main className="">
{/*  JSON Component: TopNavBar  */}

{/*  Page Content Scrollable Area  */}
<div className="flex-1 overflow-y-auto bg-background p-margin-mobile md:p-margin-desktop space-y-gutter relative">
{/*  Page Header & Actions  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="font-display-sm text-display-sm text-on-background m-0">إدارة المستخدمين وسجل الصلاحيات</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">التحكم في وصول المستخدمين وصلاحيات الأقسام والفروع.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-primary font-title-md text-title-md hover:bg-surface-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">download</span>
                        تصدير
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-primary text-primary rounded-lg font-title-md text-title-md hover:bg-surface-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add_moderator</span>
                        إنشاء دور جديد
                    </button>
<button className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-[#053e2f] text-on-primary rounded-lg font-title-md text-title-md transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">person_add</span>
                        إضافة مستخدم جديد
                    </button>
</div>
</div>
{/*  KPI Cards Grid (Bento Style)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Total Users  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-4">
<span className="font-title-lg text-title-lg text-on-surface">إجمالي المستخدمين</span>
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined">group</span>
</div>
</div>
<div className="flex items-end justify-between">
<span className="font-display-lg text-display-lg text-primary">1,240</span>
<span className="flex items-center text-secondary font-label-md bg-secondary-container/20 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                            +5%
                        </span>
</div>
</div>
{/*  Active Users  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed-dim/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-4">
<span className="font-title-lg text-title-lg text-on-surface">المستخدمين النشطين</span>
<div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">how_to_reg</span>
</div>
</div>
<div className="flex items-end justify-between">
<span className="font-display-lg text-display-lg text-on-surface">1,192</span>
<span className="text-on-surface-variant font-label-md">خلال 30 يوم</span>
</div>
</div>
{/*  Total Roles  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-4">
<span className="font-title-lg text-title-lg text-on-surface">الأدوار والصلاحيات</span>
<div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">key</span>
</div>
</div>
<div className="flex items-end justify-between">
<span className="font-display-lg text-display-lg text-on-surface">12</span>
<button className="text-primary font-label-md hover:underline">عرض الكل</button>
</div>
</div>
{/*  System Admins  */}
<div className="bg-primary rounded-xl p-6 shadow-md flex flex-col justify-between relative overflow-hidden group text-on-primary">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex items-start justify-between mb-4">
<span className="font-title-lg text-title-lg text-primary-fixed">مدراء النظام</span>
<div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined">admin_panel_settings</span>
</div>
</div>
<div className="flex items-end justify-between">
<span className="font-display-lg text-display-lg">5</span>
<span className="flex items-center text-primary-fixed font-label-md">
                            عالي الصلاحية
                        </span>
</div>
</div>
</div>
{/*  Main View with Tabs  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col h-[600px]">
{/*  Tab Header  */}
<div className="border-b border-outline-variant px-6 pt-4 flex gap-8">
<button className="pb-3 border-b-2 border-primary text-primary font-headline-md text-headline-md px-2 flex items-center gap-2">
<span className="material-symbols-outlined">contacts</span>
                        دليل المستخدمين
                    </button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-title-md text-title-md px-2 flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined">grid_on</span>
                        مصفوفة الصلاحيات
                    </button>
<div className="mr-auto pb-3 flex items-center gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">filter_list</span>
<select className="pl-4 pr-10 py-1.5 rounded-lg border border-outline-variant bg-surface text-body-md focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer">
<option>تصفية حسب الدور</option>
<option>مدير فرع</option>
</select>
</div>
</div>
</div>
{/*  Tab 1: Users Directory Content (Table)  */}
<div className="flex-1 overflow-auto">
<table className="w-full text-right enterprise-table">
<thead className="sticky top-0 z-10 bg-surface-container-highest">
<tr>
<th className="w-12"></th>
<th>المستخدم</th>
<th>الدور / الصلاحية</th>
<th>القطاع</th>
<th>الفروع المسندة</th>
<th>الحالة</th>
<th>آخر دخول</th>
<th>الإجراءات</th>
</tr>
</thead>
<tbody>
{/*  Row 1 (Ahmed - Active to trigger Drawer conceptually)  */}
<tr className="cursor-pointer hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-3">
<img data-alt="A highly detailed professional headshot of a Saudi corporate manager in his 30s, wearing traditional thobe and shemagh, clean background, modern office lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM6KMKxdk4Gf3WWkWOAMxMfiv6pznsDJmjYKqUAYu7Evv-hgo05KspWkhHQyKkiw7w16P5Si8BwEGCRkscVRm92clzicWqyIaqzWtDIbJBD5mYcSWm16Lt62mUUTtYADYf5-fMZDP9CBJhoGBPLgrD_yjuEI-aJFHTz-Rh4F4b_NWn2K4zoditxDbXQwR8s0E7HzSgXK_FXKksnW5q-MvNWIG0nlbtfwuRVv-V-F8wEwyN_Du0_vJpPw" className="w-10 h-10 rounded-full object-cover" />
</td>
<td className="font-title-md text-title-md text-on-surface">أحمد محمد</td>
<td>
<span className="inline-flex items-center gap-1 bg-secondary-container/20 text-secondary px-2.5 py-1 rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">shield_person</span>
                                        مدير قطاع
                                    </span>
</td>
<td>المطاعم</td>
<td className="text-on-surface-variant">
<div className="flex -space-x-2 space-x-reverse">
<div title="أبها" className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-container-lowest flex items-center justify-center font-label-sm">أ</div>
<div title="الرياض" className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-container-lowest flex items-center justify-center font-label-sm">ر</div>
<div title="جدة" className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-container-lowest flex items-center justify-center font-label-sm">ج</div>
</div>
</td>
<td>
{/*  Toggle Switch Active  */}
<div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full transition-transform"></div>
</div>
</td>
<td className="text-body-md text-on-surface-variant">اليوم 09:41 ص</td>
<td>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button title="تعديل" className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button title="صلاحيات" className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-surface-container rounded">
<span className="material-symbols-outlined text-[20px]">vpn_key</span>
</button>
<button title="إعادة ضبط كلمة المرور" className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error-container rounded">
<span className="material-symbols-outlined text-[20px]">lock_reset</span>
</button>
</div>
</td>
</tr>
{/*  Additional Rows  */}
<tr>
<td className="px-6 py-3">
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 text-tertiary-container font-title-lg flex items-center justify-center">ف</div>
</td>
<td className="font-title-md text-title-md text-on-surface">فاطمة علي</td>
<td>
<span className="inline-flex items-center gap-1 bg-primary-container/20 text-primary-container px-2.5 py-1 rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
                                        مدير نظام
                                    </span>
</td>
<td>الكل</td>
<td className="text-on-surface-variant">جميع الفروع</td>
<td>
<div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full transition-transform"></div>
</div>
</td>
<td className="text-body-md text-on-surface-variant">أمس 14:30 م</td>
<td>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline-variant">more_horiz</span>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-3">
<div className="w-10 h-10 rounded-full bg-surface-variant text-on-surface-variant font-title-lg flex items-center justify-center">س</div>
</td>
<td className="font-title-md text-title-md text-on-surface text-on-surface-variant">سالم الدوسري</td>
<td>
<span className="inline-flex items-center gap-1 bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-full font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">storefront</span>
                                        مدير فرع
                                    </span>
</td>
<td className="text-on-surface-variant">المقاولات</td>
<td className="text-on-surface-variant">الدمام</td>
<td>
{/*  Toggle Switch Inactive  */}
<div className="w-11 h-6 bg-outline-variant rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-surface rounded-full transition-transform"></div>
</div>
</td>
<td className="text-body-md text-on-surface-variant">منذ شهر</td>
<td>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline-variant">more_horiz</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination Footer  */}
<div className="border-t border-outline-variant p-4 flex items-center justify-between bg-surface-container-lowest">
<span className="text-body-md text-on-surface-variant">عرض 1-3 من 1,240 مستخدم</span>
<div className="flex gap-1">
<button className="p-1 rounded bg-surface hover:bg-surface-container border border-outline-variant text-on-surface-variant disabled:opacity-50"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
<button className="w-8 h-8 rounded bg-primary text-on-primary font-label-md flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded bg-surface hover:bg-surface-container border border-outline-variant text-on-surface-variant font-label-md flex items-center justify-center">2</button>
<button className="w-8 h-8 rounded bg-surface hover:bg-surface-container border border-outline-variant text-on-surface-variant font-label-md flex items-center justify-center">3</button>
<button className="p-1 rounded bg-surface hover:bg-surface-container border border-outline-variant text-on-surface-variant"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
</div>
</div>
</div>
</div>
</main>
{/*  Side Drawer Component (Active State for 'Ahmed Mohammed')  */}
{/*  Backdrop  */}
<div className="fixed inset-0 bg-on-background/20 backdrop-blur-sm z-[60] block"></div>
{/*  Drawer  */}
<div className="fixed top-0 left-0 w-full md:w-[480px] h-full bg-surface-container-lowest shadow-2xl z-[70] transform translate-x-0 transition-transform duration-300 flex flex-col rtl border-r border-outline-variant overflow-hidden">
{/*  Drawer Header (Glassmorphism effect)  */}
<div className="bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant p-6 sticky top-0 z-10">
<div className="flex justify-between items-start mb-6">
<button className="p-2 bg-surface hover:bg-surface-container rounded-full text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-on-surface font-title-md hover:bg-surface-container-highest transition-colors">إلغاء</button>
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-title-md hover:bg-[#053e2f] transition-colors shadow-sm">حفظ التغييرات</button>
</div>
</div>
<div className="flex items-center gap-4">
<img data-alt="A highly detailed professional headshot of a Saudi corporate manager in his 30s, wearing traditional thobe and shemagh, clean background, modern office lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKWBS3TWuwKB7JIk6NNtvJqhht99H3Xrt6Y_B1x8oXI4hXWVt5Y5GSxOvAhSOkJkKBx4ZkiWhxftp47n7rfUrnB0TI89MZWwsPUBi0pXy4Hhus15eAw1jsLrEzJdn3J9WM3o6eUrIny3hqLcltG7h_FKCp1MhCmu-yDemvntGzMCpYrsHL3Dw1DemLVqSwW_cDGhOSIiNgqEpegvdJgBBb_ZVLKA6LqEnIk4D2OMTvnfwiPWPPgfNvLg" className="w-16 h-16 rounded-full object-cover border-4 border-surface shadow-sm" />
<div>
<h3 className="font-headline-md text-headline-md text-on-surface m-0">أحمد محمد</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                        ahmed.m@daralsafaa.com
                    </p>
</div>
</div>
</div>
{/*  Drawer Content Scrollable  */}
<div className="flex-1 overflow-y-auto p-6 space-y-8">
{/*  Section: Primary Role  */}
<section>
<h4 className="font-title-lg text-title-lg text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">badge</span>
                    الدور الوظيفي الأساسي
                </h4>
<div className="bg-surface-container rounded-xl p-4 border border-outline-variant flex items-center justify-between">
<div>
<div className="font-title-md text-title-md text-on-surface">مدير قطاع</div>
<div className="font-body-sm text-on-surface-variant mt-1">يملك صلاحيات إدارة الفروع والتقارير ضمن القطاع المخصص.</div>
</div>
<button className="text-primary font-label-md hover:underline">تغيير</button>
</div>
</section>
{/*  Section: Assignment Matrix (Bento style)  */}
<section>
<h4 className="font-title-lg text-title-lg text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">domain</span>
                    نطاق الصلاحيات والإسناد
                </h4>
<div className="grid grid-cols-1 gap-4">
{/*  Sector Assignment  */}
<div className="border border-outline-variant rounded-xl p-4 bg-surface-container-lowest">
<label className="font-label-md text-label-md text-on-surface-variant block mb-2">القطاعات المسندة</label>
<div className="flex flex-wrap gap-2">
<span className="bg-primary-container text-on-primary-container px-3 py-1.5 rounded-lg font-title-md text-title-md flex items-center gap-1 border border-primary-fixed">
                                المطاعم
                                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
</span>
<button className="px-3 py-1.5 border border-dashed border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-1 text-label-md">
<span className="material-symbols-outlined text-[16px]">add</span> إسناد قطاع
                            </button>
</div>
</div>
{/*  Branch Assignment  */}
<div className="border border-outline-variant rounded-xl p-4 bg-surface-container-lowest">
<label className="font-label-md text-label-md text-on-surface-variant block mb-2">الفروع المسندة (قطاع المطاعم)</label>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-title-md text-title-md flex items-center gap-1 border border-outline-variant">
                                أبها - الفرع الرئيسي
                                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
</span>
<span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-title-md text-title-md flex items-center gap-1 border border-outline-variant">
                                الرياض - التحلية
                                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
</span>
<span className="bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-title-md text-title-md flex items-center gap-1 border border-outline-variant">
                                جدة - الكورنيش
                                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
</span>
<button className="px-3 py-1.5 border border-dashed border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-1 text-label-md">
<span className="material-symbols-outlined text-[16px]">add</span> إضافة فرع
                            </button>
</div>
</div>
</div>
</section>
{/*  Section: Granular Permissions (Preview of Matrix style)  */}
<section>
<div className="flex items-center justify-between mb-4">
<h4 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error">admin_panel_settings</span>
                        صلاحيات استثنائية
                    </h4>
<span className="bg-error-container text-on-error-container text-[10px] px-2 py-0.5 rounded font-bold">خطر عالي</span>
</div>
<div className="space-y-3 bg-surface rounded-xl p-4 border border-outline-variant">
<label className="flex items-center justify-between cursor-pointer group">
<div>
<div className="font-title-md text-on-surface group-hover:text-primary transition-colors">حذف السجلات المحاسبية</div>
<div className="text-label-sm text-on-surface-variant">السماح بحذف القيود من نظام الأرشيف</div>
</div>
<div className="w-9 h-5 bg-outline-variant rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-surface rounded-full"></div>
</div>
</label>
<hr className="border-outline-variant/50" />
<label className="flex items-center justify-between cursor-pointer group">
<div>
<div className="font-title-md text-on-surface group-hover:text-primary transition-colors">تصدير تقارير مالية مجمعة</div>
<div className="text-label-sm text-on-surface-variant">تحميل التقارير الحساسة للقطاع</div>
</div>
<div className="w-9 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-on-primary rounded-full"></div>
</div>
</label>
</div>
</section>
{/*  Section: Security Log Timeline  */}
<section className="pb-8">
<h4 className="font-title-lg text-title-lg text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                    سجل النشاط الأمني
                </h4>
<div className="relative pl-4 border-r-2 border-outline-variant/30 mr-2 space-y-6">
{/*  Log Item  */}
<div className="relative pr-6">
<span className="absolute right-[-29px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-surface-container-lowest"></span>
<div className="font-title-md text-on-surface">تسجيل دخول ناجح</div>
<div className="text-body-md text-on-surface-variant mt-1">IP: 192.168.1.1 - الرياض، السعودية</div>
<div className="text-label-sm text-outline mt-1">اليوم، 09:41 صباحاً</div>
</div>
{/*  Log Item  */}
<div className="relative pr-6">
<span className="absolute right-[-29px] top-1 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-lowest"></span>
<div className="font-title-md text-on-surface">تعديل صلاحيات فرع</div>
<div className="text-body-md text-on-surface-variant mt-1">تمت إضافة فرع 'جدة - الكورنيش' بواسطة مدير النظام</div>
<div className="text-label-sm text-outline mt-1">أمس، 14:20 مساءً</div>
</div>
{/*  Log Item  */}
<div className="relative pr-6">
<span className="absolute right-[-29px] top-1 w-3 h-3 bg-error rounded-full border-2 border-surface-container-lowest"></span>
<div className="font-title-md text-on-surface text-error">محاولة دخول فاشلة</div>
<div className="text-body-md text-on-surface-variant mt-1">كلمة مرور خاطئة - متصفح Chrome</div>
<div className="text-label-sm text-outline mt-1">قبل 3 أيام</div>
</div>
</div>
</section>
</div>
</div>

</div>
    </>
  );
};

export default Screen15;

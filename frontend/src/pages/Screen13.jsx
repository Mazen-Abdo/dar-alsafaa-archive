import React from 'react';

const Screen13 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<main className="">

{/*  Scrollable Page Content  */}
<div className="flex-1 overflow-y-auto bg-surface custom-scrollbar relative">
<div className="p-margin-desktop max-w-[1400px] mx-auto">
{/*  1. Page Header  */}
<div className="mb-gutter flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>

<h2 className="font-display-sm text-display-sm text-on-surface">القطاعات والفروع</h2>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 rounded border border-outline text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2 font-title-md text-title-md">
<span className="material-symbols-outlined">download</span> تصدير
                        </button>
<button className="h-10 px-4 rounded border border-primary text-primary hover:bg-surface-container transition-colors flex items-center gap-2 font-title-md text-title-md">
<span className="material-symbols-outlined">add_business</span> إضافة قطاع جديد
                        </button>
<button className="h-10 px-5 rounded bg-primary-container text-white hover:bg-opacity-90 transition-colors flex items-center gap-2 font-title-md text-title-md shadow-sm">
<span className="material-symbols-outlined">storefront</span> إضافة فرع جديد
                        </button>
</div>
</div>
{/*  2. Summary KPI Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
{/*  KPI 1  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">category</span>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +2%
                            </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">إجمالي القطاعات</p>
<h3 className="font-display-sm text-display-sm text-on-surface">4</h3>
</div>
{/*  KPI 2  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">store</span>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                            </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">إجمالي الفروع</p>
<h3 className="font-display-sm text-display-sm text-on-surface">42</h3>
</div>
{/*  KPI 3  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined icon-fill">check_circle</span>
</div>
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_flat</span> 0%
                            </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">الفروع النشطة</p>
<h3 className="font-display-sm text-display-sm text-on-surface">38</h3>
</div>
{/*  KPI 4  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">location_city</span>
</div>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">المدن المغطاة</p>
<h3 className="font-display-sm text-display-sm text-on-surface">8</h3>
</div>
</div>
{/*  3. Sectors Grid  */}
<div className="mb-6 flex justify-between items-end">
<h3 className="font-headline-md text-headline-md text-on-surface">نظرة عامة على القطاعات</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
{/*  Sector 1  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer">
<div className="absolute top-4 left-4 bg-primary-fixed text-primary px-2 py-1 rounded text-xs font-medium flex items-center gap-1 z-10">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> نشط
                        </div>
<div className="h-24 bg-gradient-to-r from-surface-container to-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-primary opacity-20">restaurant</span>
</div>
<div className="p-5 relative">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-primary absolute -top-6 right-5">
<span className="material-symbols-outlined icon-fill">restaurant</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface mt-4 mb-3">قطاع المطاعم</h4>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">عدد الفروع</span>
<span className="font-medium">18 فرع</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">المستخدمين النشطين</span>
<span className="font-medium">124 مستخدم</span>
</div>
</div>
</div>
<div className="bg-surface px-5 py-3 border-t border-outline-variant/30 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-primary">إدارة القطاع</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_back</span>
</div>
</div>
{/*  Sector 2  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer">
<div className="absolute top-4 left-4 bg-primary-fixed text-primary px-2 py-1 rounded text-xs font-medium flex items-center gap-1 z-10">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> نشط
                        </div>
<div className="h-24 bg-gradient-to-r from-surface-container to-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-primary opacity-20">hotel</span>
</div>
<div className="p-5 relative">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-primary absolute -top-6 right-5">
<span className="material-symbols-outlined icon-fill">hotel</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface mt-4 mb-3">قطاع الفنادق</h4>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">عدد الفروع</span>
<span className="font-medium">6 فروع</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">المستخدمين النشطين</span>
<span className="font-medium">86 مستخدم</span>
</div>
</div>
</div>
<div className="bg-surface px-5 py-3 border-t border-outline-variant/30 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-primary">إدارة القطاع</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_back</span>
</div>
</div>
{/*  Sector 3  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer">
<div className="absolute top-4 left-4 bg-primary-fixed text-primary px-2 py-1 rounded text-xs font-medium flex items-center gap-1 z-10">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> نشط
                        </div>
<div className="h-24 bg-gradient-to-r from-surface-container to-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-primary opacity-20">deck</span>
</div>
<div className="p-5 relative">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-primary absolute -top-6 right-5">
<span className="material-symbols-outlined icon-fill">deck</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface mt-4 mb-3">قطاع الاستراحات</h4>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">عدد الفروع</span>
<span className="font-medium">12 فرع</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">المستخدمين النشطين</span>
<span className="font-medium">42 مستخدم</span>
</div>
</div>
</div>
<div className="bg-surface px-5 py-3 border-t border-outline-variant/30 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-primary">إدارة القطاع</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_back</span>
</div>
</div>
{/*  Sector 4  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer">
<div className="absolute top-4 left-4 bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded text-xs font-medium flex items-center gap-1 z-10">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> قيد التجهيز
                        </div>
<div className="h-24 bg-gradient-to-r from-surface-container to-surface-container-low flex items-center justify-center grayscale opacity-70">
<span className="material-symbols-outlined text-4xl text-primary opacity-20">icecream</span>
</div>
<div className="p-5 relative">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-outline-variant/30 flex items-center justify-center text-outline absolute -top-6 right-5">
<span className="material-symbols-outlined icon-fill">icecream</span>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface mt-4 mb-3 text-on-surface-variant">قطاع الآيس كريم</h4>
<div className="space-y-2 opacity-70">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">عدد الفروع</span>
<span className="font-medium">6 فروع</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-md text-label-md">المستخدمين النشطين</span>
<span className="font-medium">0 مستخدم</span>
</div>
</div>
</div>
<div className="bg-surface px-5 py-3 border-t border-outline-variant/30 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-primary">إدارة القطاع</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_back</span>
</div>
</div>
</div>
{/*  4. Branches Directory Table  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden mb-xl">
<div className="p-5 border-b border-outline-variant/30 flex justify-between items-center bg-white">
<h3 className="font-headline-md text-headline-md text-on-surface">دليل الفروع</h3>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">filter_list</span>
<select className="bg-surface border border-outline-variant rounded-md py-2 pr-9 pl-8 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
<option>جميع القطاعات</option>
<option>قطاع المطاعم</option>
<option>قطاع الفنادق</option>
</select>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input placeholder="بحث عن فرع..." type="text" className="bg-surface border border-outline-variant rounded-md py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary w-64" />
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/50">
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap">اسم الفرع</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap">القطاع التابع</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap">المدينة</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap">مدير الفرع</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap">رقم التواصل</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap text-center">المستخدمين</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap text-center">حجم الأرشيف</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap text-center">الحالة</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium text-sm whitespace-nowrap text-center">إجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-lowest/50 transition-colors bg-white h-[48px]">
<td className="py-2 px-4 whitespace-nowrap font-medium text-on-surface">فرع الرياض - العليا</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">restaurant</span> مطاعم
                                    </td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">الرياض</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">أ.م</div>
                                        أحمد محمد
                                    </td>
<td dir="ltr" className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">+966 50 123 4567</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">24</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">1.2 GB</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="inline-flex items-center">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" id="toggle1" name="toggle" type="checkbox" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-container checked:right-0 checked:border-primary-container z-10 transition-transform duration-200" style={{"right":"20px"}} />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="flex items-center justify-center gap-1">
<button title="تعديل" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors group relative">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button title="تعيين مستخدمين" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">group_add</span>
</button>
<button title="عرض التقارير" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">assessment</span>
</button>
<button title="أرشفة" className="w-8 h-8 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-lowest/50 transition-colors bg-surface-bright h-[48px]">
<td className="py-2 px-4 whitespace-nowrap font-medium text-on-surface">فرع جدة - الكورنيش</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">hotel</span> فنادق
                                    </td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">جدة</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-[10px] font-bold">س.ع</div>
                                        سالم عبدالله
                                    </td>
<td dir="ltr" className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">+966 55 987 6543</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">45</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">3.4 GB</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="inline-flex items-center">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" id="toggle2" name="toggle" type="checkbox" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-container checked:right-0 checked:border-primary-container z-10 transition-transform duration-200" style={{"right":"20px"}} />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="flex items-center justify-center gap-1">
<button title="تعديل" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button title="تعيين مستخدمين" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">group_add</span>
</button>
<button title="عرض التقارير" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">assessment</span>
</button>
<button title="أرشفة" className="w-8 h-8 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-lowest/50 transition-colors bg-white h-[48px]">
<td className="py-2 px-4 whitespace-nowrap font-medium text-on-surface">فرع الدمام - الفيصلية</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">deck</span> استراحات
                                    </td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">الدمام</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant flex items-center gap-2 mt-1">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-[10px] font-bold">--</div>
<span className="text-error text-xs">غير معين</span>
</td>
<td dir="ltr" className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant">+966 53 456 7890</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">8</td>
<td className="py-2 px-4 whitespace-nowrap text-sm text-on-surface-variant text-center">0.5 GB</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="inline-flex items-center">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input id="toggle3" name="toggle" type="checkbox" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant checked:right-0 checked:border-primary-container z-10 transition-transform duration-200" style={{"right":"0px"}} />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-outline-variant cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</td>
<td className="py-2 px-4 whitespace-nowrap text-center">
<div className="flex items-center justify-center gap-1">
<button title="تعديل" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button title="تعيين مستخدمين" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">group_add</span>
</button>
<button title="عرض التقارير" className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">assessment</span>
</button>
<button title="أرشفة" className="w-8 h-8 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-outline-variant/30 bg-white flex justify-between items-center text-sm text-on-surface-variant">
<div>عرض 1 إلى 3 من أصل 42 فرع</div>
<div className="flex items-center gap-2">
<button disabled="" className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container disabled:opacity-50">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container">2</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container">3</button>
<span className="px-1">...</span>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container">14</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
</div>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="bg-surface-container dark:bg-inverse-surface w-full py-md px-lg border-t border-outline-variant flex flex-row-reverse justify-between items-center mt-auto">
<div className="font-label-md text-label-md font-bold text-primary">Business Sectors &amp; Branches</div>
<div className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">© 2024 Business Sectors &amp; Branches Enterprise Workspace. All rights reserved.</div>
<div className="flex gap-4">
<a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-opacity duration-150">Privacy Policy</a>
<a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-opacity duration-150">Terms of Service</a>
<a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary underline transition-opacity duration-150">Security Compliance</a>
</div>
</footer>
</div>
</main>
{/*  Overlay for Drawer (Hidden by default, shown for demo)  */}
<div className="fixed inset-0 bg-on-surface/40 z-50 transition-opacity backdrop-blur-sm flex justify-start">
{/*  Side Drawer: Add/Edit Branch  */}
<div className="w-[480px] h-full bg-surface-container-lowest shadow-2xl flex flex-col transform transition-transform translate-x-0 border-l border-outline-variant/30">
{/*  Drawer Header  */}
<div className="px-6 py-5 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">add_business</span>
                    إضافة فرع جديد
                </h2>
<button className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/*  Drawer Content (Scrollable)  */}
<div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
{/*  Section 1  */}
<div>
<h3 className="font-title-md text-title-md text-primary border-b border-outline-variant/30 pb-2 mb-4">المعلومات الأساسية</h3>
<div className="space-y-4">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">اسم الفرع *</label>
<input placeholder="مثال: فرع الرياض - العليا" type="text" className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">القطاع التابع *</label>
<div className="relative">
<select className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary appearance-none pr-8">
<option disabled="" selected="" value="">اختر القطاع</option>
<option>قطاع المطاعم</option>
<option>قطاع الفنادق</option>
<option>قطاع الاستراحات</option>
</select>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">المدينة *</label>
<div className="relative">
<select className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary appearance-none pr-8">
<option disabled="" selected="" value="">اختر المدينة</option>
<option>الرياض</option>
<option>جدة</option>
<option>الدمام</option>
<option>مكة المكرمة</option>
</select>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
</div>
</div>
</div>
</div>
{/*  Section 2  */}
<div>
<h3 className="font-title-md text-title-md text-primary border-b border-outline-variant/30 pb-2 mb-4">الإدارة والاتصال</h3>
<div className="space-y-4">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">مدير الفرع</label>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">person_search</span>
<input placeholder="البحث عن موظف..." type="text" className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 pr-9 pl-3 text-sm focus:outline-none focus:border-primary transition-all" />
</div>
<p className="text-xs text-on-surface-variant mt-1">يمكنك تعيين مدير الفرع لاحقاً</p>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">رقم التواصل الأساسي</label>
<input dir="ltr" placeholder="+966 5X XXX XXXX" type="tel" className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary text-right transition-all" />
</div>
</div>
</div>
{/*  Section 3  */}
<div>
<h3 className="font-title-md text-title-md text-primary border-b border-outline-variant/30 pb-2 mb-4">إعدادات الهوية الداخلية</h3>
<div className="space-y-4">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1">الرمز التعريفي للفرع (Branch Code)</label>
<input dir="ltr" placeholder="مثال: RUH-REST-01" type="text" className="w-full bg-surface-bright border border-outline-variant rounded-md py-2 px-3 text-sm focus:outline-none focus:border-primary text-right font-mono uppercase transition-all" />
</div>
<div className="flex items-center gap-3 bg-surface-container-low p-3 rounded border border-outline-variant/50">
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input checked="" id="toggle_active" name="toggle" type="checkbox" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-primary-container checked:right-0 checked:border-primary-container z-10 transition-transform duration-200" style={{"right":"20px"}} />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary-container cursor-pointer" htmlFor="toggle_active"></label>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface text-sm">تفعيل الفرع فوراً</div>
<div className="text-xs text-on-surface-variant">سيتمكن المستخدمون المعينون من الدخول للنظام</div>
</div>
</div>
</div>
</div>
</div>
{/*  Drawer Footer / Actions  */}
<div className="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-low/50 flex gap-3">
<button className="flex-1 bg-primary-container text-white py-2 rounded font-title-md text-title-md hover:bg-opacity-90 transition-colors shadow-sm">
                    حفظ وإنشاء الفرع
                </button>
<button className="px-6 border border-outline text-on-surface py-2 rounded font-title-md text-title-md hover:bg-surface-container transition-colors">
                    إلغاء
                </button>
</div>
</div>
</div>

</div>
    </>
  );
};

export default Screen13;

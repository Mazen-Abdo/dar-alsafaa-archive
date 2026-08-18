import React from 'react';

const Screen6 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<main className="">

<div className="p-margin-desktop space-y-gutter">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-2">
<span className="hover:text-primary cursor-pointer transition-colors">لوحة القيادة</span>
<span className="material-symbols-outlined text-sm">chevron_left</span>
<span className="text-on-surface font-semibold">مركز التقارير والتحليلات</span>
</div>
<h1 className="font-display-sm text-display-sm text-on-surface">مركز التقارير والتحليلات</h1>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 border border-outline text-on-surface rounded-lg font-title-md text-title-md hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">print</span>
                        طباعة
                    </button>
<button className="px-4 py-2 border border-outline text-on-surface rounded-lg font-title-md text-title-md hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">picture_as_pdf</span>
                        تصدير PDF
                    </button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined">add</span>
                        إنشاء تقرير جديد
                    </button>
</div>
</div>
{/*  Summary KPI Bar  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
{/*  Total Reports  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant hover:border-primary-fixed/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-surface-container-low text-primary rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">description</span>
</div>
<span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span> 12%
                        </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">إجمالي التقارير</p>
<p className="font-display-sm text-display-sm text-on-surface">1,284</p>
</div>
{/*  Pending Reports  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant hover:border-tertiary-fixed/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-surface-container-low text-tertiary rounded-lg group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
<span className="material-symbols-outlined">pending_actions</span>
</div>
<span className="flex items-center text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-sm mr-1">trending_flat</span> 0%
                        </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">معلقة للمراجعة</p>
<p className="font-display-sm text-display-sm text-on-surface">42</p>
</div>
{/*  Accepted Reports  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant hover:border-primary/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-surface-container-low text-primary rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">check_circle</span>
</div>
<span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span> 8%
                        </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">مقبولة</p>
<p className="font-display-sm text-display-sm text-on-surface">1,150</p>
</div>
{/*  Rejected Reports  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant hover:border-error/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-surface-container-low text-error rounded-lg group-hover:bg-error group-hover:text-on-error transition-colors">
<span className="material-symbols-outlined">cancel</span>
</div>
<span className="flex items-center text-sm font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
<span className="material-symbols-outlined text-sm mr-1">trending_down</span> 3%
                        </span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant mb-1">مرفوضة</p>
<div className="flex items-baseline gap-2">
<p className="font-display-sm text-display-sm text-on-surface">92</p>
<span className="text-error bg-error-container px-2 py-0.5 rounded-full text-xs font-semibold">+4 هذا الأسبوع</span>
</div>
</div>
</div>
{/*  BI Charts Area  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
{/*  Bar Chart  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant">
<div className="flex justify-between items-center mb-6">
<h3 className="font-title-lg text-title-lg text-on-surface">مقارنة أداء القطاعات</h3>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 flex items-end justify-around gap-4 px-4 pb-4 border-b border-outline-variant relative">
{/*  Y-axis labels  */}
<div className="absolute left-0 top-0 bottom-4 w-12 flex flex-col justify-between text-xs text-on-surface-variant border-r border-outline-variant pr-2 text-right">
<span>400</span>
<span>300</span>
<span>200</span>
<span>100</span>
<span>0</span>
</div>
{/*  Bars  */}
<div className="w-12 bg-primary/20 hover:bg-primary/40 rounded-t-md relative group h-[80%] transition-all cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">320 تقرير</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-on-surface-variant font-medium whitespace-nowrap -rotate-45 origin-top-left">المطاعم</div>
</div>
<div className="w-12 bg-secondary/40 hover:bg-secondary/60 rounded-t-md relative group h-[65%] transition-all cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">260 تقرير</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-on-surface-variant font-medium whitespace-nowrap -rotate-45 origin-top-left">الفنادق</div>
</div>
<div className="w-12 bg-primary/60 hover:bg-primary/80 rounded-t-md relative group h-[45%] transition-all cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">180 تقرير</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-on-surface-variant font-medium whitespace-nowrap -rotate-45 origin-top-left">الآيس كريم</div>
</div>
<div className="w-12 bg-tertiary/40 hover:bg-tertiary/60 rounded-t-md relative group h-[90%] transition-all cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">360 تقرير</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-on-surface-variant font-medium whitespace-nowrap -rotate-45 origin-top-left">المقاهي</div>
</div>
<div className="w-12 bg-secondary-container hover:bg-secondary transition-all rounded-t-md relative group h-[30%] cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">120 تقرير</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-on-surface-variant font-medium whitespace-nowrap -rotate-45 origin-top-left">التجزئة</div>
</div>
</div>
</div>
{/*  Line Chart Placeholder  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-ambient-lvl1 border border-surface-variant flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-title-lg text-title-lg text-on-surface">اتجاهات تقديم التقارير</h3>
<div className="flex bg-surface-container-low rounded-lg p-1">
<button className="px-3 py-1 text-sm rounded-md bg-surface text-on-surface shadow-sm font-medium">شهري</button>
<button className="px-3 py-1 text-sm rounded-md text-on-surface-variant hover:text-on-surface font-medium">أسبوعي</button>
</div>
</div>
<div className="flex-1 relative bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden flex items-center justify-center min-h-[200px]">
{/*  Abstract Line Chart Representation  */}
<svg preserveAspectRatio="none" viewBox="0 0 400 200" className="w-full h-full text-primary opacity-50 absolute inset-0 pointer-events-none">
<path d="M0,150 Q50,180 100,120 T200,80 T300,100 T400,40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
<path d="M0,150 Q50,180 100,120 T200,80 T300,100 T400,40 L400,200 L0,200 Z" fill="currentColor" opacity="0.1"></path>
</svg>
{/*  Data Points  */}
<div className="absolute left-[10%] bottom-[30%] w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/20 group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">فبراير: 85</div>
</div>
<div className="absolute left-[25%] bottom-[45%] w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">مارس: 120</div>
</div>
<div className="absolute left-[50%] bottom-[65%] w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">مايو: 160</div>
</div>
<div className="absolute left-[75%] bottom-[55%] w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">يوليو: 145</div>
</div>
<div className="absolute left-[100%] bottom-[85%] w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 group cursor-pointer translate-x-[-100%]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">أغسطس: 210</div>
</div>
<div className="w-full h-full flex items-end justify-between px-4 pb-2 text-xs text-on-surface-variant absolute inset-0 pointer-events-none">
<span>يناير</span>
<span>مارس</span>
<span>مايو</span>
<span>يوليو</span>
<span>سبتمبر</span>
</div>
</div>
</div>
</div>
{/*  Enterprise Table  */}
<div className="bg-surface-container-lowest rounded-xl shadow-ambient-lvl1 border border-surface-variant overflow-hidden">
<div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
<h3 className="font-title-lg text-title-lg text-on-surface">سجل التقارير الحديثة</h3>
<div className="flex gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant"><span className="material-symbols-outlined">filter_list</span></button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-variant">
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold w-12"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">رقم التقرير</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">اسم التقرير</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">الفرع</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">القطاع</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">منشئ التقرير</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">حالة الاعتماد</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold">تاريخ الإنشاء</th>
<th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant font-semibold text-center">الإجراءات</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant bg-surface-container-lowest">
{/*  Active Row showing open drawer context  */}
<tr className="hover:bg-surface-container-lowest transition-colors h-12 bg-primary/5">
<td className="py-3 px-6"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></td>
<td className="py-3 px-6 font-title-md text-title-md text-primary font-medium">REP-2023-085</td>
<td className="py-3 px-6 text-on-surface">تقييم جودة الخدمة - الربع الثالث</td>
<td className="py-3 px-6 text-on-surface-variant">الرياض - العليا</td>
<td className="py-3 px-6 text-on-surface-variant">المطاعم</td>
<td className="py-3 px-6 text-on-surface">أحمد محمد</td>
<td className="py-3 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                        بانتظار المراجعة
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">24 أكتوبر 2023</td>
<td className="py-3 px-6 text-center">
<button title="عرض التفاصيل" className="text-primary hover:bg-primary-container/20 p-1 rounded transition-colors"><span className="material-symbols-outlined text-xl">visibility</span></button>
</td>
</tr>
{/*  Standard Rows  */}
<tr className="hover:bg-surface-container-low transition-colors h-12">
<td className="py-3 px-6"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></td>
<td className="py-3 px-6 font-title-md text-title-md text-on-surface font-medium">REP-2023-084</td>
<td className="py-3 px-6 text-on-surface">تقرير المبيعات الأسبوعي</td>
<td className="py-3 px-6 text-on-surface-variant">جدة - التحلية</td>
<td className="py-3 px-6 text-on-surface-variant">المقاهي</td>
<td className="py-3 px-6 text-on-surface">سارة العلي</td>
<td className="py-3 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        مقبول
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">23 أكتوبر 2023</td>
<td className="py-3 px-6 text-center">
<button className="text-on-surface-variant hover:text-primary hover:bg-primary-container/20 p-1 rounded transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors h-12 bg-surface-bright">
<td className="py-3 px-6"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></td>
<td className="py-3 px-6 font-title-md text-title-md text-on-surface font-medium">REP-2023-083</td>
<td className="py-3 px-6 text-on-surface">تحليل التكاليف التشغيلية</td>
<td className="py-3 px-6 text-on-surface-variant">الدمام - الشاطئ</td>
<td className="py-3 px-6 text-on-surface-variant">الفنادق</td>
<td className="py-3 px-6 text-on-surface">خالد حسن</td>
<td className="py-3 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 border border-rose-200">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                        مرفوض
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">21 أكتوبر 2023</td>
<td className="py-3 px-6 text-center">
<button className="text-on-surface-variant hover:text-primary hover:bg-primary-container/20 p-1 rounded transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors h-12">
<td className="py-3 px-6"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></td>
<td className="py-3 px-6 font-title-md text-title-md text-on-surface font-medium">REP-2023-082</td>
<td className="py-3 px-6 text-on-surface">تقرير الصيانة الدورية</td>
<td className="py-3 px-6 text-on-surface-variant">مكة - العزيزية</td>
<td className="py-3 px-6 text-on-surface-variant">الفنادق</td>
<td className="py-3 px-6 text-on-surface">فهد السالم</td>
<td className="py-3 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        مقبول
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">20 أكتوبر 2023</td>
<td className="py-3 px-6 text-center">
<button className="text-on-surface-variant hover:text-primary hover:bg-primary-container/20 p-1 rounded transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors h-12 bg-surface-bright">
<td className="py-3 px-6"><input type="checkbox" className="rounded text-primary focus:ring-primary border-outline" /></td>
<td className="py-3 px-6 font-title-md text-title-md text-on-surface font-medium">REP-2023-081</td>
<td className="py-3 px-6 text-on-surface">مخزون المواد الخام</td>
<td className="py-3 px-6 text-on-surface-variant">الرياض - الصناعية</td>
<td className="py-3 px-6 text-on-surface-variant">الآيس كريم</td>
<td className="py-3 px-6 text-on-surface">نورة العبدالله</td>
<td className="py-3 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        مقبول
                                    </span>
</td>
<td className="py-3 px-6 text-on-surface-variant">18 أكتوبر 2023</td>
<td className="py-3 px-6 text-center">
<button className="text-on-surface-variant hover:text-primary hover:bg-primary-container/20 p-1 rounded transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="p-4 border-t border-surface-variant flex justify-between items-center bg-surface-container-lowest">
<span className="text-sm text-on-surface-variant">عرض 1 إلى 5 من أصل 1,284 تقرير</span>
<div className="flex gap-1">
<button className="px-3 py-1 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
<button className="px-3 py-1 bg-primary text-on-primary rounded-md font-medium">1</button>
<button className="px-3 py-1 border border-outline-variant rounded-md text-on-surface hover:bg-surface-container-low font-medium">2</button>
<button className="px-3 py-1 border border-outline-variant rounded-md text-on-surface hover:bg-surface-container-low font-medium">3</button>
<span className="px-2 py-1 text-on-surface-variant">...</span>
<button className="px-3 py-1 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-low"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
</div>
</div>
</div>
{/*  Bottom spacing for scroll  */}
<div className="h-8"></div>
</div>
</main>
{/*  Side Drawer (Open State for Approval Workflow)  */}

{/*  Overlay for Drawer (Optional, visual only for this static demo)  */}
<div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-40 hidden"></div>

</div>
    </>
  );
};

export default Screen6;


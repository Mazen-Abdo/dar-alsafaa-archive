import React from 'react';

const Screen18 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<div className="">
{/*  Top App Bar (Shared Component)  */}

{/*  Page Content Canvas  */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface overflow-x-hidden">
{/*  Breadcrumbs & Header  */}
<div className="mb-lg">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md">
<div>
<h1 className="text-headline-lg font-headline-lg text-on-surface mb-2">مركز الاعتمادات وطابور المهام</h1>
<p className="text-body-md text-on-surface-variant">إدارة وتدقيق طلبات الاعتماد والمهام التشغيلية عبر الفروع.</p>
</div>
</div>
</div>
{/*  Quick Filter Tabs  */}
<div className="mb-lg overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-sm min-w-max pb-2">
<button className="px-md py-2 rounded-full bg-primary-container text-on-primary-container font-title-md border border-primary-container transition-colors shadow-sm">الكل</button>
<button className="px-md py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container-low font-title-md transition-colors">بانتظار موافقتي</button>
<button className="px-md py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container-low font-title-md transition-colors">معالجة OCR</button>
<button className="px-md py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-error-container hover:text-on-error-container font-title-md transition-colors">أخطاء الاستيراد</button>
<button className="px-md py-2 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-error-container hover:text-on-error-container hover:border-error font-title-md transition-colors flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-error"></span>
                        عاجل
                    </button>
</div>
</div>
{/*  KPI Bar (Bento Grid Style)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
{/*  KPI 1  */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-sm relative z-10">
<p className="text-title-md font-title-md text-on-surface-variant">الاعتمادات المعلقة</p>
<div className="p-2 bg-primary-fixed text-on-primary-fixed rounded-lg">
<span className="material-symbols-outlined">pending_actions</span>
</div>
</div>
<div className="flex items-end gap-sm relative z-10">
<span className="text-display-sm font-display-sm text-on-surface">124</span>
<span className="text-label-md text-primary bg-primary-fixed-dim/30 px-2 py-0.5 rounded-full mb-1">+12% اليوم</span>
</div>
</div>
{/*  KPI 2  */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-secondary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-sm relative z-10">
<p className="text-title-md font-title-md text-on-surface-variant">مهام اليوم</p>
<div className="p-2 bg-secondary-container text-on-secondary-container rounded-lg">
<span className="material-symbols-outlined">today</span>
</div>
</div>
<div className="flex items-end gap-sm relative z-10">
<span className="text-display-sm font-display-sm text-on-surface">45</span>
<span className="text-label-md text-outline px-2 py-0.5 rounded-full mb-1 border border-outline-variant">15 مكتملة</span>
</div>
</div>
{/*  KPI 3  */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-sm relative z-10">
<p className="text-title-md font-title-md text-on-surface-variant">طابور تدقيق OCR</p>
<div className="p-2 bg-tertiary-container text-on-tertiary-container rounded-lg">
<span className="material-symbols-outlined">document_scanner</span>
</div>
</div>
<div className="flex items-end gap-sm relative z-10">
<span className="text-display-sm font-display-sm text-on-surface">8</span>
<span className="text-label-md text-error bg-error-container/50 px-2 py-0.5 rounded-full mb-1">تتطلب انتباه</span>
</div>
</div>
{/*  KPI 4  */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute inset-0 bg-surface-tint/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-sm relative z-10">
<p className="text-title-md font-title-md text-on-surface-variant">متوسط وقت الاعتماد</p>
<div className="p-2 bg-surface-variant text-on-surface-variant rounded-lg">
<span className="material-symbols-outlined">timer</span>
</div>
</div>
<div className="flex items-end gap-sm relative z-10">
<span className="text-display-sm font-display-sm text-on-surface">1.2<span className="text-title-md">س</span></span>
<span className="text-label-md text-primary bg-primary-fixed-dim/30 px-2 py-0.5 rounded-full mb-1">-15 دقيقة</span>
</div>
</div>
</div>
{/*  Task Queue Table Area  */}
<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
{/*  Table Header Actions  */}
<div className="p-md border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-md bg-surface-bright">
<h2 className="text-title-lg font-title-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">view_list</span>
                        قائمة المهام النشطة
                    </h2>
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative flex-1 sm:flex-none sm:w-64">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input placeholder="بحث برقم المهمة..." type="text" className="w-full bg-surface-container-highest border-none rounded-lg py-1.5 pr-10 pl-4 text-body-md focus:ring-2 focus:ring-primary transition-all" />
</div>
<button aria-label="تصفية إضافية" className="p-1.5 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</div>
{/*  Table Wrapper for Scroll  */}
<div className="overflow-x-auto flex-1">
<table className="w-full text-right border-collapse">
<thead className="bg-surface-container-low text-label-md text-on-surface-variant border-b border-outline-variant sticky top-0 z-10">
<tr>
<th className="py-3 px-4 font-semibold whitespace-nowrap">رقم المهمة</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">تاريخ الإنشاء</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">النوع</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">الفرع</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">الأولوية</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">الحالة</th>
<th className="py-3 px-4 font-semibold text-center whitespace-nowrap">الإجراءات</th>
</tr>
</thead>
<tbody className="text-body-md divide-y divide-outline-variant/50">
{/*  Row 1 (Urgent, OCR)  */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-4 font-title-md text-primary">#TSK-8902</td>
<td className="py-3 px-4 text-on-surface-variant">
<div className="flex flex-col">
<span>اليوم</span>
<span className="text-label-sm text-outline">09:15 ص</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">document_scanner</span>
                                        تدقيق OCR
                                    </div>
</td>
<td className="py-3 px-4 text-on-surface">فرع الرياض الرئيسي</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-label-sm font-semibold bg-error-container text-on-error-container border border-error/20">
<span className="w-1.5 h-1.5 rounded-full bg-error ml-1.5"></span>
                                        عاجل
                                    </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-label-sm bg-tertiary-fixed text-on-tertiary-fixed">
                                        بانتظار المراجعة
                                    </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="مراجعة" className="text-primary hover:bg-primary-fixed/50 p-1.5 rounded-md transition-colors tooltip-trigger relative">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button aria-label="اعتماد" className="bg-primary text-on-primary hover:opacity-90 px-3 py-1 rounded-md text-label-md transition-colors">
                                            مراجعة
                                        </button>
</div>
</td>
</tr>
{/*  Row 2 (Normal, Financial)  */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-default bg-surface-container-lowest">
<td className="py-3 px-4 font-title-md text-primary">#TSK-8895</td>
<td className="py-3 px-4 text-on-surface-variant">
<div className="flex flex-col">
<span>أمس</span>
<span className="text-label-sm text-outline">14:30 م</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">request_quote</span>
                                        تقرير مالي
                                    </div>
</td>
<td className="py-3 px-4 text-on-surface">فرع جدة</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed-variant border border-secondary-fixed-dim">
<span className="w-1.5 h-1.5 rounded-full bg-secondary ml-1.5"></span>
                                        عادي
                                    </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-label-sm bg-surface-variant text-on-surface-variant border border-outline-variant">
                                        جاهز للاعتماد
                                    </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="عرض" className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button aria-label="رفض" className="text-error hover:bg-error-container p-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
<button aria-label="اعتماد" className="bg-primary text-on-primary hover:opacity-90 px-3 py-1 rounded-md text-label-md transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check</span> اعتماد
                                        </button>
</div>
</td>
</tr>
{/*  Row 3 (Low, Request)  */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-4 font-title-md text-primary">#TSK-8870</td>
<td className="py-3 px-4 text-on-surface-variant">
<div className="flex flex-col">
<span>20 أكتوبر</span>
<span className="text-label-sm text-outline">10:00 ص</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[20px]">inventory_2</span>
                                        طلب مواد
                                    </div>
</td>
<td className="py-3 px-4 text-on-surface">فرع الدمام</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-label-sm font-semibold bg-surface-container-high text-on-surface-variant border border-outline-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline ml-1.5"></span>
                                        منخفض
                                    </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-label-sm bg-surface-variant text-on-surface-variant border border-outline-variant">
                                        قيد المراجعة
                                    </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="عرض" className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button aria-label="رفض" className="text-error hover:bg-error-container p-1.5 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
<button aria-label="اعتماد" className="bg-primary text-on-primary hover:opacity-90 px-3 py-1 rounded-md text-label-md transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check</span> اعتماد
                                        </button>
</div>
</td>
</tr>
{/*  Row 4 (Urgent, Error)  */}
<tr className="hover:bg-surface-container-low transition-colors group cursor-default bg-surface-container-lowest">
<td className="py-3 px-4 font-title-md text-primary">#TSK-8865</td>
<td className="py-3 px-4 text-on-surface-variant">
<div className="flex flex-col">
<span>19 أكتوبر</span>
<span className="text-label-sm text-outline">16:45 م</span>
</div>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[20px]">error</span>
                                        خطأ استيراد
                                    </div>
</td>
<td className="py-3 px-4 text-on-surface">الإدارة العامة</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-label-sm font-semibold bg-error-container text-on-error-container border border-error/20">
<span className="w-1.5 h-1.5 rounded-full bg-error ml-1.5"></span>
                                        عاجل
                                    </span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-label-sm bg-error-container text-on-error-container border border-error/30">
                                        فشل النظام
                                    </span>
</td>
<td className="py-3 px-4">
<div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button aria-label="مراجعة السجل" className="text-primary hover:bg-primary-fixed/50 p-1.5 rounded-md transition-colors tooltip-trigger relative">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button aria-label="إعادة محاولة" className="bg-surface-container-highest text-on-surface hover:bg-outline-variant px-3 py-1 rounded-md text-label-md transition-colors border border-outline">
                                            إعادة محاولة
                                        </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="p-md border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between text-body-md text-on-surface-variant">
<div>
                        عرض <span className="font-semibold text-on-surface">1</span> إلى <span className="font-semibold text-on-surface">4</span> من <span className="font-semibold text-on-surface">124</span> مُدخل
                    </div>
<div className="flex items-center gap-2">
<button disabled="" className="p-1 border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button className="w-8 h-8 rounded bg-primary text-on-primary font-semibold flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-low font-semibold flex items-center justify-center">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-low font-semibold flex items-center justify-center">3</button>
<span>...</span>
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
};

export default Screen18;


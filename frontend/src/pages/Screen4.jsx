import React from 'react';

const Screen4 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<div className="flex-1 flex flex-col h-full relative">

{/*  Canvas  */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-xl gap-md">
<div>
<h2 className="text-headline-md font-headline-md text-on-surface mb-xs">لوحة القيادة التنفيذية</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">مرحباً بك، مدير النظام <span className="text-outline text-sm mx-2">|</span> 15 أكتوبر 2023</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface border border-outline-variant text-on-surface py-2 px-4 rounded-lg text-body-md font-body-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
                        استيراد Excel
                    </button>
<button className="bg-surface border border-outline-variant text-on-surface py-2 px-4 rounded-lg text-body-md font-body-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">document_scanner</span>
                        OCR
                    </button>
<button className="bg-primary text-on-primary py-2 px-4 rounded-lg text-body-md font-body-md flex items-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
                        تقرير جديد
                    </button>
</div>
</div>
{/*  KPI Cards  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
{/*  Card 1  */}
<div className="bg-surface rounded-xl p-md border border-surface-variant shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-fixed-dim/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<p className="text-title-md font-title-md text-on-surface-variant">إجمالي الفروع</p>
<span className="material-symbols-outlined text-primary-container">store</span>
</div>
<div className="flex items-end gap-sm relative z-10">
<span className="text-display-sm font-display-sm text-on-surface">142</span>
<span className="text-label-md font-label-md text-primary flex items-center mb-1"><span className="material-symbols-outlined text-[16px]">trending_up</span> +12%</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface rounded-xl p-md border border-error-container shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<p className="text-title-md font-title-md text-on-surface-variant">التقارير المعلقة</p>
<span className="material-symbols-outlined text-error">pending_actions</span>
</div>
<div className="flex items-end gap-sm">
<span className="text-display-sm font-display-sm text-error">28</span>
<span className="text-label-md font-label-md text-on-surface-variant mb-1">تحتاج مراجعة</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface rounded-xl p-md border border-surface-variant shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<p className="text-title-md font-title-md text-on-surface-variant">دقة التعرف (OCR)</p>
<span className="material-symbols-outlined text-secondary-container">document_scanner</span>
</div>
<div className="flex items-end gap-sm">
<span className="text-display-sm font-display-sm text-on-surface">98.5%</span>
<span className="text-label-md font-label-md text-primary flex items-center mb-1"><span className="material-symbols-outlined text-[16px]">trending_up</span> +0.5%</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface rounded-xl p-md border border-surface-variant shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<p className="text-title-md font-title-md text-on-surface-variant">استهلاك التخزين</p>
<span className="material-symbols-outlined text-on-surface-variant">cloud</span>
</div>
<div>
<div className="flex justify-between items-end mb-1">
<span className="text-display-sm font-display-sm text-on-surface leading-none">64%</span>
<span className="text-label-md font-label-md text-on-surface-variant mb-1">6.4TB / 10TB</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-primary-container h-2 rounded-full" style={{"width":"64%"}}></div>
</div>
</div>
</div>
</div>
{/*  Analytics Row  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-md mb-xl">
{/*  Bar Chart  */}
<div className="lg:col-span-2 bg-surface border border-surface-variant rounded-xl p-md shadow-sm">
<div className="flex justify-between items-center mb-lg">
<h3 className="text-title-lg font-title-lg text-on-surface">الأداء الشهري للتقارير (حسب القطاع)</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-sm">
{/*  Simulated Bar Chart  */}
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[60%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">مطاعم</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-fixed-dim rounded-t-sm h-[80%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">فنادق</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-sm h-[45%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">تجزئة</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[90%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">عقارات</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-fixed-dim rounded-t-sm h-[30%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">صناعة</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="w-full bg-secondary-container rounded-t-sm h-[70%] chart-bar"></div>
<span className="text-label-sm font-label-sm text-on-surface-variant">خدمات</span>
</div>
</div>
</div>
{/*  Donut Chart Area  */}
<div className="bg-surface border border-surface-variant rounded-xl p-md shadow-sm flex flex-col">
<h3 className="text-title-lg font-title-lg text-on-surface mb-lg">توزيع القطاعات</h3>
<div className="flex-1 flex items-center justify-center relative">
{/*  Placeholder for an actual chart, using CSS for a simple ring representation  */}
<div className="w-40 h-40 rounded-full border-[16px] border-primary-container relative">
<div className="absolute inset-0 rounded-full border-[16px] border-primary-fixed-dim" style={{"clipPath":"polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)"}}></div>
<div className="absolute inset-0 rounded-full border-[16px] border-secondary-container" style={{"clipPath":"polygon(50% 50%, 0 100%, 0 0, 50% 0)","transform":"rotate(-45deg)"}}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-surface rounded-full m-2">
<span className="text-title-lg font-title-lg text-on-surface font-bold">142</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">إجمالي</span>
</div>
</div>
</div>
<div className="mt-md flex flex-wrap justify-center gap-sm">
<div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-primary-container"></span><span className="text-label-md font-label-md text-on-surface-variant">فنادق (45%)</span></div>
<div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span><span className="text-label-md font-label-md text-on-surface-variant">عقارات (35%)</span></div>
<div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-secondary-container"></span><span className="text-label-md font-label-md text-on-surface-variant">أخرى (20%)</span></div>
</div>
</div>
</div>
{/*  Business Monitoring Row  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
{/*  Table  */}
<div className="lg:col-span-2 bg-surface border border-surface-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-md border-b border-surface-variant flex justify-between items-center bg-surface-container-low/50">
<h3 className="text-title-lg font-title-lg text-on-surface">العمليات الأخيرة</h3>
<button className="text-primary text-label-md font-label-md hover:underline">عرض الكل</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-surface-container-lowest border-b border-surface-variant">
<th className="py-3 px-4 text-label-md font-label-md text-on-surface-variant font-medium">العملية</th>
<th className="py-3 px-4 text-label-md font-label-md text-on-surface-variant font-medium">الفرع</th>
<th className="py-3 px-4 text-label-md font-label-md text-on-surface-variant font-medium">المستخدم</th>
<th className="py-3 px-4 text-label-md font-label-md text-on-surface-variant font-medium">الحالة</th>
<th className="py-3 px-4 text-label-md font-label-md text-on-surface-variant font-medium">الوقت</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-surface-variant hover:bg-surface-container-lowest transition-colors">
<td className="py-3 px-4 text-body-md font-body-md text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-outline text-[18px]">description</span> رفع تقرير مالي</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">فرع الرياض الرئيسي</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">أحمد محمد</td>
<td className="py-3 px-4"><span className="bg-primary-fixed text-primary-container px-2 py-1 rounded text-label-sm font-label-sm">مكتمل</span></td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">منذ 10 دقائق</td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-lowest transition-colors">
<td className="py-3 px-4 text-body-md font-body-md text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-outline text-[18px]">document_scanner</span> مسح ضوئي لفواتير</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">فرع جدة</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">سارة عبدالله</td>
<td className="py-3 px-4"><span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-label-sm font-label-sm">قيد المعالجة</span></td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">منذ 45 دقيقة</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="py-3 px-4 text-body-md font-body-md text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-outline text-[18px]">upload_file</span> استيراد بيانات Excel</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">الإدارة العامة</td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">خالد الدوسري</td>
<td className="py-3 px-4"><span className="bg-error-container text-error px-2 py-1 rounded text-label-sm font-label-sm">مرفوض</span></td>
<td className="py-3 px-4 text-body-md font-body-md text-on-surface-variant">منذ ساعتين</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Notifications  */}
<div className="bg-surface border border-surface-variant rounded-xl shadow-sm flex flex-col h-full">
<div className="p-md border-b border-surface-variant flex justify-between items-center bg-surface-container-low/50">
<h3 className="text-title-lg font-title-lg text-on-surface">إشعارات النظام</h3>
</div>
<div className="p-md space-y-md flex-1 overflow-y-auto">
<div className="flex gap-md items-start">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface">نجاح عملية الاستيراد</h4>
<p className="text-body-md font-body-md text-on-surface-variant mt-xs">تم استيراد 500 سجل بنجاح من ملف مبيعات_أكتوبر.xlsx.</p>
<span className="text-label-sm font-label-sm text-outline mt-1 block">10:30 صباحاً</span>
</div>
</div>
<div className="flex gap-md items-start">
<div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-error text-[18px]">warning</span>
</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface">رفض تقرير</h4>
<p className="text-body-md font-body-md text-on-surface-variant mt-xs">تم رفض التقرير المالي لفرع الدمام بسبب بيانات غير مكتملة.</p>
<span className="text-label-sm font-label-sm text-outline mt-1 block">09:15 صباحاً</span>
</div>
</div>
<div className="flex gap-md items-start">
<div className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-secondary text-[18px]">info</span>
</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface">تحديث النظام المجدول</h4>
<p className="text-body-md font-body-md text-on-surface-variant mt-xs">سيتم إجراء صيانة للنظام يوم الجمعة القادم الساعة 2 صباحاً.</p>
<span className="text-label-sm font-label-sm text-outline mt-1 block">أمس</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

</div>
    </>
  );
};

export default Screen4;


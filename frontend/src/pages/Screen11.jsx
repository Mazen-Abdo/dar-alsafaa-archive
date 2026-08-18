import React from 'react';

const Screen11 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Canvas  */}
<main className="">
{/*  Page Header  */}
<div className="mb-lg animate-fade-in">

<div className="flex justify-between items-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface">مركز استيراد البيانات والأكسل</h2>
<div className="flex gap-md">
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-body-md text-on-surface hover:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined text-title-md">description</span>
                        سجل عمليات الاستيراد
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-primary text-primary rounded-lg text-body-md hover:bg-primary-container hover:text-on-primary-container transition-colors">
<span className="material-symbols-outlined text-title-md">download</span>
                        تحميل نموذج الاستيراد
                    </button>
</div>
</div>
</div>
{/*  Stepper  */}
<div className="mb-xl bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-outline-variant/30 animate-fade-in" style={{"animationDelay":"0.1s"}}>
<div className="flex items-center justify-between relative">
<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-outline-variant/30 -z-10 translate-y-[-50%]"></div>
{/*  Step 1: Completed  */}
<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-4">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-title-md">check</span>
</div>
<span className="font-title-md text-title-md text-on-surface">رفع الملف</span>
</div>
{/*  Step 2: Active  */}
<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-4">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container border-2 border-primary flex items-center justify-center font-bold">
                        2
                    </div>
<span className="font-title-md text-title-md text-primary font-bold">تعيين الأعمدة</span>
</div>
{/*  Step 3: Pending  */}
<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-4 opacity-50">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold">
                        3
                    </div>
<span className="font-title-md text-title-md text-on-surface-variant">التحقق من البيانات</span>
</div>
{/*  Step 4: Pending  */}
<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-4 opacity-50">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold">
                        4
                    </div>
<span className="font-title-md text-title-md text-on-surface-variant">ملخص التنفيذ</span>
</div>
</div>
</div>
{/*  Workspace Area  */}
<div className="grid grid-cols-12 gap-lg animate-fade-in" style={{"animationDelay":"0.2s"}}>
{/*  Column Mapping Settings (Sidebar-ish)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-lg">
{/*  File Info Card  */}
<div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
<h3 className="font-title-md text-title-md text-on-surface mb-md pb-2 border-b border-outline-variant/30 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">feed</span>
                        معلومات الملف
                    </h3>
<div className="flex items-start gap-4 mb-lg">
<div className="p-3 bg-surface-container-low rounded-lg text-primary">
<span className="material-symbols-outlined text-[32px]">table_chart</span>
</div>
<div>
<p className="font-title-md text-title-md text-on-surface mb-1">مبيعات_فرع_الرياض_Q3.xlsx</p>
<div className="flex gap-4 text-label-md text-on-surface-variant">
<span>2.4 MB</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">format_list_numbered</span> 4,250 صف</span>
</div>
</div>
</div>
<div className="mb-sm">
<label className="block font-label-md text-label-md text-on-surface mb-2">الفرع المستهدف للاستيراد</label>
<div className="relative">
<select className="w-full bg-surface appearance-none border border-outline-variant rounded-lg py-2 px-3 pr-10 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
<option>فرع الرياض (الرئيسي)</option>
<option>فرع جدة</option>
<option>فرع الدمام</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*  Legend Card  */}
<div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
<h3 className="font-title-md text-title-md text-on-surface mb-sm">دليل الحالات</h3>
<ul className="space-y-2 text-body-md">
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span> تم التعيين بنجاح</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-error"></span> حقل نظام إلزامي غير معين</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span> تحذير: تنسيق بيانات مختلف</li>
</ul>
</div>
</div>
{/*  Mapping & Preview Area  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
{/*  Mapping Table  */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden flex flex-col h-[400px]">
<div className="p-md bg-surface-container-low border-b border-outline-variant/30 flex justify-between items-center sticky top-0 z-10">
<h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">schema</span>
                            تعيين الأعمدة (Column Mapping)
                        </h3>
<button className="text-label-md text-primary hover:underline">اقتراح تعيين تلقائي</button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-right border-collapse">
<thead className="bg-surface-container-highest sticky top-0 z-10">
<tr>
<th className="p-3 font-title-md text-title-md text-on-surface-variant border-b border-outline-variant/50">عمود الأكسل (المصدر)</th>
<th className="p-3 w-10 text-center border-b border-outline-variant/50"></th>
<th className="p-3 font-title-md text-title-md text-on-surface-variant border-b border-outline-variant/50">حقل النظام (الهدف)</th>
<th className="p-3 font-title-md text-title-md text-on-surface-variant border-b border-outline-variant/50">الحالة</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="table-row-hover">
<td className="p-3 text-body-md text-on-surface font-medium bg-surface-container-low/50">اسم المنتج</td>
<td className="p-3 text-center text-outline"><span className="material-symbols-outlined text-[18px]">arrow_left_alt</span></td>
<td className="p-3">
<select className="w-full bg-surface border-none rounded py-1 px-2 text-body-md text-primary font-medium focus:ring-1 focus:ring-primary">
<option selected="">Product_Name (إلزامي)</option>
<option>Description</option>
<option>-- تجاهل --</option>
</select>
</td>
<td className="p-3">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
</td>
</tr>
<tr className="table-row-hover">
<td className="p-3 text-body-md text-on-surface font-medium bg-surface-container-low/50">المبلغ</td>
<td className="p-3 text-center text-outline"><span className="material-symbols-outlined text-[18px]">arrow_left_alt</span></td>
<td className="p-3">
<select className="w-full bg-surface border-none rounded py-1 px-2 text-body-md text-primary font-medium focus:ring-1 focus:ring-primary">
<option selected="">Amount (إلزامي)</option>
<option>Price</option>
<option>-- تجاهل --</option>
</select>
</td>
<td className="p-3">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
</td>
</tr>
<tr className="table-row-hover bg-error-container/10">
<td className="p-3 text-body-md text-on-surface font-medium bg-surface-container-low/50">-- لم يتم العثور --</td>
<td className="p-3 text-center text-outline"><span className="material-symbols-outlined text-[18px]">arrow_left_alt</span></td>
<td className="p-3">
<div className="px-2 py-1 text-error text-body-md font-medium">Category_ID (إلزامي)</div>
</td>
<td className="p-3">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-error text-on-error">
<span className="material-symbols-outlined text-[14px]">close</span>
</div>
</td>
</tr>
<tr className="table-row-hover">
<td className="p-3 text-body-md text-on-surface font-medium bg-surface-container-low/50">تاريخ البيع</td>
<td className="p-3 text-center text-outline"><span className="material-symbols-outlined text-[18px]">arrow_left_alt</span></td>
<td className="p-3">
<select className="w-full bg-surface border-none rounded py-1 px-2 text-body-md text-on-surface focus:ring-1 focus:ring-primary">
<option selected="">Sale_Date</option>
<option>Created_At</option>
<option>-- تجاهل --</option>
</select>
</td>
<td className="p-3">
<div title="تحذير: تنسيق التاريخ قد يختلف" className="flex items-center justify-center w-6 h-6 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined text-[14px]">warning</span>
</div>
</td>
</tr>
<tr className="table-row-hover">
<td className="p-3 text-body-md text-on-surface font-medium bg-surface-container-low/50">ملاحظات</td>
<td className="p-3 text-center text-outline"><span className="material-symbols-outlined text-[18px]">arrow_left_alt</span></td>
<td className="p-3">
<select className="w-full bg-surface border-none rounded py-1 px-2 text-body-md text-on-surface-variant focus:ring-1 focus:ring-primary">
<option>Notes</option>
<option selected="">-- تجاهل --</option>
</select>
</td>
<td className="p-3">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">remove</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/*  Data Validation Preview  */}
<div className="mt-lg bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden animate-fade-in" style={{"animationDelay":"0.3s"}}>
<div className="p-md bg-surface-container-low border-b border-outline-variant/30 flex justify-between items-center">
<h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">preview</span>
                    معاينة البيانات (أول 10 صفوف)
                </h3>
<div className="flex gap-2">
<span className="px-2 py-1 bg-error-container text-on-error-container rounded text-label-md font-bold">1 خطأ</span>
<span className="px-2 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant rounded text-label-md font-bold">2 تحذير</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse whitespace-nowrap">
<thead className="bg-surface-container-highest">
<tr>
<th className="p-3 w-10 text-center border-b border-outline-variant/50">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">rule</span>
</th>
<th className="p-3 w-12 text-center border-b border-outline-variant/50 text-label-md text-on-surface-variant">#</th>
<th className="p-3 font-title-md text-title-md text-on-surface border-b border-outline-variant/50">Product_Name</th>
<th className="p-3 font-title-md text-title-md text-on-surface border-b border-outline-variant/50">Amount</th>
<th className="p-3 font-title-md text-title-md text-on-surface border-b border-outline-variant/50">Category_ID</th>
<th className="p-3 font-title-md text-title-md text-on-surface border-b border-outline-variant/50">Sale_Date</th>
<th className="p-3 font-title-md text-title-md text-on-surface-variant border-b border-outline-variant/50 opacity-50">ملاحظات (مُتجاهل)</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 text-body-md">
{/*  Row 1  */}
<tr className="table-row-hover">
<td className="p-3 text-center border-l border-outline-variant/30">
<input checked="" title="تضمين السطر" type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
</td>
<td className="p-3 text-center text-on-surface-variant">1</td>
<td className="p-3">لابتوب ديل XPS</td>
<td className="p-3 font-medium">4,500.00</td>
<td className="p-3 text-on-surface-variant italic">--</td>
<td className="p-3">2023-09-01</td>
<td className="p-3 text-on-surface-variant opacity-50">عميل جديد</td>
</tr>
{/*  Row 14 (Error)  */}
<tr className="bg-error-container/20 border-l-4 border-error table-row-hover">
<td className="p-3 text-center border-l border-outline-variant/30">
<input title="استبعاد السطر بسبب أخطاء" type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
</td>
<td className="p-3 text-center text-on-surface-variant">14</td>
<td className="p-3">شاشة سامسونج 27"</td>
<td className="p-3 font-medium bg-error/10 text-on-error-container relative group cursor-pointer">
<span className="border-b border-dashed border-error">خالية</span>
<div className="absolute bottom-full mb-2 right-0 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-label-sm p-2 rounded whitespace-nowrap z-20 shadow-md">
                                    قيمة خالية في السطر 14 لحقل إلزامي
                                </div>
</td>
<td className="p-3 text-on-surface-variant italic">--</td>
<td className="p-3">2023-09-12</td>
<td className="p-3 text-on-surface-variant opacity-50">--</td>
</tr>
{/*  Row 22 (Warning)  */}
<tr className="bg-tertiary-fixed/30 border-l-4 border-tertiary-fixed-dim table-row-hover">
<td className="p-3 text-center border-l border-outline-variant/30">
<input checked="" title="تضمين السطر" type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
</td>
<td className="p-3 text-center text-on-surface-variant">22</td>
<td className="p-3">ماوس لوجيتك لاسلكي</td>
<td className="p-3 font-medium">150.00</td>
<td className="p-3 text-on-surface-variant italic">--</td>
<td className="p-3 bg-tertiary/10 text-on-tertiary-container relative group cursor-pointer">
<span className="border-b border-dashed border-tertiary-fixed-dim">09/15/2023</span>
<div className="absolute bottom-full mb-2 right-0 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-label-sm p-2 rounded whitespace-nowrap z-20 shadow-md">
                                    تنسيق تاريخ غير قياسي، سيتم محاولة تحويله
                                </div>
</td>
<td className="p-3 text-on-surface-variant opacity-50">--</td>
</tr>
{/*  More Rows Dummy  */}
<tr className="table-row-hover">
<td className="p-3 text-center border-l border-outline-variant/30"><input checked="" type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" /></td>
<td className="p-3 text-center text-on-surface-variant">35</td>
<td className="p-3">لوحة مفاتيح ميكانيكية</td>
<td className="p-3 font-medium">320.00</td>
<td className="p-3 text-on-surface-variant italic">--</td>
<td className="p-3">2023-09-18</td>
<td className="p-3 text-on-surface-variant opacity-50">--</td>
</tr>
</tbody>
</table>
</div>
<div className="p-sm bg-surface-container-low text-center border-t border-outline-variant/30">
<p className="text-label-md text-on-surface-variant">يتم عرض أول 10 صفوف فقط للمعاينة. إجمالي الصفوف: 4,250</p>
</div>
</div>
</main>
{/*  Bottom Actions Bar  */}
<div className="">
<button className="px-6 py-2 border border-outline-variant rounded-lg text-body-md text-on-surface hover:bg-surface-container-high transition-colors font-medium">
            إلغاء
        </button>
<div className="flex items-center gap-md">
<button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary-container/20 rounded-lg text-body-md transition-colors font-medium">
<span className="material-symbols-outlined text-title-md">save</span>
                حفظ القالب لاستخدامه مستقبلاً
            </button>
<button className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-lg text-title-md font-bold hover:bg-primary-container hover:text-on-primary-container shadow-sm hover:shadow-md transition-all">
                بدء معالجة واستيراد البيانات
                <span className="material-symbols-outlined">arrow_left_alt</span>
</button>
</div>
</div>

</div>
    </>
  );
};

export default Screen11;


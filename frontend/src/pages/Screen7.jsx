import React from 'react';

const Screen7 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Area  */}
<div className="">

{/*  Page Header & Actions  */}
<div className="px-margin-desktop py-lg bg-surface-container-lowest border-b border-surface-container-high flex flex-col md:flex-row justify-between items-start md:items-end gap-4 shrink-0">
<div>

<h2 className="font-display-sm text-display-sm text-on-background mb-4">الأرشيف الإلكتروني</h2>
{/*  Storage Indicator  */}
<div className="flex items-center gap-4 bg-surface p-3 rounded-lg border border-surface-container-high w-full md:w-80 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="p-2 bg-primary-container rounded-md text-on-primary-container">
<span className="material-symbols-outlined">cloud_done</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">استهلاك التخزين</span>
<span className="font-label-sm text-label-sm font-bold text-primary">78 GB / 100 GB</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-md w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2.5 bg-surface text-primary border border-outline-variant rounded-lg font-title-md text-title-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<span className="material-symbols-outlined text-[20px]">download</span>
                    تصدير الكل
                </button>
<button className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
                    رفع ملف للأرشيف
                </button>
</div>
</div>
{/*  Filter & Search Bar  */}
<div className="px-margin-desktop py-md bg-surface-container-lowest border-b border-surface-container-high shrink-0 z-30">
<div className="flex flex-col xl:flex-row gap-lg justify-between items-start xl:items-center">
{/*  Search  */}
<div className="relative w-full xl:w-96 group">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
<input placeholder="البحث في الأرشيف الشامل..." type="text" className="w-full pr-10 pl-4 py-2 bg-surface-container-low border border-transparent focus:border-primary focus:bg-surface rounded-lg font-body-md text-on-surface placeholder:text-on-surface-variant/70 transition-all outline-none" />
</div>
{/*  Tabs & Filters  */}
<div className="flex flex-wrap items-center gap-4 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0">
<div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
<button className="px-4 py-1.5 bg-surface text-primary rounded-md font-label-md text-label-md shadow-sm border border-surface-container-high">الكل</button>
<button className="px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-md font-label-md text-label-md transition-colors">تقارير</button>
<button className="px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-md font-label-md text-label-md transition-colors">عقود</button>
<button className="px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-md font-label-md text-label-md transition-colors">مستندات OCR</button>
<button className="px-4 py-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-md font-label-md text-label-md transition-colors">ملفات مالية</button>
</div>
<div className="h-6 w-px bg-outline-variant hidden xl:block"></div>
<div className="flex items-center gap-2">
<div className="relative">
<select className="appearance-none pl-8 pr-4 py-1.5 bg-surface border border-outline-variant rounded-lg font-label-md text-on-surface cursor-pointer focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>جميع الفروع</option>
<option>الفرع الرئيسي</option>
<option>فرع جدة</option>
</select>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
</div>
<div className="relative">
<select className="appearance-none pl-8 pr-4 py-1.5 bg-surface border border-outline-variant rounded-lg font-label-md text-on-surface cursor-pointer focus:border-primary focus:ring-1 focus:ring-primary outline-none">
<option>جميع القطاعات</option>
<option>قطاع المطاعم</option>
<option>قطاع الفنادق</option>
</select>
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
</div>
</div>
</div>
{/*  Main Workspace (Scrollable)  */}
<div className="flex-1 overflow-hidden flex relative">
{/*  Left Grid Area  */}
<div className="flex-1 overflow-y-auto p-margin-desktop">
{/*  Folder System  */}
<div className="mb-xl">
<h3 className="font-title-lg text-title-lg text-on-surface mb-md">مجلدات القطاعات</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  Folder Card 1  */}
<div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 flex items-center gap-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all cursor-pointer group">
<div className="w-12 h-12 bg-secondary-fixed/30 rounded-lg flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined filled text-[28px]">folder</span>
</div>
<div className="flex-1">
<h4 className="font-title-md text-title-md text-on-surface">قطاع المطاعم</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">1,245 ملف</p>
</div>
</div>
{/*  Folder Card 2  */}
<div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 flex items-center gap-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all cursor-pointer group">
<div className="w-12 h-12 bg-tertiary-fixed/30 rounded-lg flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined filled text-[28px]">folder</span>
</div>
<div className="flex-1">
<h4 className="font-title-md text-title-md text-on-surface">قطاع الفنادق</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">892 ملف</p>
</div>
</div>
{/*  Folder Card 3  */}
<div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 flex items-center gap-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all cursor-pointer group">
<div className="w-12 h-12 bg-primary-fixed/30 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined filled text-[28px]">folder</span>
</div>
<div className="flex-1">
<h4 className="font-title-md text-title-md text-on-surface">الشؤون القانونية</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">430 ملف</p>
</div>
</div>
{/*  Folder Card 4  */}
<div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 flex items-center gap-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all cursor-pointer group">
<div className="w-12 h-12 bg-error-container/50 rounded-lg flex items-center justify-center text-error group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined filled text-[28px]">folder</span>
</div>
<div className="flex-1">
<h4 className="font-title-md text-title-md text-on-surface">الموارد البشرية</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">3,100 ملف</p>
</div>
</div>
</div>
</div>
{/*  File Grid  */}
<div>
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-lg text-title-lg text-on-surface">الملفات الحديثة</h3>
<div className="flex gap-2">
<button className="p-1.5 text-primary bg-surface-container-low rounded-md"><span className="material-symbols-outlined text-[20px]">grid_view</span></button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container-low rounded-md"><span className="material-symbols-outlined text-[20px]">view_list</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
{/*  File Card 1 (Active/Selected State)  */}
<div className="bg-surface-container-lowest border-2 border-primary rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative flex flex-col group">
<div className="absolute top-3 left-3 opacity-100">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded text-[10px] font-bold tracking-wide">مالي</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<span className="material-symbols-outlined text-[48px] text-error mb-2">picture_as_pdf</span>
<h4 className="font-title-md text-title-md text-center line-clamp-2 px-4">تقرير الأرباح السنوي - فرع الرياض 2023.pdf</h4>
</div>
<div className="mt-auto border-t border-surface-container-high pt-3 flex flex-wrap justify-between items-center gap-y-2">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">store</span>
<span className="font-label-sm text-label-sm">الرياض</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-low px-1.5 py-0.5 rounded text-on-surface-variant">v2.1</span>
<div className="w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>1.2 MB</span>
<span>12 مايو 2024</span>
</div>
</div>
</div>
{/*  File Card 2  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all relative flex flex-col group cursor-pointer">
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold tracking-wide">عقد</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<span className="material-symbols-outlined text-[48px] text-secondary mb-2">description</span>
<h4 className="font-title-md text-title-md text-center line-clamp-2 px-4">عقد توريد معدات مطابخ - شركة الأفق.docx</h4>
</div>
<div className="mt-auto border-t border-surface-container-high pt-3 flex flex-wrap justify-between items-center gap-y-2">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">store</span>
<span className="font-label-sm text-label-sm">الرئيسي</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-low px-1.5 py-0.5 rounded text-on-surface-variant">v1.0</span>
<div className="w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>450 KB</span>
<span>10 مايو 2024</span>
</div>
</div>
</div>
{/*  File Card 3  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all relative flex flex-col group cursor-pointer">
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container rounded text-[10px] font-bold tracking-wide">مالي</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<span className="material-symbols-outlined text-[48px] text-[#006E18] mb-2">table_view</span>
<h4 className="font-title-md text-title-md text-center line-clamp-2 px-4">ميزانية الربع الأول - قطاع المطاعم.xlsx</h4>
</div>
<div className="mt-auto border-t border-surface-container-high pt-3 flex flex-wrap justify-between items-center gap-y-2">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">store</span>
<span className="font-label-sm text-label-sm">جدة</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-low px-1.5 py-0.5 rounded text-on-surface-variant">v3.2</span>
<div className="w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>3.4 MB</span>
<span>08 مايو 2024</span>
</div>
</div>
</div>
{/*  File Card 4  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-primary-fixed-dim transition-all relative flex flex-col group cursor-pointer">
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded text-[10px] font-bold tracking-wide">مستند OCR</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<span className="material-symbols-outlined text-[48px] text-outline mb-2">document_scanner</span>
<h4 className="font-title-md text-title-md text-center line-clamp-2 px-4">فاتورة مورد - مؤسسة البناء الحديث.pdf</h4>
</div>
<div className="mt-auto border-t border-surface-container-high pt-3 flex flex-wrap justify-between items-center gap-y-2">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">store</span>
<span className="font-label-sm text-label-sm">الرئيسي</span>
</div>
<span className="font-label-sm text-label-sm bg-surface-container-low px-1.5 py-0.5 rounded text-on-surface-variant">v1.0</span>
<div className="w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>890 KB</span>
<span>05 مايو 2024</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Metadata Panel (Sidebar Drawer)  */}

</div>
</div>

</div>
    </>
  );
};

export default Screen7;


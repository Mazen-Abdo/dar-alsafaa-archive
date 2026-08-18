
import React from 'react';

const OCR = () => {
  return (
    <>
      
{/*  SideNavBar Component  */}
<aside className="hidden md:flex flex-col h-full overflow-y-auto bg-primary dark:bg-surface-container-lowest fixed h-full w-[280px] right-0 top-0 border-l border-outline-variant dark:border-outline-variant shadow-sm z-50">
{/*  Header  */}
<div className="p-gutter flex flex-col items-center border-b border-primary-container">
<div data-alt="شعار دار الصفاء" className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-md text-primary font-display-sm">د</div>
<h1 className="text-title-lg font-title-lg font-bold text-on-primary dark:text-primary-fixed">دار الصفاء</h1>
<p className="text-label-md font-label-md text-on-primary-container">النظام الذكي</p>
</div>
{/*  Navigation Tabs  */}
<nav className="flex-1 py-lg px-md space-y-sm">
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">dashboard</span>
<span className="text-body-md font-body-md">لوحة القيادة</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">corporate_fare</span>
<span className="text-body-md font-body-md">المنظمة</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">admin_panel_settings</span>
<span className="text-body-md font-body-md">الإدارة</span>
</a>
{/*  Active Tab: Data Operations  */}
<a href="#" className="flex items-center px-md py-sm rounded-lg border-r-4 border-primary-fixed-dim bg-on-primary-fixed-variant text-on-primary font-bold transition-transform scale-95">
<span className="material-symbols-outlined ml-md text-[20px]">storage</span>
<span className="text-body-md font-body-md">عمليات البيانات</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">inventory_2</span>
<span className="text-body-md font-body-md">الأرشيف الإلكتروني</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">description</span>
<span className="text-body-md font-body-md">التقارير</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">analytics</span>
<span className="text-body-md font-body-md">التحليلات</span>
</a>
<a href="#" className="flex items-center px-md py-sm rounded-lg text-on-primary-container dark:text-on-surface-variant hover:bg-primary-container dark:hover:bg-surface-container-high transition-colors duration-200">
<span className="material-symbols-outlined ml-md text-[20px]">settings</span>
<span className="text-body-md font-body-md">الإعدادات</span>
</a>
</nav>
{/*  CTA  */}
<div className="p-gutter mt-auto">
<button className="w-full bg-primary-fixed text-primary-container text-body-md font-body-md font-bold py-md rounded-lg flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<span className="material-symbols-outlined ml-sm text-[20px]">add</span>
                إضافة عملية جديدة
            </button>
</div>
{/*  Footer  */}
<div className="p-gutter border-t border-primary-container space-y-sm">
<a href="#" className="flex items-center text-on-primary-container hover:text-on-primary transition-colors text-body-md font-body-md">
<span className="material-symbols-outlined ml-md text-[20px]">help</span>
                المساعدة
            </a>
<a href="#" className="flex items-center text-on-primary-container hover:text-on-primary transition-colors text-body-md font-body-md">
<span className="material-symbols-outlined ml-md text-[20px]">logout</span>
                تسجيل الخروج
            </a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col min-w-0 md:mr-[280px]">
{/*  TopNavBar Component  */}
<header className="bg-surface dark:bg-surface-dim docked full-width top-0 sticky z-40 border-b border-outline-variant dark:border-outline-variant shadow-sm flex justify-between items-center h-16 px-gutter w-full rtl">
{/*  Left Side (Search)  */}
<div className="flex-1 flex items-center max-w-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input placeholder="البحث في النظام..." type="text" className="w-full bg-surface-container-low border-none rounded-full py-2 pr-10 pl-4 text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface transition-all" />
</div>
</div>
{/*  Middle (Nav Links - Web only)  */}
<nav className="hidden md:flex mx-lg space-x-md space-x-reverse h-full">
<a href="#" className="flex items-center h-full px-md text-on-surface-variant dark:text-surface-variant text-label-sm font-label-sm hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-all">الرئيسية</a>
<a href="#" className="flex items-center h-full px-md text-on-surface-variant dark:text-surface-variant text-label-sm font-label-sm hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-all">الفروع</a>
<a href="#" className="flex items-center h-full px-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary font-bold text-label-sm font-label-sm hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-all">المهام</a>
</nav>
{/*  Right Side (Actions & Profile)  */}
<div className="flex items-center space-x-sm space-x-reverse">
<button className="hidden lg:flex items-center px-md py-2 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-bold rounded-full hover:opacity-80 transition-opacity">
                    إجراء سريع
                </button>
<div className="flex items-center border-r border-outline-variant pr-sm space-x-sm space-x-reverse">
<button className="p-2 text-on-surface-variant rounded-full hover:bg-surface-container-highest transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="p-2 text-on-surface-variant rounded-full hover:bg-surface-container-highest transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">language</span>
</button>
<button className="p-2 text-on-surface-variant rounded-full hover:bg-surface-container-highest transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">dark_mode</span>
</button>
<button className="p-2 text-on-surface-variant rounded-full hover:bg-surface-container-highest transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">account_circle</span>
</button>
</div>
</div>
</header>
{/*  Page Content Workspace  */}
<div className="flex-1 flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-surface-container-lowest">
{/*  Page Header Area  */}
<div className="px-margin-desktop py-lg border-b border-surface-variant bg-surface">
{/*  Breadcrumbs  */}
<nav className="flex text-label-md font-label-md text-on-surface-variant mb-md">
<ol className="flex items-center space-x-2 space-x-reverse">
<li><a href="#" className="hover:text-primary transition-colors">لوحة القيادة</a></li>
<li><span className="material-symbols-outlined text-[14px] mx-1">chevron_left</span></li>
<li><a href="#" className="hover:text-primary transition-colors">عمليات البيانات</a></li>
<li><span className="material-symbols-outlined text-[14px] mx-1">chevron_left</span></li>
<li className="text-on-surface font-semibold">معالجة OCR</li>
</ol>
</nav>
{/*  Title & Actions  */}
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-md">
<div>
<h2 className="text-headline-md font-headline-md text-on-surface mb-sm">معالجة المستندات الذكية (OCR)</h2>
<p className="text-body-md font-body-md text-on-surface-variant">مراجعة وتدقيق البيانات المستخرجة آلياً من المستندات الممسوحة ضوئياً.</p>
</div>
<div className="flex flex-wrap items-center gap-sm">
<button className="px-md py-2 border border-outline text-on-surface text-label-md font-label-md rounded-lg hover:bg-surface-container-low transition-colors">أرشفة</button>
<button className="px-md py-2 bg-surface-container text-on-surface text-label-md font-label-md rounded-lg hover:bg-surface-container-high transition-colors">إعادة معالجة</button>
<button className="px-md py-2 bg-primary-container text-on-primary text-label-md font-label-md rounded-lg hover:bg-primary transition-colors font-bold shadow-sm">اعتماد المستند</button>
</div>
</div>
</div>
{/*  Validation Summary Bar  */}
<div className="px-margin-desktop py-sm bg-surface-container-low border-b border-surface-variant flex flex-wrap items-center gap-lg text-body-md font-body-md text-on-surface">
<div className="flex items-center gap-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-semibold text-secondary-container bg-secondary-fixed px-2 py-1 rounded-md text-label-sm">قيد المراجعة</span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-sm">
<span className="text-on-surface-variant">دقة OCR:</span>
<span className="flex items-center text-primary-container font-semibold">
<span className="material-symbols-outlined text-[16px] ml-1">check_circle</span>
                        98.2%
                    </span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-sm">
<span className="text-on-surface-variant">الصفحات:</span>
<span className="font-semibold">1 / 1</span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-sm">
<span className="text-on-surface-variant">الرافع:</span>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed text-label-sm font-bold">أ.م</div>
<span className="font-medium">أحمد محمد</span>
</div>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex items-center gap-sm">
<span className="text-on-surface-variant">تاريخ الرفع:</span>
<span className="font-medium">15 أكتوبر 2023</span>
</div>
</div>
{/*  Split Workspace  */}
<div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-surface-container-lowest">
{/*  Left Panel: Document Previewer  */}
<div className="flex-1 border-b lg:border-b-0 lg:border-l border-surface-variant flex flex-col bg-inverse-surface relative overflow-hidden group">
{/*  Floating Controls  */}
<div className="absolute top-md left-md z-10 flex flex-col gap-sm bg-surface/10 backdrop-blur-md p-xs rounded-lg border border-outline-variant/20 shadow-lg opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
<button title="تكبير" className="p-2 text-surface hover:bg-surface/20 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
<button title="تصغير" className="p-2 text-surface hover:bg-surface/20 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_out</span>
</button>
<button title="تدوير" className="p-2 text-surface hover:bg-surface/20 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">rotate_right</span>
</button>
<button title="ملء الشاشة" className="p-2 text-surface hover:bg-surface/20 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]">fullscreen</span>
</button>
</div>
{/*  Document Image  */}
<div className="flex-1 p-lg flex items-center justify-center overflow-auto">
<div data-alt="A highly detailed corporate invoice document scanned in black and white. The document sits on a pristine, dark charcoal gray background workspace. The invoice has clear grids, numerical data, and a prominent vendor logo at the top left. The lighting is neutral and flat, typical of a high-quality scanner, emphasizing clarity and enterprise-level precision." className="bg-surface w-full max-w-2xl aspect-[1/1.4] shadow-2xl rounded-sm p-xl flex flex-col relative" style={{"backgroundImage":"url('https"}}>
{/*  Highlighting overlay simulating OCR detection  */}
<div className="absolute top-[20%] right-[10%] w-[30%] h-[3%] border-2 border-primary-container bg-primary-fixed/20 rounded-sm"></div>
<div className="absolute top-[25%] right-[10%] w-[25%] h-[3%] border-2 border-primary-container bg-primary-fixed/20 rounded-sm"></div>
{/*  Yellow highlight for low confidence  */}
<div className="absolute top-[15%] left-[10%] w-[20%] h-[4%] border-2 border-on-tertiary-container bg-tertiary-fixed-dim/40 rounded-sm shadow-[0_0_8px_rgba(255,153,57,0.5)]"></div>
</div>
</div>
</div>
{/*  Right Panel: Extracted Data Form  */}
<div className="w-full lg:w-[400px] xl:w-[480px] flex flex-col bg-surface overflow-y-auto">
<div className="p-lg">
<h3 className="text-title-lg font-title-lg text-on-surface mb-xl flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">data_object</span>
                            البيانات المستخرجة
                        </h3>
<form className="space-y-2xl">
{/*  Group 1: Invoice Info  */}
<section>
<h4 className="text-title-md font-title-md text-on-surface-variant mb-md pb-xs border-b border-outline-variant/30 flex items-center gap-sm">
                                    معلومات الفاتورة
                                </h4>
<div className="space-y-md">
{/*  Field: Low Confidence  */}
<div className="relative">
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">رقم الفاتورة</label>
<div className="flex items-center gap-1 text-label-sm text-on-tertiary-container">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                                                دقة 65%
                                            </div>
</div>
{/*  Highlighted Input  */}
<div className="relative">
<input type="text" value="INV-09827?3" className="w-full bg-surface border-2 border-on-tertiary-container/50 rounded-lg py-2 px-3 text-body-md text-on-surface focus:border-on-tertiary-container focus:ring-1 focus:ring-on-tertiary-container shadow-[0_0_0_4px_rgba(255,153,57,0.1)] outline-none transition-all" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-tertiary-container text-[18px]">warning</span>
</div>
<p className="mt-1 text-label-sm text-on-tertiary-container">يرجى التحقق من الرقم المظلل</p>
</div>
{/*  Field: High Confidence  */}
<div>
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">التاريخ</label>
<div className="flex items-center gap-1 text-label-sm text-primary-container">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                                دقة 99%
                                            </div>
</div>
<input type="date" value="2023-10-12" className="w-full bg-surface border border-outline-variant rounded-lg py-2 px-3 text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
</div>
</div>
</section>
{/*  Group 2: Vendor Info  */}
<section>
<h4 className="text-title-md font-title-md text-on-surface-variant mb-md pb-xs border-b border-outline-variant/30">
                                    بيانات المورد
                                </h4>
<div className="space-y-md">
<div>
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">اسم المورد</label>
<div className="flex items-center gap-1 text-label-sm text-primary-container">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                                دقة 98%
                                            </div>
</div>
<input type="text" value="شركة التقنية الحديثة ش.م.م" className="w-full bg-surface border border-outline-variant rounded-lg py-2 px-3 text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
</div>
<div>
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">الرقم الضريبي</label>
<div className="flex items-center gap-1 text-label-sm text-primary-container">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                                دقة 97%
                                            </div>
</div>
<input dir="ltr" type="text" value="300123456700003" className="w-full bg-surface border border-outline-variant rounded-lg py-2 px-3 text-body-md text-on-surface font-mono text-left focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
</div>
</div>
</section>
{/*  Group 3: Financials  */}
<section>
<h4 className="text-title-md font-title-md text-on-surface-variant mb-md pb-xs border-b border-outline-variant/30">
                                    القيم المالية
                                </h4>
<div className="grid grid-cols-2 gap-md">
<div>
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">المبلغ الإجمالي</label>
</div>
<div className="relative">
<input type="text" value="45,000.00" className="w-full bg-surface border border-outline-variant rounded-lg py-2 pl-10 pr-3 text-body-md text-on-surface font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-label-md">ر.س</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-xs">
<label className="text-label-md font-label-md text-on-surface">الضريبة (15%)</label>
</div>
<div className="relative">
<input type="text" value="6,750.00" className="w-full bg-surface border border-outline-variant rounded-lg py-2 pl-10 pr-3 text-body-md text-on-surface font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-label-md">ر.س</span>
</div>
</div>
</div>
</section>
</form>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default OCR;
  
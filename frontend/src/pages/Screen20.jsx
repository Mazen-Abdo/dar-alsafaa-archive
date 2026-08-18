import React from 'react';

const Screen20 = () => {
  return (
    <>
      <div className="">

{/*  Main Wrapper  */}
<div className="">

{/*  Content Area  */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-[1440px] mx-auto w-full">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">إعدادات النظام وسياسات الأرشيف</h2>
<p className="font-body-md text-body-md text-on-surface-variant">إدارة التكوينات العامة، وسياسات الاحتفاظ بالبيانات، وإعدادات الأمان الخاصة بالمنصة.</p>
</div>
<div className="flex gap-md shrink-0">
<button className="px-xl py-sm border border-outline text-primary font-title-md text-title-md rounded-lg hover:bg-surface-variant transition-colors">
                        إلغاء
                    </button>
<button className="px-xl py-sm bg-primary text-on-primary font-title-md text-title-md rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                        حفظ التغييرات
                    </button>
</div>
</div>
{/*  Tab Navigation  */}
<div className="border-b border-outline-variant mb-xl flex overflow-x-auto hide-scrollbar">
<button data-target="branding" onclick="switchTab('branding')" className="tab-btn px-lg py-md font-title-md text-title-md text-primary border-primary tab-active whitespace-nowrap transition-colors">
                    ملف الشركة والهوية
                </button>
<button data-target="retention" onclick="switchTab('retention')" className="tab-btn px-lg py-md font-title-md text-title-md text-on-surface-variant hover:text-primary border-transparent border-b-2 whitespace-nowrap transition-colors">
                    سياسات الأرشيف
                </button>
<button data-target="data" onclick="switchTab('data')" className="tab-btn px-lg py-md font-title-md text-title-md text-on-surface-variant hover:text-primary border-transparent border-b-2 whitespace-nowrap transition-colors">
                    معالجة البيانات
                </button>
<button data-target="security" onclick="switchTab('security')" className="tab-btn px-lg py-md font-title-md text-title-md text-on-surface-variant hover:text-primary border-transparent border-b-2 whitespace-nowrap transition-colors">
                    الأمان والتنبيهات
                </button>
</div>
{/*  Tab Contents  */}
<div className="relative">
{/*  Tab 1: Profile & Branding  */}
<div id="tab-branding" className="tab-content grid grid-cols-1 lg:grid-cols-3 gap-lg">
<div className="lg:col-span-2 space-y-lg">
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">domain</span>
                                معلومات الشركة الأساسية
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">اسم الشركة</label>
<input type="text" value="دار الصفاء للاستثمارات" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md text-body-md" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">رقم السجل التجاري</label>
<input dir="ltr" type="text" value="1010123456" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md text-body-md text-left" />
</div>
<div className="md:col-span-2">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">الرقم الضريبي (VAT)</label>
<input dir="ltr" type="text" value="300123456700003" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow font-body-md text-body-md text-left" />
</div>
</div>
</div>
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">palette</span>
                                ألوان العلامة التجارية
                            </h3>
<div className="flex items-center gap-lg">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">اللون الأساسي</label>
<div className="flex items-center gap-sm">
<input type="color" value="#064E3B" className="h-10 w-10 rounded cursor-pointer border-0 p-0 bg-transparent" />
<span dir="ltr" className="font-body-md text-body-md uppercase">#064E3B</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">اللون الثانوي</label>
<div className="flex items-center gap-sm">
<input type="color" value="#708cfd" className="h-10 w-10 rounded cursor-pointer border-0 p-0 bg-transparent" />
<span dir="ltr" className="font-body-md text-body-md uppercase">#708CFD</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-lg">
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">image</span>
                                الشعارات (Logos)
                            </h3>
<div className="mb-lg">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">الشعار العربي</label>
<div className="border-2 border-dashed border-outline-variant rounded-xl p-lg text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="h-20 flex items-center justify-center mb-sm">
<img alt="Arabic Logo Preview" data-alt="A sleek corporate logo written in Arabic typography on a clean white background, high resolution, minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXha84LeRgdoIFkZDbqICPukxA2xfwKZReQ5Wzx_72J5dwOFc6JDeWvTNpLqmBSUdy129Au0mMi7yuJ974p2_H-oyCpGxXHup2KUZ_7p3gZbtkgKiFedCulqvNeuz6rC8lGhKDmC00Y4DLaDI5UmSRueBZuleBlJOzVYbrtCjgOfyp26N4pHFs0sPb55DEvZ4qujUIVVd6S-lHu2P6hH1tSjdPFsa5t4DwgaiS5RDlHJIH5mYUpZ3lpw" className="max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
</div>
<span className="font-body-md text-body-md text-primary">تغيير الشعار</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">PNG, SVG (Max 2MB)</p>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">الشعار الإنجليزي</label>
<div className="border-2 border-dashed border-outline-variant rounded-xl p-lg text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="h-20 flex items-center justify-center mb-sm">
<span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors">cloud_upload</span>
</div>
<span className="font-body-md text-body-md text-primary">رفع الشعار</span>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">PNG, SVG (Max 2MB)</p>
</div>
</div>
</div>
</div>
</div>
{/*  Tab 2: Retention Policy  */}
<div id="tab-retention" className="tab-content hidden grid grid-cols-1 lg:grid-cols-2 gap-lg">
{/*  Left Column  */}
<div className="space-y-lg">
{/*  Trash Retention  */}
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<div className="flex justify-between items-start mb-lg">
<h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">delete_sweep</span>
                                    سلة المهملات
                                </h3>
<div className="group relative cursor-help">
<span className="material-symbols-outlined text-outline">info</span>
<div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-sm bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                                        الفترة التي تبقى فيها الملفات المحذوفة قبل إزالتها نهائياً
                                    </div>
</div>
</div>
<div className="mb-sm flex justify-between items-end">
<label className="font-label-md text-label-md text-on-surface-variant">فترة الاحتفاظ</label>
<span className="font-title-lg text-title-lg text-primary font-bold"><span id="trash-days-val">90</span> يوم</span>
</div>
<input max="365" min="7" oninput="document.getElementById('trash-days-val').textContent = this.value" type="range" value="90" className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" />
<div className="flex justify-between mt-xs font-label-sm text-label-sm text-outline-variant">
<span>7 أيام</span>
<span>365 يوم</span>
</div>
</div>
{/*  Auto Archiving  */}
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">cloud_download</span>
                                قواعد الأرشفة التلقائية
                            </h3>
<div className="space-y-md">
<label className="flex items-center justify-between p-md border border-outline-variant/50 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">أرشفة التقارير القديمة</span>
<span className="font-body-md text-body-md text-on-surface-variant">التقارير التي مر عليها أكثر من سنة</span>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-primary transition-colors">
<input checked="" type="checkbox" className="peer opacity-0 w-0 h-0" />
<span className="absolute right-[2px] top-[2px] bottom-[2px] w-5 rounded-full bg-white transition-transform transform translate-x-[-24px]"></span>
</div>
</label>
<label className="flex items-center justify-between p-md border border-outline-variant/50 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">أرشفة ملفات الإكسل المستوردة</span>
<span className="font-body-md text-body-md text-on-surface-variant">بعد معالجتها بنجاح</span>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-surface-container-highest transition-colors">
<input type="checkbox" className="peer opacity-0 w-0 h-0" />
<span className="absolute right-[2px] top-[2px] bottom-[2px] w-5 rounded-full bg-white transition-transform shadow-sm"></span>
</div>
</label>
</div>
</div>
</div>
{/*  Right Column: Storage  */}
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30 h-fit">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">cloud</span>
                            مساحة التخزين والحصص
                        </h3>
<div className="mb-xl">
<div className="flex justify-between items-end mb-sm">
<span className="font-label-md text-label-md text-on-surface-variant">الاستهلاك الحالي</span>
<span className="font-title-lg text-title-lg text-on-surface font-bold">42.5 GB / 50 GB</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-3 mb-xs overflow-hidden">
<div className="bg-tertiary-container h-3 rounded-full" style={{"width":"85%"}}></div>
</div>
<p className="font-label-sm text-label-sm text-tertiary-container flex items-center gap-xs">
<span className="material-symbols-outlined text-sm" style={{"fontSize":"14px"}}>warning</span>
                                تم استهلاك 85% من المساحة المتاحة
                            </p>
</div>
<div className="border-t border-outline-variant/50 pt-lg">
<label className="block font-title-md text-title-md text-on-surface mb-xs">تنبيه عند تجاوز المساحة</label>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">إرسال بريد إلكتروني للمسؤولين عند وصول الاستهلاك إلى النسبة المحددة.</p>
<div className="flex items-center gap-md">
<div className="relative w-32">
<input dir="ltr" max="99" min="50" type="number" value="85" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-left font-body-md text-body-md pr-8" />
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">%</span>
</div>
</div>
</div>
</div>
</div>
{/*  Tab 3: Data & OCR  */}
<div id="tab-data" className="tab-content hidden space-y-lg max-w-4xl">
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">document_scanner</span>
                            إعدادات التعرف الضوئي (OCR)
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">لغة المعالجة الافتراضية</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md text-body-md text-on-surface">
<option value="ar">العربية (Arabic)</option>
<option value="en">الإنجليزية (English)</option>
<option value="ar_en">العربية والإنجليزية</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs flex items-center gap-xs">
                                    نسبة الدقة المطلوبة (Confidence Score)
                                    <span title="إذا كانت دقة الاستخراج أقل من هذه النسبة، سيتم تحويل المستند للمراجعة اليدوية" className="material-symbols-outlined text-sm text-outline cursor-help">info</span>
</label>
<div className="flex items-center gap-md">
<input max="100" min="50" oninput="document.getElementById('ocr-score-val').textContent = this.value + '%'" type="range" value="90" className="flex-1 h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" />
<span dir="ltr" id="ocr-score-val" className="font-title-lg text-title-lg text-primary font-bold w-12 text-center">90%</span>
</div>
<p className="font-label-sm text-label-sm text-error mt-xs">تتطلب معالجة يدوية إذا كانت الدقة أقل</p>
</div>
</div>
</div>
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">upload_file</span>
                            حدود الاستيراد (Import Limits)
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">الحد الأقصى لحجم ملف Excel/CSV</label>
<div className="flex items-center gap-xs">
<input dir="ltr" type="number" value="25" className="w-32 bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary outline-none font-body-md text-body-md text-left" />
<span className="font-body-md text-body-md text-on-surface">ميجابايت (MB)</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">الحد الأقصى لعدد الصفوف لكل ملف</label>
<input dir="ltr" type="number" value="10000" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary outline-none font-body-md text-body-md text-left" />
</div>
</div>
</div>
</div>
{/*  Tab 4: Security  */}
<div id="tab-security" className="tab-content hidden grid grid-cols-1 lg:grid-cols-2 gap-lg">
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30 h-fit">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">security</span>
                            سياسات الوصول والأمان
                        </h3>
<div className="space-y-lg">
<div className="flex items-start justify-between">
<div>
<h4 className="font-title-md text-title-md text-on-surface mb-xs">فرض التحقق بخطوتين (2FA)</h4>
<p className="font-body-md text-body-md text-on-surface-variant">إلزام جميع المستخدمين في النظام بتفعيل المصادقة الثنائية عند تسجيل الدخول.</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-primary transition-colors shrink-0 mt-xs">
<input checked="" type="checkbox" className="peer opacity-0 w-0 h-0" />
<span className="absolute right-[2px] top-[2px] bottom-[2px] w-5 rounded-full bg-white transition-transform transform translate-x-[-24px]"></span>
</div>
</div>
<hr className="border-outline-variant/30" />
<div>
<label className="block font-title-md text-title-md text-on-surface mb-xs">مهلة انتهاء الجلسة (Session Timeout)</label>
<p className="font-body-md text-body-md text-on-surface-variant mb-sm">يتم تسجيل خروج المستخدم تلقائياً بعد فترة من الخمول.</p>
<div className="relative w-48">
<select dir="ltr" className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md text-body-md text-on-surface text-left">
<option value="15">15 Minutes</option>
<option selected="" value="30">30 Minutes</option>
<option value="60">1 Hour</option>
<option value="120">2 Hours</option>
</select>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">schedule</span>
</div>
</div>
</div>
</div>
<div className="glass-card shadow-sm rounded-xl p-lg border border-outline-variant/30 h-fit">
<h3 className="font-title-lg text-title-lg mb-lg text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">notifications_active</span>
                            مشغلات التنبيهات (Notification Triggers)
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">تحديد الأحداث التي ترسل إشعارات فورية لمديري النظام.</p>
<div className="space-y-sm">
<label className="flex items-center gap-md p-sm hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors">
<input checked="" type="checkbox" className="w-5 h-5 text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">فشل الاستيراد لمعالجة البيانات</span>
</label>
<label className="flex items-center gap-md p-sm hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors">
<input checked="" type="checkbox" className="w-5 h-5 text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">رفض التقارير بعد المراجعة</span>
</label>
<label className="flex items-center gap-md p-sm hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors">
<input type="checkbox" className="w-5 h-5 text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">تسجيل دخول من جهاز جديد</span>
</label>
<label className="flex items-center gap-md p-sm hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors">
<input type="checkbox" className="w-5 h-5 text-primary rounded border-outline-variant focus:ring-primary" />
<span className="font-body-md text-body-md text-on-surface">محاولات تسجيل دخول فاشلة متعددة</span>
</label>
</div>
</div>
</div>
</div>
</main>
</div>
<script dangerouslySetInnerHTML={{ __html: "\n        // Simple Tab Switching Logic\n        function switchTab(tabId) {\n            // Hide all tab contents\n            document.querySelectorAll('.tab-content').forEach(el => {\n                el.classList.add('hidden');\n            });\n            // Reset all buttons\n            document.querySelectorAll('.tab-btn').forEach(btn => {\n                btn.classList.remove('text-primary', 'border-primary', 'tab-active');\n                btn.classList.add('text-on-surface-variant', 'border-transparent');\n            });\n            \n            // Show selected content\n            document.getElementById('tab-' + tabId).classList.remove('hidden');\n            // Highlight selected button\n            const activeBtn = document.querySelector(`[data-target=\"${tabId}\"]`);\n            activeBtn.classList.remove('text-on-surface-variant', 'border-transparent');\n            activeBtn.classList.add('text-primary', 'border-primary', 'tab-active');\n        }\n        \n        // Simple Toggle switch visual logic for demo\n        document.querySelectorAll('input[type=\"checkbox\"]').forEach(checkbox => {\n            if(checkbox.parentElement.classList.contains('w-12')) {\n                checkbox.addEventListener('change', function() {\n                    const span = this.nextElementSibling;\n                    const container = this.parentElement;\n                    if(this.checked) {\n                        container.classList.remove('bg-surface-container-highest');\n                        container.classList.add('bg-primary');\n                        span.classList.add('translate-x-[-24px]');\n                    } else {\n                        container.classList.remove('bg-primary');\n                        container.classList.add('bg-surface-container-highest');\n                        span.classList.remove('translate-x-[-24px]');\n                    }\n                });\n            }\n        });\n    " }} />

</div>
    </>
  );
};

export default Screen20;

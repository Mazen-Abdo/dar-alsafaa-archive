import React from 'react';

const Screen10 = () => {
  return (
    <>
      <div className="">

{/*  Shared Component: SideNavBar  */}

{/*  Main Content Area  */}
<div className="">
{/*  Shared Component: TopNavBar  */}

{/*  Page Content Canvas  */}
<main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-margin-desktop py-xl gap-xl">
{/*  Breadcrumb  */}

{/*  Hero Section  */}
<section className="relative bg-surface rounded-2xl p-3xl overflow-hidden shadow-sm border border-outline-variant flex flex-col items-center text-center">
<div data-alt="Abstract minimal geometric background pattern featuring intersecting soft green curves and subtle mesh gradients, conveying a sense of organized data, enterprise technology, and modern digital assistance. Clean, light mode aesthetic." className="absolute inset-0 opacity-10 pointer-events-none" style={{"backgroundImage":"url('https"}}></div>
<div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-lg">
<div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-2">
<span className="material-symbols-outlined text-4xl">contact_support</span>
</div>
<h2 className="font-display-sm text-display-sm text-on-surface">كيف يمكننا مساعدتك اليوم؟</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">ابحث في قاعدة المعرفة، اقرأ الأدلة، أو تواصل مع فريق الدعم الفني الخاص بنا.</p>
<div className="relative w-full mt-4">
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xl">search</span>
<input placeholder="أدخل كلمتك البحثية هنا... (مثال: الأرشفة الإلكترونية، صلاحيات المستخدم)" type="text" className="w-full pl-6 pr-12 py-4 rounded-xl border border-outline-variant bg-surface-container-lowest text-title-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition-all text-on-surface" />
<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-on-primary px-6 py-2 rounded-lg font-title-md text-title-md hover:bg-primary/90 transition-colors">بحث</button>
</div>
</div>
</section>
{/*  Grid Layout for Sub-sections  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/*  Left Column (Main Content) - RTL so it's technically Right visually  */}
<div className="lg:col-span-7 flex flex-col gap-xl">
{/*  Section 1: FAQs Accordion  */}
<section className="flex flex-col gap-md">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">forum</span>
                            الأسئلة الشائعة
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">إجابات سريعة للأسئلة الأكثر تكراراً حول النظام.</p>
<div className="flex flex-col gap-3">
{/*  Accordion Item 1  */}
<details className="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-lg cursor-pointer font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors">
                                    كيف يعمل نظام التعرف الضوئي على الحروف (OCR)؟
                                    <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-lg pt-0 text-body-lg font-body-lg text-on-surface-variant border-t border-outline-variant/30 mt-2">
                                    يقوم نظام OCR في دار الصفاء بتحليل المستندات الممسوحة ضوئياً وتحويلها إلى نص قابل للبحث والتعديل. يدعم النظام اللغة العربية بدقة عالية، مما يسهل عملية الأرشفة واسترجاع المعلومات من العقود والمستندات الرسمية.
                                </div>
</details>
{/*  Accordion Item 2  */}
<details className="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-lg cursor-pointer font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors">
                                    كيف يمكنني إضافة مستخدم جديد وتحديد صلاحياته؟
                                    <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-lg pt-0 text-body-lg font-body-lg text-on-surface-variant border-t border-outline-variant/30 mt-2">
                                    من خلال قسم "المستخدمين" في القائمة الجانبية، انقر على "إضافة مستخدم". أدخل البيانات المطلوبة، ثم من قسم الصلاحيات يمكنك تحديد ما إذا كان المستخدم (مدير، مدخل بيانات، أو مشاهد فقط) لكل وحدة من وحدات النظام.
                                </div>
</details>
{/*  Accordion Item 3  */}
<details className="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden group">
<summary className="flex justify-between items-center p-lg cursor-pointer font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors">
                                    ما هي الصيغ المدعومة لرفع الملفات إلى الأرشيف؟
                                    <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-lg pt-0 text-body-lg font-body-lg text-on-surface-variant border-t border-outline-variant/30 mt-2">
                                    يدعم النظام رفع الملفات بصيغ PDF, DOCX, XLSX للوثائق النصية والجداول، بالإضافة إلى صيغ الصور القياسية (JPG, PNG, TIFF) لعمليات المسح الضوئي المباشرة.
                                </div>
</details>
</div>
<button className="text-primary font-title-md text-title-md hover:underline self-start mt-2">عرض جميع الأسئلة الشائعة</button>
</section>
{/*  Section 2: User Guides Grid  */}
<section className="flex flex-col gap-md mt-lg">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">menu_book</span>
                            أدلة الاستخدام
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Guide Card 1  */}
<a href="#" className="bg-surface border border-outline-variant rounded-xl p-lg flex items-start gap-4 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">picture_as_pdf</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">دليل الأرشفة الشامل</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">تعرف على خطوات أرشفة المستندات وربطها بالأصول في النظام.</p>
</div>
</a>
{/*  Guide Card 2  */}
<a href="#" className="bg-surface border border-outline-variant rounded-xl p-lg flex items-start gap-4 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">play_circle</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">شرح نظام الـ OCR (فيديو)</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">فيديو توضيحي لكيفية استخراج النصوص من العقود المصورة تلقائياً.</p>
</div>
</a>
{/*  Guide Card 3  */}
<a href="#" className="bg-surface border border-outline-variant rounded-xl p-lg flex items-start gap-4 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">picture_as_pdf</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">إدارة الأصول الثابتة</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">دليل مبسط لإضافة، جرد، وتتبع الأصول داخل المنشأة.</p>
</div>
</a>
{/*  Guide Card 4  */}
<a href="#" className="bg-surface border border-outline-variant rounded-xl p-lg flex items-start gap-4 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">article</span>
</div>
<div className="flex flex-col gap-1">
<h4 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">صلاحيات المستخدمين</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">مقال تفصيلي حول هيكلة الصلاحيات وإدارة الوصول.</p>
</div>
</a>
</div>
</section>
</div>
{/*  Right Column (Sticky Form) - RTL so visually Left  */}
<div className="lg:col-span-5">
{/*  Section 3: Support Ticket Form  */}
<div className="bg-surface border border-outline-variant rounded-2xl shadow-sm p-xl sticky top-24 flex flex-col gap-lg">
<div className="flex items-center gap-3 border-b border-outline-variant/50 pb-4">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">فتح تذكرة دعم</h3>
<p className="font-label-md text-label-md text-on-surface-variant">فريقنا جاهز لمساعدتك في أي وقت.</p>
</div>
</div>
<form className="flex flex-col gap-4 mt-2">
<div className="flex flex-col gap-2">
<label className="font-title-md text-title-md text-on-surface">عنوان التذكرة <span className="text-error">*</span></label>
<input placeholder="اكتب وصفاً موجزاً للمشكلة" type="text" className="w-full p-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
</div>
<div className="flex flex-col gap-2">
<label className="font-title-md text-title-md text-on-surface">التصنيف <span className="text-error">*</span></label>
<div className="relative">
<select className="w-full p-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none pr-3 pl-10">
<option disabled="" selected="" value="">اختر تصنيف المشكلة</option>
<option value="ocr">مشكلة في قراءة النصوص (OCR)</option>
<option value="archive">صعوبة في رفع المرفقات/الأرشفة</option>
<option value="assets">مشكلة في جرد الأصول</option>
<option value="users">استفسار عن الصلاحيات</option>
<option value="other">أخرى</option>
</select>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-title-md text-title-md text-on-surface">وصف المشكلة <span className="text-error">*</span></label>
<textarea placeholder="يرجى كتابة تفاصيل المشكلة أو الاستفسار هنا..." rows="4" className="w-full p-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
</div>
<div className="flex flex-col gap-2">
<label className="font-title-md text-title-md text-on-surface">إرفاق ملف (اختياري)</label>
<div className="border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-surface-container-low hover:border-primary transition-all cursor-pointer group">
<span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary mb-2">cloud_upload</span>
<p className="font-body-md text-body-md text-on-surface-variant">اسحب وأفلت الملف هنا، أو <span className="text-primary font-medium">استعرض ملفاتك</span></p>
<p className="font-label-sm text-label-sm text-on-surface-variant/70 mt-1">الحد الأقصى 10MB (JPG, PNG, PDF)</p>
</div>
</div>
<button type="button" className="mt-4 w-full bg-primary text-on-primary py-3 rounded-lg font-title-md text-title-md hover:bg-primary-container transition-colors shadow-sm">
                                إرسال التذكرة
                            </button>
</form>
</div>
</div>
</div>
</main>
{/*  Shared Component: Footer  */}
<footer className="bg-surface-container-low dark:bg-inverse-surface border-t border-outline-variant w-full py-md px-margin-desktop mt-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-title-md text-title-md text-secondary">
<span className="font-bold">دار الصفاء</span>
</div>
<div className="font-label-md text-label-md text-primary dark:text-on-primary-container">
                © 2024 نظام دار الصفاء الذكي. جميع الحقوق محفوظة.
            </div>
<div className="flex items-center gap-6">
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">الشروط والأحكام</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">سياسة الخصوصية</a>
<a href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity duration-200">اتصل بنا</a>
</div>
</footer>
</div>

</div>
    </>
  );
};

export default Screen10;


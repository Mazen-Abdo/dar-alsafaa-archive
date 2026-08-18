import React from 'react';

const Screen21 = () => {
  return (
    <>
      <div className="">

{/*  Main Content Wrapper  */}
<div id="main-content" className="">

{/*  Main Scrollable Canvas  */}
<main className="flex-1 overflow-y-auto p-gutter hide-scrollbar relative">
{/*  Page Header Section  */}
<div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
{/*  Breadcrumbs  */}

<h2 className="font-headline-lg text-headline-lg text-on-surface">سجل الرقابة والتدقيق الشامل</h2>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface px-4 py-2.5 rounded-lg font-label-md hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">print</span>
                        طباعة
                    </button>
<button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">download</span>
                        تصدير سجل التدقيق (PDF/Excel)
                    </button>
</div>
</div>
{/*  KPI Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{/*  Card 1: Total Logged Events  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">database</span>
</div>
<span className="flex items-center text-primary text-label-md bg-primary-container/5 px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm ml-1">trending_up</span>
                            +12%
                        </span>
</div>
<div>
<p className="text-on-surface-variant font-label-md mb-1">إجمالي الأحداث المسجلة</p>
<h3 className="font-display-sm text-display-sm text-on-surface">14,280</h3>
</div>
</div>
{/*  Card 2: Security Warnings (Yellow Theme)  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between border-b-4 border-b-on-tertiary-container hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-[#ff9939]/10 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined">warning</span>
</div>
</div>
<div>
<p className="text-on-surface-variant font-label-md mb-1">تنبيهات أمنية</p>
<h3 className="font-display-sm text-display-sm text-on-surface">42</h3>
</div>
</div>
{/*  Card 3: Failed Login Attempts (Red Theme)  */}
<div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between border-b-4 border-b-error hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined">gpp_maybe</span>
</div>
<span className="flex items-center text-error text-label-md bg-error-container/50 px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm ml-1">trending_down</span>
                            -5%
                        </span>
</div>
<div>
<p className="text-on-surface-variant font-label-md mb-1">محاولات دخول فاشلة</p>
<h3 className="font-display-sm text-display-sm text-on-surface">18</h3>
</div>
</div>
{/*  Card 4: Critical System Changes  */}
<div className="bg-primary text-on-primary rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-shadow relative overflow-hidden">
{/*  Subtle background decoration  */}
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 0% 0%, #ffffff 0%, transparent 50%)"}}></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-on-primary/20 flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined">admin_panel_settings</span>
</div>
</div>
<div className="relative z-10">
<p className="text-primary-fixed-dim font-label-md mb-1">تغييرات الصلاحيات والحذف</p>
<h3 className="font-display-sm text-display-sm">12</h3>
</div>
</div>
</div>
{/*  Complex Filter Bar (Glassmorphism/Surface)  */}
<div className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/40 rounded-xl p-4 mb-6 shadow-sm sticky top-0 z-10">
<div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
{/*  Search Input  */}
<div className="flex-1 min-w-[200px] relative">
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
<input placeholder="بحث بالمستخدم، IP، أو الإجراء..." type="text" className="w-full bg-surface pl-4 pr-10 py-2 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-body-md transition-shadow" />
</div>
{/*  Date Range  */}
<div className="relative min-w-[220px]">
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px]">date_range</span>
<input placeholder="من تاريخ - إلى تاريخ" readonly="" type="text" value="01 نوفمبر - 07 نوفمبر 2023" className="w-full bg-surface pl-4 pr-10 py-2 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-body-md text-center transition-shadow cursor-pointer" />
</div>
{/*  Event Category Dropdown  */}
<div className="min-w-[160px]">
<select className="w-full bg-surface px-4 py-2 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-body-md appearance-none cursor-pointer">
<option value="">جميع الإجراءات</option>
<option value="login">تسجيل دخول</option>
<option value="perms">تغيير صلاحيات</option>
<option value="import">استيراد بيانات</option>
<option value="ocr">معالجة OCR</option>
<option value="delete">أرشفة/حذف</option>
<option value="settings">تعديل إعدادات</option>
</select>
</div>
{/*  Severity Dropdown  */}
<div className="min-w-[140px]">
<select className="w-full bg-surface px-4 py-2 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-body-md appearance-none cursor-pointer">
<option value="">الخطورة: الكل</option>
<option value="info">معلومة</option>
<option value="warning">تحذير</option>
<option value="critical">حرج</option>
</select>
</div>
{/*  Sector Dropdown  */}
<div className="min-w-[140px]">
<select className="w-full bg-surface px-4 py-2 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-body-md appearance-none cursor-pointer">
<option value="">القطاع/الفرع</option>
<option value="riyadh">الإدارة العامة - الرياض</option>
<option value="jeddah">فرع جدة</option>
<option value="dammam">فرع الدمام</option>
</select>
</div>
<button title="تصفية متقدمة" className="p-2 bg-surface border border-outline-variant/50 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors tooltip">
<span className="material-symbols-outlined">tune</span>
</button>
</div>
</div>
{/*  Main Data Table  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden mb-8">
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead className="bg-surface-container-low text-on-surface-variant font-label-md border-b border-outline-variant/30 sticky top-0">
<tr>
<th className="py-3 px-4 font-semibold whitespace-nowrap">التاريخ والوقت</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">المستخدم</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">نوع الإجراء</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">القطاع والفرع</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">المورد المستهدف</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">عنوان IP والجهاز</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap">درجة الخطورة</th>
<th className="py-3 px-4 font-semibold whitespace-nowrap text-center">التفاصيل</th>
</tr>
</thead>
<tbody className="text-body-md divide-y divide-outline-variant/20">
{/*  Row 1 (Active/Selected State representing the open drawer)  */}
<tr onclick="openDrawer()" className="hover:bg-surface-container-low/50 transition-colors bg-primary-container/5 border-l-4 border-l-primary cursor-pointer">
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-on-surface font-medium">07 نوفمبر 2023</span>
<span className="text-on-surface-variant text-label-sm">14:32:45 AST</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img data-alt="A small, professional avatar photo of a corporate user, male, wearing formal business attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACLRyBzQbtEF1e4gBOinkjW3iYVunR27ty8AqMqASrfHwxKygFdhfF5-HXOz01Fp7J0hGKJ_R7mhzMWTDYJpaObrg48TdKgu4l3vs3NjN3-YZylS7az5pHDyM3_nx2-ZrbYMOWJ9y8iNf2bjhiyxgEaS7dVDZvqWQa-Xl52W11XvnYAlHOme0cafMs9HVuPt8YUWEbIShbi3CgJoh6cLzSnsXNlNYST3J7q6XZzH64dNvV02JvAw7U9A" className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" />
<div className="flex flex-col">
<span className="text-on-surface font-medium">أحمد عبدالله</span>
<span className="text-on-surface-variant text-label-sm">مدير النظام (Admin)</span>
</div>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
<span className="material-symbols-outlined text-[14px]">manage_accounts</span>
                                        تعديل صلاحيات
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-on-surface">الإدارة العامة</td>
<td className="py-3 px-4 whitespace-nowrap font-mono text-sm text-primary">UserRole_Policy_v2</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="font-mono text-sm">192.168.1.105</span>
<span className="text-on-surface-variant text-label-sm">Windows / Chrome</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-label-md bg-error-container text-on-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        حرج
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-center">
<button className="p-1.5 rounded-md text-primary hover:bg-primary-container/20 transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr onclick="openDrawer()" className="hover:bg-surface-container-low/50 transition-colors cursor-pointer">
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-on-surface font-medium">07 نوفمبر 2023</span>
<span className="text-on-surface-variant text-label-sm">13:15:22 AST</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img data-alt="A small, professional avatar photo of a corporate user, female, wearing professional attire including a hijab." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDomXv9rDK_JMtUejjXdElEBdlClTjlp-x-Ba87q-uhYgLf9hN-KIFd0OVqwHnDD6Y2XlZlLvnocUtwpLrrFN_Y6QjVzPgoCSwf-23yiC3httS4QnVyJMAVWx83BBai7uEQ3dCJZyVg4STmGfQz4_9m-AonK0Ynq0YPf4kHJd3oIee6NXuU2AbUFyUvabkDpKgiSomPDik4Ffvo8PWEMk6qQPZUAa4X0t50LpaDfW0d6e3atkP-7zB8xQ" className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" />
<div className="flex flex-col">
<span className="text-on-surface font-medium">سارة محمد</span>
<span className="text-on-surface-variant text-label-sm">محلل بيانات (Analyst)</span>
</div>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
<span className="material-symbols-outlined text-[14px]">cloud_upload</span>
                                        استيراد بيانات
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-on-surface">فرع جدة</td>
<td className="py-3 px-4 whitespace-nowrap font-mono text-sm text-primary">Financial_Q3.csv</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="font-mono text-sm">10.0.4.52</span>
<span className="text-on-surface-variant text-label-sm">macOS / Safari</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-label-md bg-surface-container-highest text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        معلومة
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-center">
<button className="p-1.5 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr onclick="openDrawer()" className="hover:bg-surface-container-low/50 transition-colors cursor-pointer">
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-on-surface font-medium">07 نوفمبر 2023</span>
<span className="text-on-surface-variant text-label-sm">11:04:10 AST</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface font-bold text-sm border border-outline-variant/30">
                                            SK
                                        </div>
<div className="flex flex-col">
<span className="text-on-surface font-medium">System Kernel</span>
<span className="text-on-surface-variant text-label-sm">Automated Task</span>
</div>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
<span className="material-symbols-outlined text-[14px]">auto_delete</span>
                                        أرشفة تلقائية
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-on-surface">الخوادم المركزية</td>
<td className="py-3 px-4 whitespace-nowrap font-mono text-sm text-primary">Old_Logs_2022</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="font-mono text-sm">localhost</span>
<span className="text-on-surface-variant text-label-sm">Linux / Cron</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-label-md bg-[#ff9939]/20 text-on-tertiary-container">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff9939]"></span>
                                        تحذير
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-center">
<button className="p-1.5 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr onclick="openDrawer()" className="hover:bg-surface-container-low/50 transition-colors cursor-pointer">
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-on-surface font-medium">07 نوفمبر 2023</span>
<span className="text-on-surface-variant text-label-sm">09:45:00 AST</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold text-sm border border-outline-variant/30">
                                            UK
                                        </div>
<div className="flex flex-col">
<span className="text-on-surface font-medium">مستخدم مجهول</span>
<span className="text-error text-label-sm">Unauthenticated</span>
</div>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
<span className="material-symbols-outlined text-[14px]">login</span>
                                        محاولة دخول فاشلة
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-on-surface">بوابة الموظفين</td>
<td className="py-3 px-4 whitespace-nowrap font-mono text-sm text-primary">Auth_Service</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="flex flex-col">
<span className="font-mono text-sm text-error">185.12.x.x</span>
<span className="text-on-surface-variant text-label-sm">Unknown / Python</span>
</div>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-label-md bg-error-container text-on-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        حرج
                                    </span>
</td>
<td className="py-3 px-4 whitespace-nowrap text-center">
<button className="p-1.5 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="px-4 py-3 border-t border-outline-variant/30 bg-surface flex items-center justify-between">
<span className="text-on-surface-variant text-label-md">عرض 1 إلى 4 من أصل 14,280 سجل</span>
<div className="flex gap-1">
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container border border-transparent disabled:opacity-50">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
<button className="w-8 h-8 rounded flex items-center justify-center bg-primary text-on-primary font-medium text-sm">1</button>
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-container border border-outline-variant/30 font-medium text-sm">2</button>
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-container border border-outline-variant/30 font-medium text-sm">3</button>
<span className="w-8 h-8 flex items-center justify-center text-on-surface-variant text-sm">...</span>
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container border border-transparent">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
</div>
</div>
</div>
</main>
{/*  Side Drawer (Event Details - Active State)  */}
{/*  Overlay  */}
<div id="drawer-overlay" onclick="closeDrawer()" className="absolute inset-0 bg-on-background/20 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
{/*  Drawer Panel  */}
<div id="detail-drawer" className="absolute left-0 top-0 h-full w-[450px] bg-surface border-r border-outline-variant/30 shadow-[-8px_0_24px_rgba(0,0,0,0.1)] z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
{/*  Drawer Header  */}
<div className="px-6 py-5 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">تفاصيل الحدث</h3>
<p className="text-label-md text-on-surface-variant font-mono mt-0.5">ID: EVT-8942-XQ-2023</p>
</div>
</div>
<button onclick="closeDrawer()" className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/*  Drawer Content (Scrollable)  */}
<div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
{/*  Quick Summary Badges  */}
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-md border border-error/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                        خطورة حرجة
                    </span>
<span className="px-3 py-1 bg-surface-container text-on-surface rounded-full font-label-md border border-outline-variant/30">
                        تعديل صلاحيات
                    </span>
<span className="px-3 py-1 bg-surface-container text-on-surface rounded-full font-label-md border border-outline-variant/30 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                        07 نوفمبر 2023, 14:32:45
                    </span>
</div>
{/*  Actor Info (Bento Card)  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-4 shadow-sm">
<h4 className="text-label-md font-bold text-on-surface-variant mb-3 border-b border-outline-variant/20 pb-2">معلومات المنفذ</h4>
<div className="flex items-center gap-4">
<img data-alt="A small, professional avatar photo of a corporate user, male, wearing formal business attire." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2Rwxs2eURUmP77CXqQfNuNOL2KIQJdzILFm9ioNzMn9AhxiG32CLk1vrZ9wZhHlO7PZml8bNSB0XwDyqAUlOGq8NXkbS8y5wkcRVWbVNtdZSVdj_WWTYSdHfZqjOVTVtwjaTlfIi3hlrT51uvFoHUh-88nsyeKgHU5gXN0uRGILmfBko1l18xjtJZyhHMtB3dNgq4OC1aMMS40RW1bKMzfis7AKiQLEFrFV_WQipMhiDTaLNMY2kcQ" className="w-12 h-12 rounded-full object-cover border border-outline-variant/30" />
<div>
<p className="font-medium text-on-surface text-body-lg">أحمد عبدالله</p>
<p className="text-label-md text-on-surface-variant">a.abdullah@daralsafaa.com</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 text-sm">
<div>
<p className="text-label-sm text-on-surface-variant mb-1">المنصب / الدور</p>
<p className="font-medium text-on-surface">مدير النظام (Admin)</p>
</div>
<div>
<p className="text-label-sm text-on-surface-variant mb-1">القطاع</p>
<p className="font-medium text-on-surface">الإدارة العامة - تقنية المعلومات</p>
</div>
</div>
</div>
{/*  Network & Metadata (Bento Card)  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-4 shadow-sm">
<h4 className="text-label-md font-bold text-on-surface-variant mb-3 border-b border-outline-variant/20 pb-2">البيانات الفنية والشبكية</h4>
<ul className="space-y-3">
<li className="flex justify-between items-center">
<span className="text-label-sm text-on-surface-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">wifi</span> عنوان IP</span>
<span className="font-mono text-sm text-on-surface bg-surface px-2 py-0.5 rounded border border-outline-variant/20">192.168.1.105</span>
</li>
<li className="flex justify-between items-center">
<span className="text-label-sm text-on-surface-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">location_on</span> الموقع الجغرافي</span>
<span className="text-sm text-on-surface">الرياض، السعودية (Internal)</span>
</li>
<li className="flex justify-between items-center">
<span className="text-label-sm text-on-surface-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">devices</span> الجهاز والمتصفح</span>
<span className="text-sm text-on-surface">Windows 11 / Chrome 119</span>
</li>
<li className="flex justify-between items-center">
<span className="text-label-sm text-on-surface-variant flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">fingerprint</span> التوقيع الأمني</span>
<span title="SHA-256: 8f4e3c2b1a..." className="font-mono text-xs text-on-surface-variant truncate w-32">8f4e3c2b1a...</span>
</li>
</ul>
</div>
{/*  Data Diff Section (Before / After)  */}
<div>
<h4 className="text-label-md font-bold text-on-surface-variant mb-2">تفاصيل التغيير (Data Diff)</h4>
<p className="text-label-sm text-on-surface-variant mb-3">المورد: <span className="font-mono text-primary bg-primary-container/10 px-1 rounded">UserRole_Policy_v2</span></p>
<div className="border border-outline-variant/40 rounded-xl overflow-hidden font-mono text-sm bg-surface-container-lowest">
{/*  Before (Removed)  */}
<div className="p-3 diff-removed border-b border-outline-variant/20">
<div className="text-xs font-bold mb-1 uppercase tracking-wider opacity-70">القيمة السابقة (Before)</div>
<code>
                                &#123;<br />
                                &nbsp;&nbsp;"role": "Financial_Analyst",<br />
                                &nbsp;&nbsp;"permissions": ["read_reports", "export_csv"]<br />
                                &#125;
                            </code>
</div>
{/*  After (Added)  */}
<div className="p-3 diff-added">
<div className="text-xs font-bold mb-1 uppercase tracking-wider opacity-70">القيمة الجديدة (After)</div>
<code>
                                &#123;<br />
                                &nbsp;&nbsp;"role": "Financial_Analyst",<br />
                                &nbsp;&nbsp;"permissions": ["read_reports", "export_csv", <strong>"approve_transfers"</strong>]<br />
                                &#125;
                            </code>
</div>
</div>
</div>
</div>
{/*  Drawer Footer / Actions  */}
<div className="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-low flex gap-3">
<button className="flex-1 bg-surface border border-outline-variant text-on-surface py-2.5 rounded-lg font-label-md hover:bg-surface-container transition-colors shadow-sm text-center">
                    طباعة السجل
                </button>
<button className="flex-1 bg-error text-on-error py-2.5 rounded-lg font-label-md hover:bg-[#93000A] transition-colors shadow-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">flag</span>
                    تحديد للتحقيق
                </button>
</div>
</div>
</div>
{/*  Minimal script for drawer toggle  */}
<script dangerouslySetInnerHTML={{ __html: "\n        function openDrawer() {\n            document.getElementById('detail-drawer').classList.remove('-translate-x-full');\n            document.getElementById('drawer-overlay').classList.remove('hidden', 'opacity-0');\n            document.getElementById('drawer-overlay').classList.add('opacity-100');\n        }\n\n        function closeDrawer() {\n            document.getElementById('detail-drawer').classList.add('-translate-x-full');\n            document.getElementById('drawer-overlay').classList.add('opacity-0');\n            setTimeout(() => {\n                document.getElementById('drawer-overlay').classList.add('hidden');\n            }, 300);\n        }\n        \n        // Ensure drawer is open on load for demonstration based on prompt\n        document.addEventListener('DOMContentLoaded', (event) => {\n             // Drawer starts visible in this mock based on \"Active state\" requirement\n        });\n    " }} />

</div>
    </>
  );
};

export default Screen21;


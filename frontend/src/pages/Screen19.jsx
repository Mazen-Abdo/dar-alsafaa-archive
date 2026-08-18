import React from 'react';

const Screen19 = () => {
  return (
    <>
      <div className="">

{/*  Language Switcher & Corner Brand  */}
<div className="absolute top-margin-desktop left-margin-desktop flex items-center gap-md z-50">
<button className="flex items-center gap-sm px-md py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[18px]">language</span>
<span>English</span>
</button>
</div>
<div className="absolute top-margin-desktop right-margin-desktop flex items-center gap-md z-50">
{/*  Empty for balance or potential secondary actions  */}
</div>
{/*  Main Layout Container (Split on Desktop, Stacked on Mobile)  */}
<div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center justify-center gap-2xl lg:gap-3xl h-full py-xl lg:py-0">
{/*  Left Side: Branding & Decorative Visuals (Hidden on smaller screens)  */}
<div className="hidden lg:flex flex-col justify-center w-1/2 max-w-lg h-[600px] relative">
<div className="absolute inset-0 bg-primary/5 rounded-[32px] transform -rotate-3 transition-transform duration-700 ease-out hover:rotate-0"></div>
<div className="relative bg-surface-container-lowest rounded-[32px] p-2xl h-full flex flex-col justify-between login-glow border border-outline-variant/30 overflow-hidden">
{/*  Decorative Graphic  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100%] opacity-50"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-container text-on-primary-container mb-lg shadow-sm">
<span className="material-symbols-outlined text-[32px]">apartment</span>
</div>
<h1 className="font-display-sm text-display-sm text-on-surface mb-md tracking-tight">
                        إدارة مؤسسية <br /><span className="text-primary">برؤية مستقبلية.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm leading-relaxed">
                        بوابة الدخول الذكية لنظام دار الصفاء. تتيح لك الوصول الآمن والسريع لإدارة فروعك وعملياتك بفعالية مطلقة.
                    </p>
</div>
{/*  Abstract Data Vis / Trust Signals  */}
<div className="relative z-10 space-y-md mt-xl">
<div className="flex items-center gap-md bg-surface p-md rounded-lg border border-outline-variant/50">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>admin_panel_settings</span>
<div className="flex-1">
<div className="h-2 bg-surface-container-high rounded-full w-full overflow-hidden">
<div className="h-full bg-primary w-3/4 rounded-full"></div>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">محمي</span>
</div>
<div className="flex items-center gap-md bg-surface p-md rounded-lg border border-outline-variant/50">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>speed</span>
<div className="flex-1">
<div className="h-2 bg-surface-container-high rounded-full w-full overflow-hidden">
<div className="h-full bg-secondary w-full rounded-full"></div>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">مستقر</span>
</div>
</div>
</div>
</div>
{/*  Right Side: Login Form  */}
<div className="w-full max-w-md bg-surface-container-lowest rounded-[24px] p-xl lg:p-2xl login-glow border border-outline-variant/40 relative z-10">
{/*  Mobile Logo (Visible only on mobile)  */}
<div className="lg:hidden flex items-center gap-sm mb-lg">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
<span className="material-symbols-outlined">apartment</span>
</div>
<span className="font-headline-md text-headline-md font-bold text-primary">دار الصفاء</span>
</div>
{/*  Form Header  */}
<div className="mb-xl">
<h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-sm">تسجيل الدخول</h2>
<p className="font-body-md text-body-md text-on-surface-variant">مرحباً بك مجدداً في نظام دار الصفاء الذكي.</p>
</div>
<form className="space-y-lg">
{/*  Username / Email Field  */}
<div className="space-y-sm">
<label className="block font-title-md text-title-md text-on-surface" htmlFor="username">اسم المستخدم أو البريد الإلكتروني</label>
<div className="relative flex items-center border border-outline-variant rounded-xl bg-surface transition-all duration-200 input-focus-ring overflow-hidden">
<div className="pl-4 pr-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
</div>
<input dir="rtl" id="username" name="username" placeholder="أدخل اسم المستخدم" type="text" className="block w-full border-0 bg-transparent py-3 pl-3 pr-0 text-on-surface focus:ring-0 font-body-lg placeholder:text-outline" />
</div>
</div>
{/*  Password Field  */}
<div className="space-y-sm">
<label className="block font-title-md text-title-md text-on-surface" htmlFor="password">كلمة المرور</label>
<div className="relative flex items-center border border-outline-variant rounded-xl bg-surface transition-all duration-200 input-focus-ring overflow-hidden">
<div className="pl-4 pr-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined">lock</span>
</div>
<input dir="rtl" id="password" name="password" placeholder="••••••••" type="password" className="block w-full border-0 bg-transparent py-3 pl-3 pr-0 text-on-surface focus:ring-0 font-body-lg placeholder:text-outline" />
<button aria-label="Toggle password visibility" type="button" className="px-4 text-on-surface-variant hover:text-primary transition-colors focus:outline-none">
<span className="material-symbols-outlined">visibility_off</span>
</button>
</div>
</div>
{/*  Remember Me & Forgot Password  */}
<div className="flex items-center justify-between pt-sm">
<label className="flex items-center gap-sm cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 border border-outline rounded bg-surface group-hover:border-primary transition-colors">
<input type="checkbox" className="peer sr-only" />
<span className="material-symbols-outlined text-[16px] text-white opacity-0 peer-checked:opacity-100 peer-checked:bg-primary absolute inset-0 rounded flex items-center justify-center transition-all duration-200">check</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface transition-colors">تذكرني</span>
</label>
<a href="#" className="font-label-md text-label-md text-primary hover:text-primary-container font-medium hover:underline transition-all">
                        نسيت كلمة المرور؟
                    </a>
</div>
{/*  Submit Button  */}
<div className="pt-md">
<button type="button" className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-3 px-6 rounded-xl font-title-lg text-title-lg hover:bg-[#002a1f] transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md">
<span>تسجيل الدخول</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</form>
{/*  Enterprise Badge  */}
<div className="mt-xl pt-lg border-t border-outline-variant/40 flex items-center justify-center gap-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>shield</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Encrypted SSO Ready</span>
</div>
</div>
</div>
<script dangerouslySetInnerHTML={{ __html: "\n        // Simple password toggle interaction\n        document.addEventListener('DOMContentLoaded', () => {\n            const passwordInput = document.getElementById('password');\n            const toggleBtn = passwordInput.nextElementSibling;\n            const icon = toggleBtn.querySelector('span');\n\n            toggleBtn.addEventListener('click', () => {\n                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';\n                passwordInput.setAttribute('type', type);\n                icon.textContent = type === 'password' ? 'visibility_off' : 'visibility';\n            });\n        });\n    " }} />

</div>
    </>
  );
};

export default Screen19;

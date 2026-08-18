import React from 'react';

const Screen1 = () => {
  return (
    <>
      <div className="">

{/*  Background Ambient Elements  */}
<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-fixed-dim blur-3xl mix-blend-screen float-anim"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary blur-3xl mix-blend-screen float-anim" style={{"animationDelay":"-3s"}}></div>
</div>
{/*  Top Spacer  */}
<div className="w-full flex-1"></div>
{/*  Center Content  */}
<div className="flex flex-col items-center justify-center z-10 w-full max-w-md px-margin-desktop">
{/*  Logo Area  */}
<div className="relative w-32 h-32 mb-xl flex items-center justify-center">
<div className="absolute inset-0 loading-ring"></div>
{/*  Refined abstract logo shape instead of image for purely typographic/shape driven splash  */}
<div className="relative z-10 w-24 h-24 bg-surface rounded-xl shadow-2xl flex items-center justify-center rotate-45 transform transition-transform duration-1000">
<span className="material-symbols-outlined text-primary-container text-5xl -rotate-45" style={{"fontVariationSettings":"'FILL' 1"}}>
                    home_work
                </span>
</div>
</div>
{/*  Typography  */}
<h1 className="font-display-lg text-display-lg text-on-primary mb-sm tracking-tight text-center">
            نظام دار الصفاء الذكي
        </h1>
<p className="font-body-lg text-body-lg text-on-primary-container/80 text-center mb-3xl max-w-[280px]">
            جاري تهيئة بيئة العمل وتحميل البيانات الأساسية للمنصة...
        </p>
{/*  Progress Indicator  */}
<div className="w-full max-w-[240px]">
<div className="h-1 w-full bg-primary-fixed/20 rounded-full overflow-hidden backdrop-blur-sm">
<div className="h-full bg-primary-fixed progress-bar rounded-full shadow-[0_0_10px_rgba(176,240,214,0.5)]"></div>
</div>
<div className="flex justify-between items-center mt-md text-on-primary-container/60">
<span className="font-label-md text-label-md">تهيئة النظام</span>
<span id="loading-percent" className="font-label-md text-label-md">0%</span>
</div>
</div>
</div>
{/*  Bottom Footer Area  */}
<div className="w-full flex-1 flex flex-col justify-end items-center pb-xl z-10">
<div className="flex flex-col items-center opacity-70">
<span className="material-symbols-outlined text-on-primary-container mb-xs text-xl">
                shield_lock
            </span>
<p className="font-label-md text-label-md text-on-primary-container tracking-widest uppercase">
                v3.4.0 Enterprise
            </p>
</div>
</div>
<script dangerouslySetInnerHTML={{ __html: "\n        // Simple script to update percentage to match progress bar animation\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            const percentEl = document.getElementById('loading-percent');\n            let progress = 0;\n            const duration = 2500; // ms\n            const intervalTime = 50;\n            const steps = duration / intervalTime;\n            const increment = 100 / steps;\n\n            const interval = setInterval(() => {\n                progress += increment;\n                // Add some non-linear feeling to the text counter to loosely match cubic-bezier\n                let displayVal = Math.floor(progress);\n                if (displayVal > 100) displayVal = 100;\n                \n                percentEl.textContent = displayVal + '%';\n\n                if (progress >= 100) {\n                    clearInterval(interval);\n                    percentEl.textContent = '100%';\n                    // Optional: trigger navigation or reveal after load\n                    setTimeout(() => {\n                         percentEl.textContent = 'جاهز';\n                    }, 500);\n                }\n            }, intervalTime);\n        });\n    " }} />

</div>
    </>
  );
};

export default Screen1;

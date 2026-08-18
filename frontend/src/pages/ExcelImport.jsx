import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Eye,
  RefreshCw,
  Table,
  Filter,
  Cpu,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Previous imports history
// ─────────────────────────────────────────────
const IMPORT_HISTORY = [
  {
    id: 1,
    fileName: 'مبيعات_يوليو_2024.xlsx',
    template: 'قالب المبيعات',
    records: '1,240',
    importDate: '08 أغسطس 2024',
    status: 'success',
    importedBy: 'أحمد عبدالله',
  },
  {
    id: 2,
    fileName: 'فواتير_Q2_2024.xlsx',
    template: 'قالب الفواتير',
    records: '876',
    importDate: '01 أغسطس 2024',
    status: 'partial',
    importedBy: 'سارة المطيري',
  },
  {
    id: 3,
    fileName: 'مستندات_الأرشيف_2023.xlsx',
    template: 'قالب المستندات',
    records: '3,102',
    importDate: '15 يوليو 2024',
    status: 'failed',
    importedBy: 'محمد القحطاني',
  },
];

// ─────────────────────────────────────────────
// Sample preview data
// ─────────────────────────────────────────────
const PREVIEW_ROWS = [
  { رقم: '001', الاسم: 'شركة التقنية الحديثة', النوع: 'فاتورة', المبلغ: '45,000 ر.س', التاريخ: '2024-07-01' },
  { رقم: '002', الاسم: 'مجموعة الخليج للاستثمار', النوع: 'عقد', المبلغ: '120,000 ر.س', التاريخ: '2024-07-03' },
  { رقم: '003', الاسم: 'شركة المستقبل للتجارة', النوع: 'فاتورة', المبلغ: '8,750 ر.س', التاريخ: '2024-07-05' },
  { رقم: '004', الاسم: 'مؤسسة النهضة العربية', النوع: 'مستند', المبلغ: '—', التاريخ: '2024-07-08' },
  { رقم: '005', الاسم: 'شركة الأفق للتطوير', النوع: 'فاتورة', المبلغ: '22,300 ر.س', التاريخ: '2024-07-10' },
];

// ─────────────────────────────────────────────
// Status badge
// ─────────────────────────────────────────────
const HistoryBadge = ({ status }) => {
  if (status === 'success') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary-fixed/20 text-primary border border-primary-fixed-dim/30">
        <CheckCircle size={11} />
        مكتمل
      </span>
    );
  }
  if (status === 'partial') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#ff9939]/15 text-[#a05a00] border border-[#ff9939]/30">
        <AlertTriangle size={11} />
        جزئي
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-error-container text-on-error-container border border-error/20">
      <XCircle size={11} />
      فشل
    </span>
  );
};

// ─────────────────────────────────────────────
// Step indicator
// ─────────────────────────────────────────────
const StepIndicator = ({ step, activeStep }) => {
  const isCompleted = activeStep > step.number;
  const isActive = activeStep === step.number;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200
          ${isCompleted ? 'bg-primary text-on-primary shadow-md' : isActive ? 'bg-primary text-on-primary shadow-lg ring-4 ring-primary/20' : 'bg-surface-container text-on-surface-variant border border-outline-variant'}`}
      >
        {isCompleted ? <CheckCircle size={18} /> : step.number}
      </div>
      <span className={`text-xs font-medium whitespace-nowrap ${isActive ? 'text-primary' : isCompleted ? 'text-primary/70' : 'text-on-surface-variant'}`}>
        {step.label}
      </span>
    </div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const ExcelImport = () => {
  const { openDrawer } = useApp();
  const { showToast } = useToast();

  const [activeStep, setActiveStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importResults, setImportResults] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [fileNameInput, setFileNameInput] = useState('');
  const [validationPassed, setValidationPassed] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const steps = [
    { number: 1, label: 'رفع الملف' },
    { number: 2, label: 'مراجعة البيانات' },
    { number: 3, label: 'الاستيراد النهائي' },
  ];

  // ── Step 1: Upload ──
  const handleUpload = () => {
    if (!selectedTemplate) {
      showToast('يرجى اختيار قالب الاستيراد أولاً', 'warning');
      return;
    }
    const name = fileNameInput.trim() || 'ملف_بيانات_' + Date.now() + '.xlsx';
    setUploadedFile(name);
    setValidationPassed(false);
    setImportResults(null);
    setActiveStep(2);
    showToast('تم رفع الملف بنجاح — جاهز للمراجعة', 'success');
  };

  // ── Step 2: Validate ──
  const handleValidate = () => {
    if (isValidating) return;
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setValidationPassed(true);
      showToast('اكتمل التحقق — لا توجد أخطاء، البيانات جاهزة للاستيراد', 'success');
    }, 1500);
  };

  const handleProceedToStep3 = () => {
    if (!validationPassed) {
      showToast('يرجى إجراء التحقق من البيانات أولاً', 'warning');
      return;
    }
    setActiveStep(3);
  };

  // ── Step 3: Import ──
  const handleImport = () => {
    if (isImporting) return;
    setIsImporting(true);
    setTimeout(() => {
      setIsImporting(false);
      setImportResults({ records: 1240, errors: 0 });
      showToast('تم استيراد 1,240 سجل بنجاح', 'success');
      // reset after a beat
      setTimeout(() => {
        setActiveStep(1);
        setUploadedFile(null);
        setSelectedTemplate('');
        setFileNameInput('');
        setValidationPassed(false);
        setImportResults(null);
      }, 3000);
    }, 2200);
  };

  const handleDownloadTemplate = () => {
    showToast('جاري تحميل القالب...', 'info');
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-surface-container-lowest" dir="rtl">

      {/* ── Page Header ── */}
      <div className="px-6 lg:px-8 py-5 border-b border-outline-variant bg-surface">
        <nav className="flex mb-3 text-sm text-on-surface-variant">
          <ol className="flex items-center gap-1">
            <li><button className="hover:text-primary transition-colors">لوحة القيادة</button></li>
            <li><span className="mx-1">›</span></li>
            <li><button className="hover:text-primary transition-colors">عمليات البيانات</button></li>
            <li><span className="mx-1">›</span></li>
            <li className="text-on-surface font-semibold">استيراد Excel</li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <FileSpreadsheet size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-on-surface">مركز استيراد بيانات Excel</h1>
              <p className="text-sm text-on-surface-variant mt-0.5">رفع وتحقق واستيراد البيانات من ملفات Excel بشكل آمن</p>
            </div>
          </div>
          <button
            onClick={handleDownloadTemplate}
            className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface rounded-lg text-sm font-medium hover:bg-surface-container transition-colors"
          >
            <Download size={15} />
            تحميل قالب الاستيراد
          </button>
        </div>
      </div>

      {/* ── Scrollable Content ── */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6 space-y-6">

        {/* ── Step Wizard Header ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6">
          <div className="flex items-center justify-between relative">
            {/* Connector line */}
            <div className="absolute top-5 right-14 left-14 h-0.5 bg-outline-variant/40" />
            <div
              className="absolute top-5 right-14 h-0.5 bg-primary transition-all duration-500"
              style={{ width: activeStep === 1 ? '0%' : activeStep === 2 ? '50%' : '100%' }}
            />
            {steps.map((s) => (
              <StepIndicator key={s.number} step={s} activeStep={activeStep} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* STEP 1: Upload                          */}
        {/* ═══════════════════════════════════════ */}
        {activeStep === 1 && (
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-outline-variant/30 bg-surface-container-low/40 flex items-center gap-2">
              <UploadCloud size={18} className="text-primary" />
              <h2 className="text-base font-semibold text-on-surface">الخطوة 1 — رفع ملف Excel</h2>
            </div>
            <div className="p-6 space-y-5">

              {/* Template selector */}
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5">
                  قالب الاستيراد <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedTemplate}
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                    className="w-full bg-surface border border-outline-variant rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer transition-all"
                  >
                    <option value="">— اختر قالب الاستيراد —</option>
                    <option value="sales">قالب المبيعات</option>
                    <option value="invoices">قالب الفواتير</option>
                    <option value="documents">قالب المستندات</option>
                  </select>
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-xs">▼</span>
                </div>
              </div>

              {/* File name (simulated) */}
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1.5">اسم الملف (اختياري للمحاكاة)</label>
                <input
                  type="text"
                  placeholder="مثال: مبيعات_يوليو_2024.xlsx"
                  value={fileNameInput}
                  onChange={(e) => setFileNameInput(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              {/* Drop zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragOver(false); }}
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-all duration-200 cursor-pointer
                  ${isDragOver ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant hover:border-primary/50 hover:bg-surface-container-low'}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isDragOver ? 'bg-primary' : 'bg-primary-fixed/20'}`}>
                  <UploadCloud size={26} className={isDragOver ? 'text-white' : 'text-primary'} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-on-surface">اسحب وأفلت ملف Excel هنا</p>
                  <p className="text-xs text-on-surface-variant mt-1">يدعم XLS، XLSX — الحد الأقصى 25 ميجابايت</p>
                </div>
              </div>

              {/* Upload button */}
              <button
                onClick={handleUpload}
                className="w-full py-3 bg-primary text-on-primary rounded-xl text-sm font-semibold hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <UploadCloud size={16} />
                رفع ملف Excel والمتابعة
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* STEP 2: Review & Validate               */}
        {/* ═══════════════════════════════════════ */}
        {activeStep === 2 && (
          <div className="space-y-4">
            {/* File info banner */}
            <div className="bg-primary-fixed/10 border border-primary-fixed-dim/30 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface truncate">{uploadedFile}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">القالب: {selectedTemplate === 'sales' ? 'قالب المبيعات' : selectedTemplate === 'invoices' ? 'قالب الفواتير' : 'قالب المستندات'}</p>
              </div>
              <span className="text-xs bg-primary-fixed/30 text-primary px-2 py-1 rounded-full font-medium flex-shrink-0">تم الرفع</span>
            </div>

            {/* Preview table */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-outline-variant/30 bg-surface-container-low/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Table size={17} className="text-primary" />
                  <h2 className="text-base font-semibold text-on-surface">معاينة البيانات</h2>
                  <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">أول 5 صفوف</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/40">
                      {Object.keys(PREVIEW_ROWS[0]).map((col) => (
                        <th key={col} className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {PREVIEW_ROWS.map((row, i) => (
                      <tr key={i} className={`hover:bg-surface-container-low/60 ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}>
                        {Object.values(row).map((val, j) => (
                          <td key={j} className="py-2.5 px-4 text-sm text-on-surface whitespace-nowrap">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Validation panel */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-5">
              <h3 className="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                <Filter size={15} className="text-primary" />
                نتيجة التحقق من البيانات
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { label: 'أعمدة محددة', value: '5', icon: Table, color: 'text-secondary' },
                  { label: 'إجمالي السجلات', value: '1,240', icon: FileSpreadsheet, color: 'text-primary' },
                  { label: 'أخطاء مكتشفة', value: '0', icon: CheckCircle, color: 'text-primary' },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center bg-surface rounded-lg p-3 border border-outline-variant/30">
                      <Icon size={20} className={`${stat.color} mx-auto mb-1`} />
                      <p className="text-lg font-bold text-on-surface">{stat.value}</p>
                      <p className="text-xs text-on-surface-variant">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {validationPassed ? (
                <div className="flex items-center gap-2 bg-primary-fixed/15 border border-primary-fixed-dim/30 rounded-lg px-4 py-3">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <p className="text-sm font-medium text-primary">اكتمل التحقق بنجاح — البيانات جاهزة للاستيراد</p>
                </div>
              ) : (
                <button
                  onClick={handleValidate}
                  disabled={isValidating}
                  className="w-full py-2.5 border-2 border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary-fixed/10 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isValidating ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" />
                      جارٍ التحقق من البيانات...
                    </>
                  ) : (
                    <>
                      <Cpu size={15} />
                      التحقق من البيانات
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep(1)}
                className="px-5 py-2.5 border border-outline text-on-surface rounded-xl text-sm font-medium hover:bg-surface-container transition-colors"
              >
                السابق
              </button>
              <button
                onClick={handleProceedToStep3}
                disabled={!validationPassed}
                className="flex-1 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-semibold hover:bg-primary-container transition-colors disabled:opacity-40 flex items-center justify-center gap-2 shadow-sm"
              >
                المتابعة إلى الاستيراد النهائي
                <span className="text-base leading-none">←</span>
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* STEP 3: Final Import                    */}
        {/* ═══════════════════════════════════════ */}
        {activeStep === 3 && (
          <div className="space-y-4">
            {/* Confirmation card */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-outline-variant/30 bg-surface-container-low/40 flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                <h2 className="text-base font-semibold text-on-surface">الخطوة 3 — تأكيد الاستيراد النهائي</h2>
              </div>
              <div className="p-6 space-y-4">

                {/* Summary info */}
                <div className="bg-primary-fixed/10 border border-primary-fixed-dim/30 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-on-surface mb-3">ملخص الاستيراد</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: 'الملف', value: uploadedFile },
                      { label: 'القالب', value: selectedTemplate === 'sales' ? 'قالب المبيعات' : selectedTemplate === 'invoices' ? 'قالب الفواتير' : 'قالب المستندات' },
                      { label: 'إجمالي السجلات', value: '1,240 سجل' },
                      { label: 'الأعمدة', value: '5 أعمدة' },
                      { label: 'الأخطاء', value: '0 أخطاء' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-1.5 border-b border-outline-variant/20 last:border-0">
                        <span className="text-on-surface-variant">{item.label}</span>
                        <span className="font-medium text-on-surface">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning notice */}
                <div className="flex items-start gap-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-800 rounded-xl p-4">
                  <AlertTriangle size={16} className="text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-orange-800 dark:text-orange-300">تنبيه قبل الاستيراد</p>
                    <p className="text-xs text-orange-700 dark:text-orange-400 mt-1">
                      سيتم إضافة السجلات إلى قاعدة البيانات بشكل نهائي. يُرجى التأكد من صحة البيانات قبل المتابعة.
                    </p>
                  </div>
                </div>

                {/* Import button */}
                {importResults ? (
                  <div className="flex items-center gap-3 bg-primary-fixed/15 border border-primary-fixed-dim/30 rounded-xl px-5 py-4">
                    <CheckCircle size={22} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-primary">تم الاستيراد بنجاح!</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">تم استيراد {importResults.records.toLocaleString()} سجل — جارٍ إعادة التعيين...</p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleImport}
                    disabled={isImporting}
                    className="w-full py-3 bg-primary text-on-primary rounded-xl text-sm font-semibold hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                  >
                    {isImporting ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        جارٍ الاستيراد... يرجى الانتظار
                      </>
                    ) : (
                      <>
                        <UploadCloud size={16} />
                        بدء الاستيراد النهائي
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Back */}
            {!importResults && (
              <button
                onClick={() => setActiveStep(2)}
                className="px-5 py-2.5 border border-outline text-on-surface rounded-xl text-sm font-medium hover:bg-surface-container transition-colors"
              >
                العودة للمراجعة
              </button>
            )}
          </div>
        )}

        {/* ── Import History Table ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-outline-variant/30 bg-surface-container-lowest flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Table size={17} className="text-primary" />
              <h2 className="text-base font-semibold text-on-surface">سجل الاستيرادات السابقة</h2>
            </div>
            <button
              onClick={() => showToast('جارٍ تصدير سجل الاستيرادات...', 'info')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant text-on-surface-variant rounded-lg text-sm hover:bg-surface-container transition-colors"
            >
              <Download size={14} />
              تصدير
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/40">
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">اسم الملف</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">القالب</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap text-center">السجلات</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">تاريخ الاستيراد</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">المستخدم</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap text-center">الحالة</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap text-center">إجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {IMPORT_HISTORY.map((row, idx) => (
                  <tr key={row.id} className={`hover:bg-surface-container-low/60 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                          <FileSpreadsheet size={13} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-on-surface">{row.fileName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{row.template}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-center font-semibold text-on-surface">{row.records}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{row.importDate}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{row.importedBy}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-center"><HistoryBadge status={row.status} /></td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => openDrawer('importDetails', row)}
                          className="w-8 h-8 rounded-full hover:bg-primary-fixed/20 flex items-center justify-center text-primary transition-colors"
                          title="عرض التفاصيل"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => showToast('جارٍ تحميل التقرير...', 'info')}
                          className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                          title="تحميل"
                        >
                          <Download size={15} />
                        </button>
                        {row.status === 'failed' && (
                          <button
                            onClick={() => showToast('تمت إعادة جدولة الاستيراد', 'warning')}
                            className="w-8 h-8 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                            title="إعادة المحاولة"
                          >
                            <RefreshCw size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-outline-variant/30 bg-surface-container-lowest text-sm text-on-surface-variant">
            عرض {IMPORT_HISTORY.length} من أصل {IMPORT_HISTORY.length} عملية استيراد
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExcelImport;

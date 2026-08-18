import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import {
  ScanText,
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  Download,
  Eye,
  Loader,
  Image,
  Cpu,
  Filter,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Mock data
// ─────────────────────────────────────────────
const OCR_JOBS = [
  {
    id: 1,
    name: 'فاتورة_مورد_2024_01.pdf',
    sector: 'قطاع المطاعم',
    status: 'processing',
    accuracy: null,
    uploadDate: '09 أغسطس 2024',
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'عقد_إيجار_برج_الرياض.pdf',
    sector: 'قطاع الفنادق',
    status: 'completed',
    accuracy: '99.1%',
    uploadDate: '09 أغسطس 2024',
    size: '1.8 MB',
  },
  {
    id: 3,
    name: 'كشف_رواتب_يوليو.xlsx',
    sector: 'الإدارة العامة',
    status: 'failed',
    accuracy: null,
    uploadDate: '08 أغسطس 2024',
    size: '0.9 MB',
  },
  {
    id: 4,
    name: 'سجل_حضور_وانصراف.pdf',
    sector: 'قطاع الاستراحات',
    status: 'completed',
    accuracy: '97.3%',
    uploadDate: '07 أغسطس 2024',
    size: '3.1 MB',
  },
  {
    id: 5,
    name: 'ملف_ضريبة_القيمة_المضافة.pdf',
    sector: 'الإدارة العامة',
    status: 'processing',
    accuracy: null,
    uploadDate: '07 أغسطس 2024',
    size: '4.5 MB',
  },
];

// ─────────────────────────────────────────────
// Status badge helper
// ─────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  if (status === 'processing') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#ff9939]/15 text-[#a05a00] border border-[#ff9939]/30">
        <Loader size={11} className="animate-spin" />
        معالجة
      </span>
    );
  }
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary-fixed/20 text-primary border border-primary-fixed-dim/30">
        <CheckCircle size={11} />
        مكتمل
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
// Main Component
// ─────────────────────────────────────────────
const OCRProcessing = () => {
  const navigate = useNavigate();
  const { openDrawer } = useApp();
  const { showToast } = useToast();
  const fileInputRef = useRef(null);

  const [activeTab, setActiveTab] = useState('queue');
  const [processing, setProcessing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDragOver, setIsDragOver] = useState(false);
  const [batchProcessing, setBatchProcessing] = useState(false);

  // ── Simulate file upload / OCR trigger ──
  const handleSimulateUpload = () => {
    if (processing) return;
    setProcessing(true);
    setSelectedFile('مستند_مرفوع_' + Date.now() + '.pdf');
    setTimeout(() => {
      setProcessing(false);
      showToast('تم معالجة المستند بنجاح - دقة التعرف: 98.7%', 'success');
    }, 2000);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file.name);
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      showToast('تم معالجة المستند بنجاح - دقة التعرف: 98.7%', 'success');
    }, 2000);
  };

  // ── Drag events (visual only) ──
  const handleDragOver = (e) => { e.preventDefault(); setIsDragOver(true); };
  const handleDragLeave = () => setIsDragOver(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setSelectedFile(file.name);
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      showToast('تم معالجة المستند بنجاح - دقة التعرف: 98.7%', 'success');
    }, 2000);
  };

  // ── Batch processing ──
  const handleBatchProcess = () => {
    if (batchProcessing) return;
    setBatchProcessing(true);
    setTimeout(() => {
      setBatchProcessing(false);
      showToast('تم بدء معالجة الدُفعة بنجاح - 8 ملفات في الطابور', 'success');
    }, 1800);
  };

  // ── Tab filter ──
  const tabStatusMap = { queue: 'processing', completed: 'completed', failed: 'failed' };
  const filteredJobs = OCR_JOBS.filter((job) => {
    const matchTab = activeTab === 'queue' ? job.status === 'processing' : job.status === tabStatusMap[activeTab];
    const matchSearch = job.name.includes(searchQuery) || job.sector.includes(searchQuery);
    const matchFilter = filterStatus === 'all' || job.status === filterStatus;
    return matchTab && matchSearch && matchFilter;
  });

  const stats = [
    { label: 'إجمالي المعالج', value: '1,240', icon: FileText, color: 'text-primary', bg: 'bg-primary-fixed/20' },
    { label: 'قيد المعالجة', value: '8', icon: Loader, color: 'text-[#a05a00]', bg: 'bg-[#ff9939]/15' },
    { label: 'فشل في المعالجة', value: '3', icon: XCircle, color: 'text-error', bg: 'bg-error-container' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-surface-container-lowest" dir="rtl">

      {/* ── Page Header ── */}
      <div className="px-6 lg:px-8 py-5 border-b border-outline-variant bg-surface">
        {/* Breadcrumbs */}
        <nav className="flex mb-3 text-sm text-on-surface-variant">
          <ol className="flex items-center gap-1">
            <li>
              <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">
                لوحة القيادة
              </button>
            </li>
            <li><span className="mx-1">›</span></li>
            <li>
              <button onClick={() => navigate('/data-ops')} className="hover:text-primary transition-colors">
                عمليات البيانات
              </button>
            </li>
            <li><span className="mx-1">›</span></li>
            <li className="text-on-surface font-semibold">معالجة OCR</li>
          </ol>
        </nav>

        {/* Title row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <ScanText size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-on-surface">مركز معالجة OCR الذكي</h1>
              <p className="text-sm text-on-surface-variant mt-0.5">استخراج البيانات آلياً من المستندات الممسوحة ضوئياً</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* OCR accuracy badge */}
            <div className="flex items-center gap-2 bg-primary-fixed/20 border border-primary-fixed-dim/30 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
              <Cpu size={14} />
              دقة التعرف: 98.5%
            </div>
            <button
              onClick={handleBatchProcess}
              disabled={batchProcessing}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:bg-primary-container transition-colors disabled:opacity-60 shadow-sm"
            >
              {batchProcessing ? (
                <Loader size={15} className="animate-spin" />
              ) : (
                <RefreshCw size={15} />
              )}
              بدء معالجة دُفعة جديدة
            </button>
          </div>
        </div>
      </div>

      {/* ── Scrollable Content ── */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6 space-y-6">

        {/* ── Stats Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className={s.color} />
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">{s.label}</p>
                  <p className="text-2xl font-bold text-on-surface mt-0.5">{s.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Drop Zone ── */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 p-10 flex flex-col items-center justify-center gap-4 cursor-pointer
            ${isDragOver ? 'border-primary bg-primary-fixed/10 scale-[1.01]' : 'border-outline-variant bg-surface hover:border-primary/50 hover:bg-surface-container-low'}`}
          onClick={() => !processing && fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.png,.jpg,.jpeg,.tiff"
            onChange={handleFileInputChange}
          />

          {processing ? (
            <>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader size={32} className="text-primary animate-spin" />
              </div>
              <div className="text-center">
                <p className="text-base font-semibold text-primary">جارٍ معالجة المستند...</p>
                <p className="text-sm text-on-surface-variant mt-1">{selectedFile ?? 'يرجى الانتظار'}</p>
              </div>
              {/* Progress bar */}
              <div className="w-64 h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '65%' }} />
              </div>
            </>
          ) : (
            <>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${isDragOver ? 'bg-primary' : 'bg-primary-fixed/20'}`}>
                <Upload size={30} className={isDragOver ? 'text-white' : 'text-primary'} />
              </div>
              <div className="text-center">
                <p className="text-base font-semibold text-on-surface">
                  {isDragOver ? 'أفلت الملف هنا' : 'اسحب وأفلت الملفات هنا'}
                </p>
                <p className="text-sm text-on-surface-variant mt-1">أو انقر للاختيار من جهازك</p>
                <p className="text-xs text-on-surface-variant mt-2 opacity-70">يدعم: PDF، PNG، JPG، TIFF — الحد الأقصى 50 ميجابايت</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleSimulateUpload(); }}
                className="mt-1 px-5 py-2 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:bg-primary-container transition-colors flex items-center gap-2 shadow-sm"
              >
                <Image size={15} />
                محاكاة رفع ملف
              </button>
            </>
          )}
        </div>

        {/* ── Jobs Table Card ── */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">

          {/* Card Header with Tabs */}
          <div className="border-b border-outline-variant/30">
            {/* Tabs */}
            <div className="flex px-5 pt-3 gap-1">
              {[
                { key: 'queue', label: 'طابور المعالجة', count: OCR_JOBS.filter(j => j.status === 'processing').length },
                { key: 'completed', label: 'مكتمل', count: OCR_JOBS.filter(j => j.status === 'completed').length },
                { key: 'failed', label: 'فشل', count: OCR_JOBS.filter(j => j.status === 'failed').length },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-all -mb-px
                    ${activeTab === tab.key
                      ? 'border-primary text-primary bg-primary-fixed/10'
                      : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                    }`}
                >
                  {tab.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold
                    ${activeTab === tab.key ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search & Filter row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-3">
              <div className="relative flex-1 min-w-0">
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <ScanText size={16} />
                </span>
                <input
                  type="text"
                  placeholder="بحث باسم الملف أو القطاع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-lg py-2 pr-9 pl-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Filter size={15} className="text-on-surface-variant" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-surface border border-outline-variant rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer"
                >
                  <option value="all">كل الحالات</option>
                  <option value="processing">معالجة</option>
                  <option value="completed">مكتمل</option>
                  <option value="failed">فشل</option>
                </select>
                <button
                  onClick={() => showToast('جارٍ تحميل التقرير...', 'info')}
                  className="flex items-center gap-1.5 px-3 py-2 border border-outline-variant text-on-surface-variant rounded-lg text-sm hover:bg-surface-container transition-colors"
                >
                  <Download size={14} />
                  تصدير
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/40">
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">اسم الملف</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">القطاع</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">الحالة</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap text-center">دقة التعرف</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap">تاريخ الرفع</th>
                  <th className="py-3 px-4 text-sm font-semibold text-on-surface-variant whitespace-nowrap text-center">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {filteredJobs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-on-surface-variant text-sm">
                      <div className="flex flex-col items-center gap-2">
                        <FileText size={32} className="opacity-30" />
                        <span>لا توجد مهام في هذا القسم</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredJobs.map((job, idx) => (
                    <tr key={job.id} className={`transition-colors hover:bg-surface-container-low/60 ${idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                            <FileText size={14} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-on-surface">{job.name}</p>
                            <p className="text-xs text-on-surface-variant">{job.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">{job.sector}</td>
                      <td className="py-3 px-4 whitespace-nowrap"><StatusBadge status={job.status} /></td>
                      <td className="py-3 px-4 whitespace-nowrap text-center">
                        {job.accuracy ? (
                          <span className="text-sm font-semibold text-primary">{job.accuracy}</span>
                        ) : (
                          <span className="text-xs text-on-surface-variant">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-sm text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} />
                          {job.uploadDate}
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => openDrawer('ocrJobDetails', job)}
                            className="w-8 h-8 rounded-full hover:bg-primary-fixed/20 flex items-center justify-center text-primary transition-colors"
                            title="عرض التفاصيل"
                          >
                            <Eye size={15} />
                          </button>
                          <button
                            onClick={() => showToast('جارٍ تحميل النتيجة...', 'info')}
                            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
                            title="تحميل"
                          >
                            <Download size={15} />
                          </button>
                          {job.status === 'failed' && (
                            <button
                              onClick={() => showToast('تمت إعادة إرسال الملف للمعالجة', 'warning')}
                              className="w-8 h-8 rounded-full hover:bg-error-container flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                              title="إعادة المعالجة"
                            >
                              <RefreshCw size={15} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-5 py-3 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-between items-center text-sm text-on-surface-variant">
            <span>عرض {filteredJobs.length} من أصل {OCR_JOBS.filter(j => j.status === tabStatusMap[activeTab]).length} مهمة</span>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container disabled:opacity-40 text-xs" disabled>‹</button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container text-xs">›</button>
            </div>
          </div>
        </div>

        {/* ── Processing Info Banner ── */}
        <div className="bg-primary-fixed/10 border border-primary-fixed-dim/30 rounded-xl p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cpu size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-on-surface">محرك OCR الذكي — نموذج دار الصفاء v3.2</p>
            <p className="text-xs text-on-surface-variant mt-0.5">
              يعالج المحرك المستندات بدقة عالية تصل إلى 99.5% للمستندات العربية. يدعم PDF، الصور الممسوحة، وملفات TIFF متعددة الصفحات.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OCRProcessing;

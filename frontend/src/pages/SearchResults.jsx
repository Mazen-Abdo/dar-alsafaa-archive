import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Search, Filter, FileText, FolderArchive, Users, Clock, ChevronDown, X
} from 'lucide-react';

const allResults = [
  {
    id: 1,
    type: 'document',
    title: 'تقرير مالي Q3 2025',
    excerpt: 'ملخص الأداء المالي للربع الثالث من عام 2025 يشمل الإيرادات والمصروفات...',
    date: '2025-10-01',
    tag: 'مالي',
  },
  {
    id: 2,
    type: 'document',
    title: 'عقد الخدمات – شركة النور',
    excerpt: 'عقد تقديم خدمات استشارية بين دار الصفاء وشركة النور للتقنية للعام 2025...',
    date: '2025-06-15',
    tag: 'عقود',
  },
  {
    id: 3,
    type: 'document',
    title: 'محضر اجتماع مجلس الإدارة',
    excerpt: 'محضر الاجتماع الفصلي لمجلس الإدارة المنعقد بتاريخ مارس 2025...',
    date: '2025-03-22',
    tag: 'إدارة',
  },
  {
    id: 4,
    type: 'report',
    title: 'تقرير الأرباح السنوي 2024',
    excerpt: 'التقرير السنوي الشامل لأداء المؤسسة خلال العام 2024 مع مقارنات...',
    date: '2025-01-10',
    tag: 'تقارير',
  },
  {
    id: 5,
    type: 'report',
    title: 'تقرير تحليل السوق – Q2 2025',
    excerpt: 'دراسة تحليلية لاتجاهات السوق وحصة المؤسسة في الربع الثاني...',
    date: '2025-07-05',
    tag: 'تقارير',
  },
  {
    id: 6,
    type: 'user',
    title: 'أحمد عبد الله',
    excerpt: 'مدير الأرشيف الرئيسي – الفرع الرئيسي الرياض – عضو منذ 2022',
    date: '2022-03-10',
    tag: 'مستخدمون',
  },
  {
    id: 7,
    type: 'user',
    title: 'سارة محمد القحطاني',
    excerpt: 'محللة وثائق – فرع جدة – متخصصة في معالجة OCR والبيانات المهيكلة',
    date: '2024-08-20',
    tag: 'مستخدمون',
  },
  {
    id: 8,
    type: 'folder',
    title: 'مجلد عقود 2023-2025',
    excerpt: 'يحتوي على 47 عقداً وملحقاً موقعاً – آخر تحديث منذ أسبوع',
    date: '2025-08-01',
    tag: 'مجلدات',
  },
];

const filterOptions = [
  { key: 'all', label: 'الكل', icon: Search },
  { key: 'document', label: 'مستندات', icon: FileText },
  { key: 'report', label: 'تقارير', icon: FileText },
  { key: 'user', label: 'مستخدمون', icon: Users },
  { key: 'folder', label: 'مجلدات', icon: FolderArchive },
];

const typeConfig = {
  document: { icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
  report: { icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
  user: { icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', badge: 'bg-purple-100 text-purple-700' },
  folder: { icon: FolderArchive, color: 'text-primary', bg: 'bg-primary/10', badge: 'bg-primary/10 text-primary' },
};

export default function SearchResults() {
  const { openDrawer } = useApp();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    if (q !== query) {
      setQuery(q);
      setInputValue(q);
      if (q) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 600);
      }
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setSearchParams({ q: inputValue.trim() });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 600);
  };

  const clearSearch = () => {
    setInputValue('');
    setQuery('');
    setSearchParams({});
  };

  const results = query
    ? activeFilter === 'all'
      ? allResults
      : allResults.filter((r) => r.type === activeFilter)
    : [];

  return (
    <div className="min-h-screen bg-surface p-6" dir="rtl">
      {/* Breadcrumbs */}
      <div className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
        <span>الرئيسية</span>
        <span>/</span>
        <span className="text-primary font-medium">نتائج البحث</span>
      </div>

      {/* Page Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Search className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-on-surface">نتائج البحث</h1>
          <p className="text-sm text-on-surface-variant">
            {query
              ? isLoading
                ? 'جاري البحث...'
                : `عرض ${results.length} نتيجة لـ "${query}"`
              : 'أدخل كلمة البحث للبدء'}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="ابحث في المستندات والتقارير والمستخدمين..."
            className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest dark:border-outline-variant/50 py-3.5 pr-12 pl-24 text-sm text-on-surface shadow-sm placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {inputValue && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute left-16 top-1/2 -translate-y-1/2 rounded-lg p-1 text-on-surface-variant hover:text-on-surface"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition hover:opacity-90"
          >
            بحث
          </button>
        </div>
      </form>

      {/* Filter Pills */}
      {query && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-sm text-on-surface-variant">
            <Filter className="h-4 w-4" />
            تصفية:
          </span>
          {filterOptions.map((opt) => {
            const count = opt.key === 'all' ? allResults.length : allResults.filter((r) => r.type === opt.key).length;
            return (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  activeFilter === opt.key
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary'
                }`}
              >
                {opt.label}
                <span className={`rounded-full px-1.5 text-xs ${activeFilter === opt.key ? 'bg-white/20' : 'bg-surface-container'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}

      {/* Empty state – no query */}
      {!query && !isLoading && (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest py-28 text-center shadow-sm">
          <Search className="mb-4 h-16 w-16 text-outline-variant" />
          <h3 className="mb-2 text-lg font-semibold text-on-surface">ابدأ بحثك</h3>
          <p className="text-sm text-on-surface-variant">أدخل كلمة أو عبارة للبحث في الأرشيف</p>
        </div>
      )}

      {/* Results */}
      {query && !isLoading && (
        <>
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-surface-container-lowest py-28 text-center shadow-sm">
              <Search className="mb-4 h-16 w-16 text-outline-variant" />
              <h3 className="mb-2 text-lg font-semibold text-on-surface">لا توجد نتائج</h3>
              <p className="text-sm text-on-surface-variant">لم نجد نتائج مطابقة لهذا التصفية</p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((result) => {
                const cfg = typeConfig[result.type];
                const Icon = cfg.icon;
                return (
                  <div
                    key={result.id}
                    className="group flex gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-sm transition hover:shadow-md hover:border-primary/30"
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${cfg.bg}`}>
                      <Icon className={`h-6 w-6 ${cfg.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${cfg.badge}`}>
                          {result.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-on-surface">{result.title}</h3>
                      </div>
                      <p className="mb-2 text-sm text-on-surface-variant leading-relaxed line-clamp-2">{result.excerpt}</p>
                      <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                        <Clock className="h-3 w-3" />
                        {result.date}
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center">
                      <button
                        onClick={() => openDrawer('document-preview', { id: result.id, title: result.title })}
                        className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100 hover:bg-primary hover:text-on-primary"
                      >
                        عرض
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

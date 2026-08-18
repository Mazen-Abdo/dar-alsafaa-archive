import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import {
  HelpCircle, Search, Book, Video, MessageCircle, Phone,
  Mail, ChevronDown, ChevronUp, ExternalLink, Send
} from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'كيف أرفع مستنداً جديداً للأرشيف؟',
    answer:
      'انتقل إلى قسم "رفع المستندات" من القائمة الجانبية، ثم اضغط على زر "رفع مستند جديد". يمكنك سحب الملف وإفلاته أو الضغط لاختياره من جهازك. بعد الرفع، أدخل البيانات الوصفية للمستند مثل العنوان والفئة والتاريخ ثم اضغط "حفظ".',
  },
  {
    id: 2,
    question: 'كيف أستخدم نظام OCR لمعالجة الملفات؟',
    answer:
      'من قسم "معالجة OCR"، ارفع ملف PDF أو صورة. سيقوم النظام تلقائياً باستخراج النص منه. يمكنك مراجعة النتائج وتصحيحها قبل الحفظ. يدعم النظام العربية والإنجليزية بدقة عالية.',
  },
  {
    id: 3,
    question: 'كيف أستيراد البيانات من ملف Excel؟',
    answer:
      'توجه إلى "استيراد البيانات" وحمّل قالب Excel الخاص بالنظام أولاً. بعد ملء القالب بياناتك، ارفعه مجدداً. سيراجع النظام البيانات ويعرض معاينة قبل تأكيد الاستيراد.',
  },
  {
    id: 4,
    question: 'كيف أضيف مستخدماً جديداً للنظام؟',
    answer:
      'من لوحة "إدارة المستخدمين"، اضغط على "إضافة مستخدم". أدخل الاسم والبريد الإلكتروني واختر الدور المناسب (مدير، محرر، مشاهد). سيصل للمستخدم الجديد بريد إلكتروني بتفاصيل الدخول.',
  },
  {
    id: 5,
    question: 'كيف أعيّن صلاحيات للمستخدمين؟',
    answer:
      'افتح ملف المستخدم من قسم "إدارة المستخدمين"، ثم انتقل لتبويب "الصلاحيات". يمكنك ضبط الوصول لكل قسم أو مستند أو فرع بشكل مستقل. تأكد من حفظ التغييرات.',
  },
  {
    id: 6,
    question: 'كيف أقرأ سجلات التدقيق والرقابة؟',
    answer:
      'سجلات التدقيق متاحة في قسم "الرقابة والتدقيق". يمكنك تصفيتها حسب المستخدم أو التاريخ أو نوع الإجراء. كل سجل يُظهر من فعل ماذا ومتى، مع إمكانية تصدير التقارير.',
  },
];

const quickLinks = [
  { icon: Book, label: 'دليل المستخدم', desc: 'وثيقة شاملة لكل ميزات النظام', color: 'text-primary', bg: 'bg-primary/10' },
  { icon: Video, label: 'مقاطع الفيديو', desc: 'دروس مرئية خطوة بخطوة', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: HelpCircle, label: 'أسئلة شائعة', desc: 'إجابات للأسئلة الأكثر شيوعاً', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: ExternalLink, label: 'التحديثات', desc: 'آخر تحديثات وميزات النظام', color: 'text-purple-600', bg: 'bg-purple-50' },
];

const tabs = [
  { key: 'faq', label: 'الأسئلة الشائعة', icon: HelpCircle },
  { key: 'guides', label: 'الأدلة السريعة', icon: Book },
  { key: 'contact', label: 'تواصل معنا', icon: MessageCircle },
];

export default function HelpCenter() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ subject: '', message: '', priority: 'medium' });

  const filteredFaqs = faqs.filter(
    (f) =>
      searchQuery === '' ||
      f.question.includes(searchQuery) ||
      f.answer.includes(searchQuery)
  );

  const handleSend = () => {
    if (!contactForm.subject.trim() || !contactForm.message.trim()) {
      showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
      return;
    }
    showToast('تم إرسال طلب الدعم بنجاح، سيتم الرد خلال 24 ساعة', 'success');
    setContactForm({ subject: '', message: '', priority: 'medium' });
  };

  return (
    <div className="min-h-screen bg-surface p-6" dir="rtl">
      {/* Breadcrumbs */}
      <div className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
        <span>الرئيسية</span>
        <span>/</span>
        <span className="text-primary font-medium">مركز المساعدة</span>
      </div>

      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <HelpCircle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-on-surface">مركز المساعدة والدعم</h1>
          <p className="text-sm text-on-surface-variant">نحن هنا لمساعدتك في أي وقت</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8 relative">
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
        <input
          type="text"
          placeholder="ابحث في الأسئلة الشائعة والأدلة..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-outline-variant bg-white py-3 pr-12 pl-4 text-sm text-on-surface shadow-sm placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-xl bg-surface-container p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/40 py-16 text-center shadow-sm">
              <Search className="mx-auto mb-3 h-12 w-12 text-outline-variant" />
              <p className="text-on-surface-variant">لا توجد نتائج للبحث</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between p-5 text-right transition hover:bg-surface-container-low"
                >
                  <span className="font-semibold text-on-surface">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-on-surface-variant" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="border-t border-outline-variant/30 bg-surface-container-low px-5 py-4">
                    <p className="text-sm leading-relaxed text-on-surface-variant">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Guides Tab */}
      {activeTab === 'guides' && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <button
                key={i}
                onClick={() => showToast(`جاري فتح ${link.label}...`, 'info')}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest border border-outline-variant/40 p-6 text-center shadow-sm transition hover:shadow-md hover:border-primary/30"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${link.bg} transition group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 ${link.color}`} />
                </div>
                <div>
                  <p className="font-semibold text-on-surface">{link.label}</p>
                  <p className="mt-1 text-xs text-on-surface-variant">{link.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-on-surface-variant opacity-0 transition group-hover:opacity-100" />
              </button>
            );
          })}
        </div>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest border border-outline-variant/40 p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold text-on-surface">إرسال طلب دعم</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-on-surface">
                  الموضوع <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="وصف مختصر للمشكلة أو الطلب"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-on-surface">الأولوية</label>
                <select
                  value={contactForm.priority}
                  onChange={(e) => setContactForm((f) => ({ ...f, priority: e.target.value }))}
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-2.5 text-sm text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="low">منخفضة</option>
                  <option value="medium">متوسطة</option>
                  <option value="high">عالية</option>
                  <option value="critical">حرجة</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-on-surface">
                  الرسالة <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="اشرح مشكلتك أو طلبك بالتفصيل..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              <button
                onClick={handleSend}
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                إرسال الطلب
              </button>
            </div>
          </div>

          {/* Support Info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest border border-outline-variant/40 p-5 shadow-sm">
              <h3 className="mb-4 font-bold text-on-surface">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">الهاتف</p>
                    <p className="text-sm font-semibold text-on-surface" dir="ltr">+966 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">البريد الإلكتروني</p>
                    <p className="text-sm font-semibold text-on-surface" dir="ltr">support@darsafaa.sa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                    <MessageCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">دردشة مباشرة</p>
                    <p className="text-sm font-semibold text-on-surface">متاحة على الموقع</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest border border-outline-variant/40 p-5 shadow-sm">
              <h3 className="mb-3 font-bold text-on-surface">ساعات العمل</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">الأحد – الخميس</span>
                  <span className="font-medium text-on-surface">8ص – 5م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">الجمعة – السبت</span>
                  <span className="font-medium text-red-500">مغلق</span>
                </div>
                <div className="mt-3 rounded-lg bg-primary/5 p-2.5 text-xs text-primary">
                  الدعم الطارئ متاح 24/7 للعملاء المميزين
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

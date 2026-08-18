export const branches = [
  { id: 'b1', name: 'الإدارة العامة - الرياض', code: 'RUH-01', region: 'الوسطى', status: 'نشط' },
  { id: 'b2', name: 'فرع جدة - الكورنيش', code: 'JED-02', region: 'الغربية', status: 'نشط' },
  { id: 'b3', name: 'فرع الدمام - حي الشاطئ', code: 'DMM-03', region: 'الشرقية', status: 'نشط' },
  { id: 'b4', name: 'فرع أبها - الأمانة', code: 'AHB-04', region: 'الجنوبية', status: 'تحت الصيانة' }
];

export const systemStats = {
  totalDocuments: '142,850',
  monthlyImports: '12,400',
  ocrProcessed: '98.5%',
  pendingApprovals: 18,
  activeUsers: 342,
  securityAlerts: 42
};

export const recentDocuments = [
  { id: 'DOC-9041', title: 'عقد توريد أجهزة خوادم 2026', category: 'العقود والاتفاقيات', branch: 'الرياض', date: '2026-08-08', status: 'مكتمل' },
  { id: 'DOC-9042', title: 'تقرير التدقيق المالي Q2', category: 'التقارير المالية', branch: 'جدة', date: '2026-08-07', status: 'قيد الاعتماد' },
  { id: 'DOC-9043', title: 'محضر اجتماع مجلس الإدارة', category: 'المحاضر والقرارات', branch: 'الرياض', date: '2026-08-06', status: 'مكتمل' },
  { id: 'DOC-9044', title: 'جدول رواتب وتأمينات الفروع', category: 'الموارد البشرية', branch: 'الدمام', date: '2026-08-05', status: 'معالجة OCR' },
];

export const auditLogs = [
  {
    id: 'EVT-8942',
    timestamp: '2026-08-09 14:32:45',
    user: 'أحمد عبدالله',
    role: 'مدير النظام (Admin)',
    action: 'تعديل صلاحيات',
    branch: 'الإدارة العامة',
    resource: 'UserRole_Policy_v2',
    ip: '192.168.1.105',
    severity: 'حرج',
    details: 'تم منح صلاحية approve_transfers لدور Financial_Analyst'
  },
  {
    id: 'EVT-8943',
    timestamp: '2026-08-09 13:15:22',
    user: 'سارة محمد',
    role: 'محلل بيانات',
    action: 'استيراد أكسل',
    branch: 'فرع جدة',
    resource: 'Financial_Q3.csv',
    ip: '10.0.4.52',
    severity: 'معلومة',
    details: 'تم رفع وتدقيق ملف الأكسل بنجاح (240 سجل)'
  },
  {
    id: 'EVT-8944',
    timestamp: '2026-08-09 11:04:10',
    user: 'System Kernel',
    role: 'Automated Task',
    action: 'أرشفة تلقائية',
    branch: 'الخوادم المركزية',
    resource: 'Old_Logs_2022',
    ip: 'localhost',
    severity: 'تحذير',
    details: 'تم نقل السجلات التاريخية إلى التخزين البارد'
  }
];

export const notificationsList = [
  { id: 1, title: 'طلب اعتماد مستند جديد', time: 'منذ 10 دقائق', type: 'approval', unread: true },
  { id: 2, title: 'فشل في معالجة ملف OCR', time: 'منذ ساعتين', type: 'alert', unread: true },
  { id: 3, title: 'تم استيراد 1,200 سجل بنجاح', time: 'منذ 4 ساعات', type: 'info', unread: false },
];

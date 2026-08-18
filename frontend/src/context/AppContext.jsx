import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

// ── Demo users for login flow ──────────────────────────────────────────────────
export const DEMO_USERS = [
  {
    id: 'u1',
    name: 'أحمد عبدالله',
    email: 'admin@daralsafaa.com',
    password: 'admin123',
    role: 'super_admin',
    roleLabel: 'مدير النظام',
    branch: { id: 'b1', name: 'الإدارة العامة - الرياض', code: 'RUH-01', region: 'الرياض', status: 'نشط' },
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO2Rwxs2eURUmP77CXqQfNuNOL2KIQJdzILFm9ioNzMn9AhxiG32CLk1vrZ9wZhHlO7PZml8bNSB0XwDyqAUlOGq8NXkbS8y5wkcRVWbVNtdZSVdj_WWTYSdHfZqjOVTVtwjaTlfIi3hlrT51uvFoHUh-88nsyeKgHU5gXN0uRGILmfBko1l18xjtJZyhHMtB3dNgq4OC1aMMS40RW1bKMzfis7AKiQLEFrFV_WQipMhiDTaLNMY2kcQ',
    // Super Admin sees everything
    allowedRoutes: null, // null = all routes
  },
  {
    id: 'u2',
    name: 'سارة محمد',
    email: 'manager@daralsafaa.com',
    password: 'manager123',
    role: 'branch_manager',
    roleLabel: 'مدير فرع',
    branch: { id: 'b2', name: 'فرع جدة - الكورنيش', code: 'JED-02', region: 'جدة', status: 'نشط' },
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sara',
    // Branch manager: no settings, no permissions matrix
    allowedRoutes: ['/dashboard', '/archive', '/data-ops/ocr', '/data-ops/excel-import', '/reports', '/task-queue', '/notifications', '/organization', '/audit-log', '/profile', '/help', '/search'],
  },
  {
    id: 'u3',
    name: 'خالد العمري',
    email: 'clerk@daralsafaa.com',
    password: 'clerk123',
    role: 'data_clerk',
    roleLabel: 'موظف إدخال بيانات',
    branch: { id: 'b3', name: 'فرع الدمام - حي الشاطئ', code: 'DAM-03', region: 'الدمام', status: 'نشط' },
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=khalid',
    // Data clerk: archive and OCR only
    allowedRoutes: ['/archive', '/data-ops/ocr', '/data-ops/excel-import', '/notifications', '/profile', '/help'],
  },
];

// ── Role-based sidebar visibility ─────────────────────────────────────────────
export const ROLE_NAV_MAP = {
  super_admin: null, // sees all
  branch_manager: [
    '/dashboard', '/archive', '/data-ops/ocr', '/data-ops/excel-import',
    '/reports', '/task-queue', '/notifications', '/organization', '/audit-log',
    '/profile', '/help',
  ],
  data_clerk: [
    '/archive', '/data-ops/ocr', '/data-ops/excel-import',
    '/notifications', '/profile', '/help',
  ],
};

export const AppProvider = ({ children }) => {
  // ── Auth state ────────────────────────────────────────────────────────────
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('daralsafaa_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  const [activeBranch, setActiveBranch] = useState(() => {
    if (currentUser) return currentUser.branch;
    return { id: 'b1', name: 'الإدارة العامة - الرياض', code: 'RUH-01', region: 'الرياض', status: 'نشط' };
  });

  // ── Theme ─────────────────────────────────────────────────────────────────
  const [theme, setTheme] = useState(() => localStorage.getItem('daralsafaa_theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('daralsafaa_theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // ── Notifications ─────────────────────────────────────────────────────────
  const [notificationsCount, setNotificationsCount] = useState(5);

  // ── Drawers & Modals ──────────────────────────────────────────────────────
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const openDrawer  = useCallback((type, data = {}) => setActiveDrawer({ type, data }), []);
  const closeDrawer = useCallback(() => setActiveDrawer(null), []);
  const openModal   = useCallback((type, data = {}) => setActiveModal({ type, data }), []);
  const closeModal  = useCallback(() => setActiveModal(null), []);

  // ── Login / Logout ────────────────────────────────────────────────────────
  const login = useCallback((user) => {
    setCurrentUser(user);
    setActiveBranch(user.branch);
    localStorage.setItem('daralsafaa_user', JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem('daralsafaa_user');
  }, []);

  // ── Allowed routes helper ─────────────────────────────────────────────────
  const canAccess = useCallback((route) => {
    if (!currentUser) return false;
    const allowed = ROLE_NAV_MAP[currentUser.role];
    if (allowed === null) return true; // super_admin
    return allowed.some(r => route.startsWith(r));
  }, [currentUser]);

  return (
    <AppContext.Provider value={{
      // auth
      currentUser,
      setCurrentUser,
      login,
      logout,
      canAccess,
      isLoggedIn: !!currentUser,
      // branch
      activeBranch,
      setActiveBranch,
      // theme
      theme,
      toggleTheme,
      // notifications
      notificationsCount,
      setNotificationsCount,
      // drawers
      activeDrawer,
      openDrawer,
      closeDrawer,
      // modals
      activeModal,
      openModal,
      closeModal,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

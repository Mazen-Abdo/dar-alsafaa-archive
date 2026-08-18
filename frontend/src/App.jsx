import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { ToastProvider } from './context/ToastContext';
import MainLayout from './components/layout/MainLayout';

// ── Pages ─────────────────────────────────────────────────────────────────────
import Login        from './pages/Login';
import SelectBranch from './pages/SelectBranch';
import NotFound     from './pages/NotFound';
import Forbidden    from './pages/Forbidden';
import Screen1      from './pages/Screen1';

import Dashboard        from './pages/Dashboard';
import Archive          from './pages/Archive';
import OCRProcessing    from './pages/OCRProcessing';
import ExcelImport      from './pages/ExcelImport';
import Reports          from './pages/Reports';
import UsersPermissions from './pages/UsersPermissions';
import Organization     from './pages/Organization';
import AuditLog         from './pages/AuditLog';
import Settings         from './pages/Settings';
import TaskQueue        from './pages/TaskQueue';
import Profile          from './pages/Profile';
import Notifications    from './pages/Notifications';
import HelpCenter       from './pages/HelpCenter';
import SearchResults    from './pages/SearchResults';

// ── Protected Route guard ─────────────────────────────────────────────────────
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useApp();
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

// ── Guarded Layout (wraps MainLayout with auth check) ─────────────────────────
const GuardedLayout = () => (
  <ProtectedRoute>
    <MainLayout />
  </ProtectedRoute>
);

// ── Auto-redirect if already logged in ───────────────────────────────────────
const PublicOnlyRoute = ({ children }) => {
  const { isLoggedIn } = useApp();
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;
  return children;
};

function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            {/* Root → Login (not dashboard, until logged in) */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* ── Public Routes ── */}
            <Route path="/login" element={
              <PublicOnlyRoute><Login /></PublicOnlyRoute>
            } />
            <Route path="/splash"        element={<Screen1 />} />
            <Route path="/select-branch" element={<SelectBranch />} />

            {/* ── Protected Routes inside MainLayout ── */}
            <Route element={<GuardedLayout />}>
              <Route path="dashboard"             element={<Dashboard />} />
              <Route path="data-ops/ocr"          element={<OCRProcessing />} />
              <Route path="data-ops/excel-import" element={<ExcelImport />} />
              <Route path="archive"               element={<Archive />} />
              <Route path="reports"               element={<Reports />} />
              <Route path="users-permissions"     element={<UsersPermissions />} />
              <Route path="organization"          element={<Organization />} />
              <Route path="audit-log"             element={<AuditLog />} />
              <Route path="settings"              element={<Settings />} />
              <Route path="task-queue"            element={<TaskQueue />} />
              <Route path="profile"               element={<Profile />} />
              <Route path="notifications"         element={<Notifications />} />
              <Route path="help"                  element={<HelpCenter />} />
              <Route path="search"                element={<SearchResults />} />
              <Route path="403"                   element={<Forbidden />} />
              <Route path="404"                   element={<NotFound />} />
              <Route path="*"                     element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AppProvider>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Import Screens
import Screen1 from '../pages/Screen1';   // Splash / Loading
import Screen2 from '../pages/Screen2';   // 403 Forbidden
import Screen3 from '../pages/Screen3';   // OCR Operations
import Screen4 from '../pages/Screen4';   // Executive Dashboard
import Screen5 from '../pages/Screen5';   // Notifications Center
import Screen6 from '../pages/Screen6';   // Reports & Analytics
import Screen7 from '../pages/Screen7';   // Electronic Archive
import Screen8 from '../pages/Screen8';   // Task Queue / Approvals (1)
import Screen9 from '../pages/Screen9';   // Search Results
import Screen10 from '../pages/Screen10'; // Help & Support
import Screen11 from '../pages/Screen11'; // Excel Data Import
import Screen12 from '../pages/Screen12'; // Empty State
import Screen13 from '../pages/Screen13'; // Organization / Sectors & Branches
import Screen14 from '../pages/Screen14'; // Branch Selection
import Screen15 from '../pages/Screen15'; // Users & Permissions
import Screen16 from '../pages/Screen16'; // User Profile
import Screen17 from '../pages/Screen17'; // 404 System Error
import Screen18 from '../pages/Screen18'; // Task Queue / Approvals (2)
import Screen19 from '../pages/Screen19'; // Login
import Screen20 from '../pages/Screen20'; // System Settings
import Screen21 from '../pages/Screen21'; // Comprehensive Audit Log

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Redirect to Dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public Unprotected Routes */}
      <Route path="/login" element={<Screen19 />} />
      <Route path="/splash" element={<Screen1 />} />
      <Route path="/select-branch" element={<Screen14 />} />

      {/* Protected Master Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Screen4 />} />
        <Route path="/data-ops/ocr" element={<Screen3 />} />
        <Route path="/data-ops/excel-import" element={<Screen11 />} />
        <Route path="/archive" element={<Screen7 />} />
        <Route path="/reports" element={<Screen6 />} />
        <Route path="/users-permissions" element={<Screen15 />} />
        <Route path="/organization" element={<Screen13 />} />
        <Route path="/audit-log" element={<Screen21 />} />
        <Route path="/settings" element={<Screen20 />} />
        <Route path="/task-queue" element={<Screen18 />} />
        <Route path="/profile" element={<Screen16 />} />
        <Route path="/notifications" element={<Screen5 />} />
        <Route path="/help" element={<Screen10 />} />
        <Route path="/search" element={<Screen9 />} />
        <Route path="/403" element={<Screen2 />} />
        <Route path="/404" element={<Screen17 />} />
        <Route path="*" element={<Screen17 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

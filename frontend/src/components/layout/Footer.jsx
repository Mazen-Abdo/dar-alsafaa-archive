import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-4 px-8 border-t border-outline-variant/20 bg-surface text-on-surface-variant text-label-md flex flex-col md:flex-row items-center justify-between gap-2 mt-auto">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-primary" />
        <span>جميع الحقوق محفوظة © {new Date().getFullYear()} منصة دار الصفاء الذكية - الإصدار 3.4.0 Enterprise</span>
      </div>
      <div className="flex items-center gap-4 text-xs opacity-80">
        <a href="#/help" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
        <span>•</span>
        <a href="#/help" className="hover:text-primary transition-colors">الشروط والأحكام</a>
        <span>•</span>
        <a href="#/help" className="hover:text-primary transition-colors">الدعم الفني</a>
      </div>
    </footer>
  );
};

export default Footer;

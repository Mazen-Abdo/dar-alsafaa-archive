import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { branches } from '../../data/mockData';
import {
  Search, Bell, Sun, Moon, Building2, ChevronDown, Settings
} from 'lucide-react';

export const TopNav = () => {
  const { activeBranch, setActiveBranch, theme, toggleTheme, currentUser, notificationsCount } = useApp();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  const isDark = theme === 'dark';

  return (
    <header
      className="h-16 flex justify-between items-center w-full px-6 sticky top-0 z-20 transition-colors duration-200
                 bg-surface border-b border-outline-variant/30 shadow-sm"
    >
      {/* ── Right: Branch Selector ── */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <Building2 className="w-4 h-4 text-primary absolute right-3 pointer-events-none" />
          <select
            value={activeBranch?.id}
            onChange={(e) => {
              const selected = branches.find(b => b.id === e.target.value);
              if (selected) setActiveBranch(selected);
            }}
            className="bg-surface-container-low text-on-surface py-2 pr-9 pl-8 rounded-full
                       border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30
                       cursor-pointer appearance-none text-sm font-medium transition-colors duration-200"
          >
            {branches.map(b => (
              <option key={b.id} value={b.id}>{b.name} ({b.code})</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-on-surface-variant absolute left-3 pointer-events-none" />
        </div>
      </div>

      {/* ── Center: Search ── */}
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <form
          onSubmit={(e) => { e.preventDefault(); if (searchVal.trim()) navigate('/search'); }}
          className="relative flex items-center w-full"
        >
          <Search className="w-4 h-4 text-on-surface-variant/60 absolute right-3 pointer-events-none" />
          <input
            type="text"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            placeholder="البحث في المستندات والسجلات..."
            className="w-full h-10 pr-10 pl-4 bg-surface-container-low rounded-full
                       outline-none text-sm text-on-surface placeholder:text-on-surface-variant/60
                       border border-outline-variant/30 focus:border-primary/50
                       focus:ring-2 focus:ring-primary/20 transition-all duration-200"
          />
        </form>
      </div>

      {/* ── Left: Actions ── */}
      <div className="flex items-center gap-1.5">

        {/* ── Theme Toggle (Sun/Moon) ── */}
        <button
          id="theme-toggle-btn"
          onClick={toggleTheme}
          title={isDark ? 'التبديل للوضع النهاري' : 'التبديل للوضع الليلي'}
          className="relative w-9 h-9 rounded-full flex items-center justify-center
                     hover:bg-surface-container-high transition-colors duration-200
                     text-on-surface-variant hover:text-primary active:scale-90"
          aria-label="تبديل الثيم"
        >
          {/* Animated icon swap */}
          <span
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: isDark ? 1 : 0, transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0.5)' }}
          >
            <Sun className="w-5 h-5 text-amber-400" />
          </span>
          <span
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: isDark ? 0 : 1, transform: isDark ? 'rotate(-90deg) scale(0.5)' : 'rotate(0deg) scale(1)' }}
          >
            <Moon className="w-5 h-5" />
          </span>
        </button>

        {/* ── Notifications ── */}
        <button
          onClick={() => navigate('/notifications')}
          className="relative w-9 h-9 rounded-full flex items-center justify-center
                     hover:bg-surface-container-high text-on-surface-variant hover:text-primary
                     transition-colors duration-200 active:scale-90"
          title="الإشعارات"
        >
          <Bell className="w-5 h-5" />
          {notificationsCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full ring-2 ring-surface" />
          )}
        </button>

        {/* ── Settings ── */}
        <button
          onClick={() => navigate('/settings')}
          className="w-9 h-9 rounded-full flex items-center justify-center
                     hover:bg-surface-container-high text-on-surface-variant hover:text-primary
                     transition-colors duration-200 active:scale-90"
          title="الإعدادات"
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* ── Divider ── */}
        <div className="h-6 w-px bg-outline-variant/40 mx-1" />

        {/* ── User Avatar ── */}
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full
                     hover:bg-surface-container-high transition-colors duration-200 active:scale-95"
        >
          {currentUser?.avatar && !currentUser.avatar.includes('dicebear') ? (
            <img
              src={currentUser.avatar}
              alt={currentUser?.name}
              className="w-8 h-8 rounded-full object-cover border border-outline-variant/50"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
              {currentUser?.name?.charAt(0) || '؟'}
            </div>
          )}
          <div className="hidden lg:block text-right">
            <p className="text-xs font-semibold text-on-surface leading-none">{currentUser?.name}</p>
            <p className="text-[10px] text-on-surface-variant leading-none mt-0.5">{currentUser?.roleLabel}</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TopNav;

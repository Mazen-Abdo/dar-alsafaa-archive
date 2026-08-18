import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { branches } from '../data/mockData';
import { Building2, MapPin, CheckCircle, ArrowLeft, FolderArchive, Users } from 'lucide-react';

const SelectBranch = () => {
  const navigate = useNavigate();
  const { setActiveBranch } = useApp();
  const [selected, setSelected] = useState(null);

  const handleConfirm = () => {
    if (!selected) return;
    const branch = branches.find(b => b.id === selected);
    setActiveBranch(branch);
    navigate('/dashboard');
  };

  const statusColor = {
    'نشط': 'text-primary bg-primary-container/20 border-primary/20',
    'تحت الصيانة': 'text-[#ff9939] bg-[#ff9939]/10 border-[#ff9939]/20',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-container to-[#002a1d] flex items-center justify-center p-6" dir="rtl">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Building2 className="w-8 h-8 text-primary-fixed-dim" />
          </div>
          <h1 className="text-3xl font-bold text-primary-fixed-dim">اختيار الفرع</h1>
          <p className="text-primary-fixed-dim/70 mt-2 text-sm">اختر الفرع الذي تريد العمل عليه</p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setSelected(branch.id)}
              className={`text-right p-5 rounded-2xl border-2 transition-all duration-200 group backdrop-blur-sm ${
                selected === branch.id
                  ? 'bg-white border-white shadow-xl scale-[1.02]'
                  : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/40'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected === branch.id ? 'bg-primary/10' : 'bg-white/10'}`}>
                  <Building2 className={`w-5 h-5 ${selected === branch.id ? 'text-primary' : 'text-primary-fixed-dim'}`} />
                </div>
                {selected === branch.id && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <CheckCircle className="w-4 h-4 text-on-primary" />
                  </div>
                )}
              </div>

              <h3 className={`font-bold text-base mb-1 ${selected === branch.id ? 'text-on-surface' : 'text-primary-fixed-dim'}`}>
                {branch.name}
              </h3>
              <div className="flex items-center gap-1 mb-3">
                <MapPin className={`w-3.5 h-3.5 ${selected === branch.id ? 'text-on-surface-variant' : 'text-primary-fixed-dim/60'}`} />
                <span className={`text-xs ${selected === branch.id ? 'text-on-surface-variant' : 'text-primary-fixed-dim/70'}`}>
                  {branch.region} · {branch.code}
                </span>
              </div>
              <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                selected === branch.id
                  ? (statusColor[branch.status] || 'text-primary bg-primary-container/20 border-primary/20')
                  : 'text-primary-fixed-dim/70 bg-white/10 border-white/20'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${branch.status === 'نشط' ? 'bg-current' : 'bg-current'}`} />
                {branch.status}
              </div>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-primary-fixed-dim/70 hover:text-primary-fixed-dim text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة لتسجيل الدخول
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
              selected
                ? 'bg-primary-fixed-dim text-on-primary-fixed shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
                : 'bg-white/10 text-primary-fixed-dim/40 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            تأكيد والمتابعة
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBranch;

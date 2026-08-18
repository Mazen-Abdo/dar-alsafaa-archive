import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Table = ({ headers = [], children, className }) => {
  return (
    <div className={twMerge('bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead className="bg-surface-container-low text-on-surface-variant font-label-md border-b border-outline-variant/30">
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} className="py-3.5 px-4 font-semibold whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-body-md divide-y divide-outline-variant/20">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

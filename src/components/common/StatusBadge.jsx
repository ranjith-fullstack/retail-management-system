import React from 'react';

const STATUS_STYLES = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800'
};

export default function StatusBadge({ status, className = '' }) {
  const statusStyle = STATUS_STYLES[status.toLowerCase()] || STATUS_STYLES.inactive;
  
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyle} ${className}`}>
      {status}
    </span>
  );
}
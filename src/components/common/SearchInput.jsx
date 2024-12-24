import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="relative flex-1">
      <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
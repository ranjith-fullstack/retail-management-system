import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function CustomerTable({ customers, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{customer.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.totalOrders}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${customer.totalSpent.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(customer.joinDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(customer)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
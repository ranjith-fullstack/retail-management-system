import React from 'react';
import { getCustomerMetrics } from '../../utils/analytics';

export default function CustomerStats({ customers }) {
  const metrics = getCustomerMetrics(customers);

  const stats = [
    { 
      label: 'Total Customers', 
      value: metrics.totalCustomers.toLocaleString(),
      bgColor: 'bg-blue-50' 
    },
    { 
      label: 'Active Customers', 
      value: metrics.activeCustomers.toLocaleString(),
      bgColor: 'bg-green-50' 
    },
    { 
      label: 'Average Spent', 
      value: `$${metrics.averageSpent.toLocaleString()}`,
      bgColor: 'bg-purple-50' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 ${stat.bgColor} rounded-lg`}>
          <p className="text-sm text-gray-600">{stat.label}</p>
          <p className="text-xl font-bold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
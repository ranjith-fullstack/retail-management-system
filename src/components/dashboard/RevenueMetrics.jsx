import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export default function RevenueMetrics({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: 'Revenue',
          value: `$${data.revenue.toLocaleString()}`,
          change: data.revenueChange,
          bgGradient: 'from-blue-500 to-blue-600'
        },
        {
          title: 'Orders',
          value: data.orders,
          change: data.ordersChange,
          bgGradient: 'from-purple-500 to-purple-600'
        },
        {
          title: 'Average Order',
          value: `$${data.averageOrder.toLocaleString()}`,
          change: data.averageOrderChange,
          bgGradient: 'from-green-500 to-green-600'
        }
      ].map((metric) => (
        <div 
          key={metric.title}
          className={`p-6 rounded-xl bg-gradient-to-r ${metric.bgGradient} text-white`}
        >
          <p className="text-sm opacity-80">{metric.title}</p>
          <p className="text-2xl font-bold mt-2">{metric.value}</p>
          <div className="flex items-center mt-2">
            {metric.change >= 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-green-300" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-300" />
            )}
            <span className="ml-1 text-sm">
              {Math.abs(metric.change)}% from last period
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
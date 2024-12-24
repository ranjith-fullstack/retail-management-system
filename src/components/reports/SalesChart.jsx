import React, { useMemo } from 'react';
import { calculateRevenueStats } from '../../utils/analytics';

export default function SalesChart({ orders, dateRange }) {
  const stats = useMemo(() => calculateRevenueStats(orders), [orders]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Average Order</p>
          <p className="text-xl font-bold">${stats.averageOrderValue.toLocaleString()}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Orders</p>
          <p className="text-xl font-bold">{stats.orderCount}</p>
        </div>
      </div>
      
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Sales trend visualization will be implemented here</p>
      </div>
    </div>
  );
}
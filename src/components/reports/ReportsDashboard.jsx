import { useState } from 'react';
import SalesChart from './SalesChart';
import TopProducts from './TopProducts';
import CustomerStats from './CustomerStats';
import { useOrders } from '../../hooks/useOrders';
import { useCustomers } from '../../hooks/useCustomers';

export default function ReportsDashboard() {
  const [dateRange, setDateRange] = useState('week');
  const { orders } = useOrders();
  const { customers } = useCustomers();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <SalesChart orders={orders} dateRange={dateRange} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <TopProducts orders={orders} />
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Analytics</h3>
          <CustomerStats customers={customers} />
        </div>
      </div>
    </div>
  );
}
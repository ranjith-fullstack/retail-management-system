import React, { useState } from "react";
import RevenueMetrics from "./dashboard/RevenueMetrics";
import TrendChart from "./dashboard/TrendChart";
import QuickActions from "./dashboard/QuickActions";
import ActivityFeed from "./dashboard/ActivityFeed";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartIcon,
  UserIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState("week");

  const metrics = {
    revenue: 12345,
    revenueChange: 12.5,
    orders: 48,
    ordersChange: -5.2,
    averageOrder: 257.19,
    averageOrderChange: 3.8,
  };

  const trendData = {
    title: "Sales Trend",
    values: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    legend: ["Current Period", "Previous Period"],
  };

  const activities = [
    {
      id: 1,
      icon: ShoppingCartIcon,
      iconBg: "bg-blue-500",
      title: "New order received",
      description: "Order #1234 from John Doe",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: 2,
      icon: UserIcon,
      iconBg: "bg-green-500",
      title: "New customer registered",
      description: "Jane Smith created an account",
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
      id: 3,
      icon: CurrencyDollarIcon,
      iconBg: "bg-purple-500",
      title: "Payment received",
      description: "$299.99 received for order #1233",
      timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    },
  ];

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case "new-order":
        navigate("/orders");
        break;
      case "add-product":
        navigate("/products");
        break;
      case "new-customer":
        navigate("/customers");
        break;
      case "create-invoice":
        navigate("/invoices");
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
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

      <RevenueMetrics data={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrendChart data={trendData} />
        </div>
        <div>
          <QuickActions onAction={handleQuickAction} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed activities={activities} />
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Sales:</span>
              <span className="font-semibold text-green-500">$12,345.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Orders:</span>
              <span className="font-semibold">150</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Order Value:</span>
              <span className="font-semibold">$82.30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conversion Rate:</span>
              <span className="font-semibold">5.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function CustomerActivity({ customer }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Activity Summary</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Total Orders</p>
            <p className="text-xl font-bold">{customer.totalOrders}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-xl font-bold">${customer.totalSpent.toLocaleString()}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Preferences</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Newsletter</span>
              <span>{customer.preferences?.newsletter ? 'Subscribed' : 'Not Subscribed'}</span>
            </div>
            <div className="flex justify-between">
              <span>Marketing</span>
              <span>{customer.preferences?.marketing ? 'Opted In' : 'Opted Out'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
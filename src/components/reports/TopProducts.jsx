import React from 'react';
import { getTopProducts } from '../../utils/analytics';

export default function TopProducts({ orders }) {
  const topProducts = getTopProducts(orders);

  return (
    <div className="space-y-4">
      {topProducts.map((product, index) => (
        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-gray-500">{product.units} units sold</p>
          </div>
          <p className="font-semibold">${product.revenue.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
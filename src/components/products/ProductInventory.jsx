import React from 'react';
import StatusBadge from '../common/StatusBadge';

export default function ProductInventory({ product, onUpdateStock }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <StatusBadge status={product.stock > 10 ? 'In Stock' : 'Low Stock'} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Current Stock</span>
          <span className="font-medium">{product.stock} units</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onUpdateStock(product.id, -1)}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
            disabled={product.stock <= 0}
          >
            -1
          </button>
          <button
            onClick={() => onUpdateStock(product.id, 1)}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
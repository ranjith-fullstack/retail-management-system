import React from 'react';
import { 
  PlusIcon, 
  ShoppingCartIcon, 
  UserPlusIcon, 
  DocumentPlusIcon 
} from '@heroicons/react/24/outline';

export default function QuickActions({ onAction }) {
  const actions = [
    { 
      id: 'new-order', 
      title: 'New Order',
      icon: ShoppingCartIcon,
      color: 'bg-blue-500'
    },
    { 
      id: 'add-product', 
      title: 'Add Product',
      icon: PlusIcon,
      color: 'bg-green-500'
    },
    { 
      id: 'new-customer', 
      title: 'New Customer',
      icon: UserPlusIcon,
      color: 'bg-purple-500'
    },
    { 
      id: 'create-invoice', 
      title: 'Create Invoice',
      icon: DocumentPlusIcon,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => onAction(action.id)}
          className="flex flex-col items-center p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <div className={`p-3 rounded-full ${action.color} text-white mb-3`}>
            <action.icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-700">{action.title}</span>
        </button>
      ))}
    </div>
  );
}
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function OrderDetails({ order, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Order Details</h3>
        <button onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Order Number</p>
          <p className="font-medium">{order.orderNumber}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Customer</p>
          <p className="font-medium">{order.customer}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Items</p>
          <div className="mt-2 space-y-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
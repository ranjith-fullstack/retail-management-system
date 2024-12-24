import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function OrderTable({ orders, onSelectOrder, onUpdateStatus }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'cancelled': return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default: return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order #</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr 
              key={order.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelectOrder(order)}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.orderNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">${order.total.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm capitalize">{order.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <select
                  value={order.status}
                  onChange={(e) => {
                    e.stopPropagation();
                    onUpdateStatus(order.id, e.target.value);
                  }}
                  className="border rounded px-2 py-1"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
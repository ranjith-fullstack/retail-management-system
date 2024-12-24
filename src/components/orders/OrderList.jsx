import { useState } from 'react';
import OrderTable from './OrderTable';
import OrderDetails from './OrderDetails';
import { useOrders } from '../../hooks/useOrders';

export default function OrderList() {
  const { orders, updateOrderStatus } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrderTable 
            orders={filteredOrders}
            onSelectOrder={setSelectedOrder}
            onUpdateStatus={updateOrderStatus}
          />
        </div>
        <div>
          {selectedOrder && (
            <OrderDetails 
              order={selectedOrder}
              onClose={() => setSelectedOrder(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
import { useState, useCallback } from 'react';

export function useOrders() {
  const [orders, setOrders] = useState([
    { 
      id: 1, 
      orderNumber: 'ORD-001',
      customer: 'John Doe',
      date: '2024-03-15',
      total: 1299.99,
      status: 'completed',
      paymentStatus: 'paid',
      shippingAddress: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
        zip: '02108'
      },
      items: [
        { id: 1, name: 'Laptop Pro', quantity: 1, price: 999.99 },
        { id: 2, name: 'Designer Shirt', quantity: 2, price: 150.00 }
      ],
      timeline: [
        { status: 'created', date: '2024-03-15T10:00:00Z' },
        { status: 'paid', date: '2024-03-15T10:05:00Z' },
        { status: 'completed', date: '2024-03-15T14:00:00Z' }
      ]
    }
  ]);

  const addOrder = useCallback((order) => {
    const newOrder = {
      ...order,
      id: Date.now(),
      orderNumber: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      timeline: [{
        status: 'created',
        date: new Date().toISOString()
      }]
    };
    setOrders(prev => [...prev, newOrder]);
  }, []);

  const updateOrderStatus = useCallback((orderId, status) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            status,
            timeline: [
              ...order.timeline,
              { status, date: new Date().toISOString() }
            ]
          } 
        : order
    ));
  }, []);

  const updatePaymentStatus = useCallback((orderId, paymentStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            paymentStatus,
            timeline: [
              ...order.timeline,
              { status: `payment_${paymentStatus}`, date: new Date().toISOString() }
            ]
          } 
        : order
    ));
  }, []);

  return {
    orders,
    addOrder,
    updateOrderStatus,
    updatePaymentStatus
  };
}
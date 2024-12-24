import { useState, useCallback } from 'react';

export function useCustomers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      totalOrders: 5,
      totalSpent: 2499.99,
      joinDate: '2024-01-15',
      status: 'active',
      notes: '',
      address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
        zip: '02108'
      },
      preferences: {
        newsletter: true,
        marketing: false
      }
    }
  ]);

  const addCustomer = useCallback((customer) => {
    const newCustomer = {
      ...customer,
      id: Date.now(),
      joinDate: new Date().toISOString(),
      totalOrders: 0,
      totalSpent: 0,
      status: 'active'
    };
    setCustomers(prev => [...prev, newCustomer]);
  }, []);

  const updateCustomer = useCallback((updatedCustomer) => {
    setCustomers(prev => prev.map(customer => 
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    ));
  }, []);

  const updateCustomerStats = useCallback((customerId, orderAmount) => {
    setCustomers(prev => prev.map(customer => 
      customer.id === customerId 
        ? {
            ...customer,
            totalOrders: customer.totalOrders + 1,
            totalSpent: customer.totalSpent + orderAmount
          }
        : customer
    ));
  }, []);

  return {
    customers,
    addCustomer,
    updateCustomer,
    updateCustomerStats
  };
}
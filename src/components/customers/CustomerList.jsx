import { useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerModal from './CustomerModal';
import { useCustomers } from '../../hooks/useCustomers';

export default function CustomerList() {
  const { customers, addCustomer, updateCustomer } = useCustomers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Customers</h2>
        <button
          onClick={() => {
            setEditingCustomer(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Customer
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg"
        />
      </div>

      <CustomerTable
        customers={filteredCustomers}
        onEdit={(customer) => {
          setEditingCustomer(customer);
          setIsModalOpen(true);
        }}
      />

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCustomer(null);
        }}
        onSubmit={(data) => {
          if (editingCustomer) {
            updateCustomer({ ...data, id: editingCustomer.id });
          } else {
            addCustomer(data);
          }
          setIsModalOpen(false);
        }}
        initialData={editingCustomer}
      />
    </div>
  );
}
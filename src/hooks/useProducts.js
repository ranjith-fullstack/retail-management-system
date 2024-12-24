import { useState, useCallback } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Laptop Pro', 
      price: 999.99, 
      stock: 50, 
      category: 'Electronics', 
      sku: 'ELEC-001', 
      description: 'High-performance laptop',
      status: 'active',
      lastUpdated: new Date().toISOString(),
      images: ['laptop.jpg'],
      specifications: {
        brand: 'TechPro',
        model: '2024X',
        warranty: '1 year'
      }
    },
    // Add more sample products...
  ]);

  const addProduct = useCallback((product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      lastUpdated: new Date().toISOString(),
      status: 'active'
    };
    setProducts(prev => [...prev, newProduct]);
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prev => prev.map(product => 
      product.id === updatedProduct.id 
        ? { ...updatedProduct, lastUpdated: new Date().toISOString() }
        : product
    ));
  }, []);

  const deleteProduct = useCallback((productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  }, []);

  const updateStock = useCallback((productId, quantity) => {
    setProducts(prev => prev.map(product => 
      product.id === productId 
        ? { 
            ...product, 
            stock: product.stock + quantity,
            lastUpdated: new Date().toISOString()
          }
        : product
    ));
  }, []);

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    updateStock
  };
}
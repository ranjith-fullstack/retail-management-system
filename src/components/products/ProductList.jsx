import { useState } from 'react';
import ProductTable from './ProductTable';
import ProductToolbar from './ProductToolbar';
import ProductModal from './ProductModal';
import { useProducts } from '../../hooks/useProducts';

export default function ProductList() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Electronics', 'Clothing', 'Home & Garden'];

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const handleSubmit = (productData) => {
    if (editingProduct) {
      updateProduct({ ...productData, id: editingProduct.id });
    } else {
      addProduct(productData);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <ProductToolbar 
        onAddNew={handleAddNew}
        onSearch={setSearchQuery}
        categories={categories}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      
      <ProductTable 
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onSubmit={handleSubmit}
        initialData={editingProduct}
      />
    </div>
  );
}
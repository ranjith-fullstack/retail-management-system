import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductList from './components/products/ProductList';
import OrderList from './components/orders/OrderList';
import CustomerList from './components/customers/CustomerList';
import ReportsDashboard from './components/reports/ReportsDashboard';
import Invoices  from './components/invoice/invoices';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/reports" element={<ReportsDashboard />} />
            <Route path="/invoices" element={<Invoices/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
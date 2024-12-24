import { Link } from 'react-router-dom';
import {
  HomeIcon,
  CubeIcon,
  ShoppingCartIcon,
  UsersIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Products', icon: CubeIcon, path: '/products' },
    { name: 'Orders', icon: ShoppingCartIcon, path: '/orders' },
    { name: 'Customers', icon: UsersIcon, path: '/customers' },
    { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8">R M D</h1>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-700"
          >
            <item.icon className="h-6 w-6" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
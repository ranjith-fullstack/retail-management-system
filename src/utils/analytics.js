export const calculateRevenueStats = (orders = []) => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = orders.length ? totalRevenue / orders.length : 0;
  
  return {
    totalRevenue,
    averageOrderValue,
    orderCount: orders.length
  };
};

export const getTopProducts = (orders = [], limit = 5) => {
  const productSales = {};
  
  orders.forEach(order => {
    order.items?.forEach(item => {
      if (!productSales[item.name]) {
        productSales[item.name] = { units: 0, revenue: 0 };
      }
      productSales[item.name].units += item.quantity;
      productSales[item.name].revenue += item.quantity * item.price;
    });
  });

  return Object.entries(productSales)
    .map(([name, stats]) => ({ name, ...stats }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit);
};

export const getCustomerMetrics = (customers = []) => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active').length;
  const totalSpent = customers.reduce((sum, c) => sum + (c.totalSpent || 0), 0);
  const averageSpent = totalCustomers ? totalSpent / totalCustomers : 0;

  return {
    totalCustomers,
    activeCustomers,
    averageSpent
  };
};
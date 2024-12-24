export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const getDateRange = (range) => {
  const end = new Date();
  const start = new Date();
  
  switch (range) {
    case 'week':
      start.setDate(end.getDate() - 7);
      break;
    case 'month':
      start.setMonth(end.getMonth() - 1);
      break;
    case 'year':
      start.setFullYear(end.getFullYear() - 1);
      break;
    default:
      start.setDate(end.getDate() - 7);
  }
  
  return { start, end };
};
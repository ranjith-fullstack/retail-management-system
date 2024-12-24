import { formatDistanceToNow as formatDistance } from 'date-fns';

export const formatDistanceToNow = (date) => {
  return formatDistance(new Date(date), { addSuffix: true });
};

export const formatDateTime = (date) => {
  return new Date(date).toLocaleString();
};

export const formatDateOnly = (date) => {
  return new Date(date).toLocaleDateString();
};
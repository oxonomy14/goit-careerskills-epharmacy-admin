import { api } from './api';

export const fetchOrders = async ({ page = 1, name = '' }) => {
  const { data } = await api.get('/orders', {
    params: {
      page,
      perPage: 8,
      name,
    },
  });

  return data.data;
};

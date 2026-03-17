import { api } from './api';

export const fetchCustomers = async ({ page = 1, name = '' }) => {
  const { data } = await api.get('/customers', {
    params: {
      page,
      perPage: 8,
      name,
    },
  });

  return data.data;
};

export const fetchCustomerById = async customerId => {
  const { data } = await api.get(`/customers/${customerId}`);
  return data.data;
};

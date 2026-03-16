import { api } from './api'; // твій axios instance

/* export const fetchCustomers = async (page = 1, perPage = 8) => {
  const { data } = await api.get('/customers', {
    params: {
      page,
      perPage,
    },
  });
  return data.data;
}; */

export const fetchCustomers = async ({ page = 1 }) => {
  const { data } = await api.get(`/customers?page=${page}`);
  return data.data;
};

export const fetchCustomerById = async customerId => {
  const { data } = await api.get(`/customers/${customerId}`);
  return data.data;
};

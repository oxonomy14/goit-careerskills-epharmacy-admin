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

/* export const fetchCustomers = async ({ page = 1, name = '' }) => {
  const { data } = await api.get(`/customers?name=${name}&page=${page}`);
  return data.data;
}; */

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

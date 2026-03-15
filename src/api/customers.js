import { api } from './api'; // твій axios instance

export const fetchCustomers = async () => {
  const { data } = await api.get('/customers');
  return data.data;
};

export const fetchCustomerById = async customerId => {
  const { data } = await api.get(`/customers/${customerId}`);
  return data.data;
};

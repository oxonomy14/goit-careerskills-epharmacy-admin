import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomers, fetchCustomerById } from '../../api/customers';

export const getCustomers = createAsyncThunk(
  'customers/getAll',
  async (_, thunkAPI) => {
    try {
      return await fetchCustomers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCustomerById = createAsyncThunk(
  'customers/getById',
  async (customerId, thunkAPI) => {
    try {
      return await fetchCustomerById(customerId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

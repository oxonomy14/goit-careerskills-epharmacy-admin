import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrders } from '../../api/orders';

export const getOrders = createAsyncThunk(
  'orders/getAll',
  async ({ page = 1, name = '' }, thunkAPI) => {
    try {
      return await fetchOrders({ page, name });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

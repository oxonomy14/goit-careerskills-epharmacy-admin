// src/redux/dashboard/dashboardOperations.js;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDashboard } from '../../api/dashboard';

export const getDashboard = createAsyncThunk(
  'dashboard/getDashboard',
  async (_, thunkAPI) => {
    try {
      const data = await fetchDashboard();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

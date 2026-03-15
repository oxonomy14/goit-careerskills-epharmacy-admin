// src/redux/dashboard/dashboardSlice.js;

import { createSlice } from '@reduxjs/toolkit';
import { getDashboard } from './dashboardOperations';

const initialState = {
  statistics: {},
  lastCustomers: [],
  transactions: [],
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getDashboard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statistics = action.payload.statistics;
        state.lastCustomers = action.payload.lastCustomers;
        state.transactions = action.payload.transactions;
      })

      .addCase(getDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;

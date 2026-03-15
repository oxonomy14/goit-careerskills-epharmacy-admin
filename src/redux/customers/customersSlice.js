import { createSlice } from '@reduxjs/toolkit';
import { getCustomers, getCustomerById } from './customersOperations';

const initialState = {
  customers: [],
  customer: null,
  isLoading: false,
  error: null,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,

  extraReducers: builder => {
    builder

      // GET ALL
      .addCase(getCustomers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // GET BY ID
      .addCase(getCustomerById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCustomerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customer = action.payload;
      })
      .addCase(getCustomerById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const customersReducer = customersSlice.reducer;

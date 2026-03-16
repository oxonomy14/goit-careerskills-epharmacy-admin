import { createSlice } from '@reduxjs/toolkit';
import { getCustomers, getCustomerById } from './customersOperations';

const initialState = {
  customers: [],
  customer: null,
  page: 1,
  perPage: 10,
  totalPages: 0,
  totalItems: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  isLoading: false,
  error: null,
  filter: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },

    setPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: builder => {
    builder

      // GET ALL
      .addCase(getCustomers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload.data;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
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

export const { setFilter, setPage } = customersSlice.actions;

export const customersReducer = customersSlice.reducer;

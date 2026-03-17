import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './ordersOperations';

const initialState = {
  orders: [],
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

const ordersSlice = createSlice({
  name: 'orders',
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
      .addCase(getOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.data;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, setPage } = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;

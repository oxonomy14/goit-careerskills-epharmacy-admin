export const selectCustomers = state => state.customers.customers;

export const selectCustomer = state => state.customers.customer;

export const selectCustomersLoading = state => state.customers.isLoading;

// pagination
export const selectPage = state => state.customers.page;

export const selectPerPage = state => state.customers.perPage;

export const selectTotalPages = state => state.customers.totalPages;

export const selectTotalItems = state => state.customers.totalItems;

export const selectHasNextPage = state => state.customers.hasNextPage;

export const selectHasPreviousPage = state => state.customers.hasPreviousPage;

export const selectFilter = state => state.customers.filter;

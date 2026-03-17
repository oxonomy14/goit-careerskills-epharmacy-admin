export const selectOrders = state => state.orders.orders;

export const selectOrdersLoading = state => state.orders.isLoading;

// pagination
export const selectPage = state => state.orders.page;

export const selectPerPage = state => state.orders.perPage;

export const selectTotalPages = state => state.orders.totalPages;

export const selectTotalItems = state => state.orders.totalItems;

export const selectHasNextPage = state => state.orders.hasNextPage;

export const selectHasPreviousPage = state => state.orders.hasPreviousPage;

export const selectFilter = state => state.orders.filter;

// src/redbx/dashboard/dashboardSelector

export const selectStatistics = state => state.dashboard.statistics;

export const selectLastCustomers = state => state.dashboard.lastCustomers;

export const selectTransactions = state => state.dashboard.transactions;

export const selectDashboardLoading = state => state.dashboard.isLoading;

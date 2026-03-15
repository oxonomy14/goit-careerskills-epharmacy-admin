import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { setAuthHeader, clearAuthHeader } from '../../api/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/user/login', credentials);

      const token = response.data.data.accessToken;

      const user = response.data.data.user;

      setAuthHeader(token);

      localStorage.setItem('token', token);

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post('/user/refresh');

      const token = data.data.accessToken;
      const user = data.data.user;

      setAuthHeader(token);

      return {
        token,
        user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);

// LOGOUT
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/user/logout');

      clearAuthHeader();
      localStorage.removeItem('token');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

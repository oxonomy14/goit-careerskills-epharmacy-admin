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
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue('No token');
      }

      setAuthHeader(token);

      const { data } = await api.post('/user/refresh');

      const newToken = data.data.accessToken;
      const user = data.data.user;

      setAuthHeader(newToken);

      return {
        token: newToken,
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }

    clearAuthHeader();

    return true;
  },
);

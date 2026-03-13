import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axios';
import { setAuthHeader } from '../../api/axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/user/login', credentials);

      const token = response.data.data.accessToken;

      setAuthHeader(token);

      localStorage.setItem('token', token);

      return { token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

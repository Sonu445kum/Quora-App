import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (form) => {
  const res = await axios.post('/api/users/login', form);
  localStorage.setItem('token', res.data.token);
  return res.data.user;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (form) => {
  const res = await axios.post('/api/users/register', form);
  localStorage.setItem('token', res.data.token);
  return res.data.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => { state.user = action.payload; })
      .addCase(registerUser.fulfilled, (state, action) => { state.user = action.payload; });
  }
});

export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logUserIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logUserOut: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { logUserIn, logUserOut } = authSlice.actions;

export default authSlice.reducer;

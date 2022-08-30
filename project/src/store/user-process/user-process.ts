import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/store';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
  email: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.email = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.email = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.email = '';
      });
  }
});

export const { setEmail } = userProcess.actions;

import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/store';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});

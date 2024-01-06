import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export const authReducer = (state: RootState) => state.authSlice;
export const authSelector = createSelector([authReducer], (authSlice) => authSlice.auth);

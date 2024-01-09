import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { ApiErrorResponseInterface } from '../../shared/types';
import Toast from 'react-native-toast-message';

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
   if (isRejectedWithValue(action)) {
      const payload = action.payload as ApiErrorResponseInterface;
      if (payload?.data?.message && !Array.isArray(payload.data.message)) {
         Toast.show({
            type: 'error',
            text1: payload.data.message,
         });
      }
   }
   return next(action);
};

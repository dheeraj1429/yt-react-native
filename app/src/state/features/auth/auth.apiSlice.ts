import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserAuthPayload, UserResponseInterface } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLogin } from './auth.slice';

export const authTagTypes = {
   logIn: 'logIn',
   singUp: 'singUp',
};

export const authApiSlice = createApi({
   reducerPath: 'auth',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.BACKEND_URL,
   }),
   tagTypes: [...Object.keys(authTagTypes)],
   endpoints: (builder) => ({
      signIn: builder.mutation<UserResponseInterface, UserAuthPayload>({
         query: (body) => ({
            url: '/auth/signIn',
            method: 'POST',
            body,
         }),
         onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
            try {
               const { data } = await queryFulfilled;
               await AsyncStorage.setItem('user', JSON.stringify(data));
               dispatch(setLogin(data));
            } catch (err) {
               console.log(err);
            }
         },
      }),
      register: builder.mutation<UserResponseInterface, UserAuthPayload>({
         query: (body) => ({
            url: '/auth/register',
            method: 'POST',
            body,
         }),
         onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
            try {
               const { data } = await queryFulfilled;
               await AsyncStorage.setItem('user', JSON.stringify(data));
               dispatch(setLogin(data));
            } catch (err) {
               console.log(err);
            }
         },
      }),
   }),
});

export const { useSignInMutation, useRegisterMutation } = authApiSlice;

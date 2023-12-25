import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserAuthPayload, UserResponseInterface } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tagTypesAr = {
   logIn: 'logIn',
   singUp: 'singUp',
};

export const authApiSlice = createApi({
   reducerPath: 'auth',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.BACKEND_URL,
   }),
   tagTypes: [...Object.keys(tagTypesAr)],
   endpoints: (builder) => ({
      signIn: builder.mutation<UserResponseInterface, UserAuthPayload>({
         query: (body) => ({
            url: '/auth/signIn',
            method: 'POST',
            body,
         }),
         onQueryStarted: async (_, { queryFulfilled }) => {
            try {
               const { data } = await queryFulfilled;
               await AsyncStorage.setItem('user', JSON.stringify(data));
            } catch (err) {
               console.log(err);
            }
         },
      }),
   }),
});

export const { useSignInMutation } = authApiSlice;

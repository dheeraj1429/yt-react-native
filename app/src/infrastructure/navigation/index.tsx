import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { authSelector } from '../../state/features/auth/auth.selector';
import { useAppSelector, useAppDispatch } from '../../state/store/hooks';
import { AppNavigation } from './app.navigation';
import { AuthNavigation } from './auth.navigation';
import { setLogin } from '../../state/features/auth/auth.slice';

export const Navigation = function () {
   const auth = useAppSelector(authSelector);
   const dispatch = useAppDispatch();

   const isLoginExistInCache = async function () {
      const user = await AsyncStorage.getItem('user');
      if (user) {
         dispatch(setLogin(JSON.parse(user)));
      }
   };

   useEffect(() => {
      isLoginExistInCache();
   }, []);

   return <NavigationContainer>{!!auth?.user?._id ? <AppNavigation /> : <AuthNavigation />}</NavigationContainer>;
};

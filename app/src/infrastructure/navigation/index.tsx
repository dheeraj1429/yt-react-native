import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthNavigation } from './auth.navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app.navigation';

export const Navigation = function () {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

   const isLoginExistInCache = async function () {
      const user = await AsyncStorage.getItem('user');
      if (user) {
         setIsLoggedIn(true);
      }
   };

   useEffect(() => {
      isLoginExistInCache();
   }, []);

   return <NavigationContainer>{isLoggedIn ? <AppNavigation /> : <AuthNavigation />}</NavigationContainer>;
};

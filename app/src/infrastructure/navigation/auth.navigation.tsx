import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRoutes } from './navigation.routes';

import Login from '../../screens/Auth/Login';

const Stack = createNativeStackNavigator();

export const AuthNavigation = function () {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationRoutes.login}>
         <Stack.Screen name={navigationRoutes.login} component={Login} />
      </Stack.Navigator>
   );
};

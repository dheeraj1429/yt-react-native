import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LikedMoviesList from '../../screens/LikedMoviesList/LikedMoviesList';
import Settings from '../../screens/Settings/Settings';
import { navigationRoutes } from './navigation.routes';

const Stack = createNativeStackNavigator();

export const SettingNavigator = function () {
   return (
      <Stack.Navigator initialRouteName={navigationRoutes.settings} screenOptions={{ headerShown: false }}>
         <Stack.Screen name={navigationRoutes.settings} component={Settings} />
         <Stack.Screen name={navigationRoutes.likedMoviesList} component={LikedMoviesList} />
      </Stack.Navigator>
   );
};
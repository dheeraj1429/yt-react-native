import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppNavigation } from './app.navigation';
import { navigationRoutes } from './navigation.routes';
import DrawerContent from '../../screens/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = function () {
   return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
         <Drawer.Screen name={navigationRoutes.home} component={AppNavigation} />
      </Drawer.Navigator>
   );
};

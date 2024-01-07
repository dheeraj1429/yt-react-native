import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Home/Home';
import VideoHub from '../../screens/VideoHub/VideoHub';
import { theme } from '../styleComponentTheme';
import { navigationRoutes } from './navigation.routes';
import { SettingNavigator } from './setting.navigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarInactiveTintColor: theme.colors.text.disabledDark,
            tabBarActiveTintColor: theme.colors.text.primaryLight,
            headerShown: false,
            tabBarStyle: {
               backgroundColor: theme.colors.brand.secondary,
               height: theme.sizes.widthAndHeight.grand,
               paddingTop: 20,
            },
         }}
      >
         <Tab.Screen
            name={navigationRoutes.home}
            component={Home}
            options={{
               tabBarShowLabel: false,
               tabBarIcon: ({ color, size }) => (
                  <AntDesign color={color} size={size} name="youtube" style={{ position: 'absolute' }} />
               ),
            }}
         />
         <Tab.Screen
            name={navigationRoutes.settingNavigation}
            component={SettingNavigator}
            listeners={({ navigation, route }) => ({
               blur: () => {
                  const router = route as any;
                  if (!!router?.state?.index && router.state.index > 0) {
                     navigation.dispatch(StackActions.popToTop());
                  }
               },
            })}
            options={{
               tabBarShowLabel: false,
               tabBarIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="settings" style={{ position: 'absolute' }} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

export const AppNavigation = function () {
   return (
      <Stack.Navigator initialRouteName={navigationRoutes.home} screenOptions={{ headerShown: false }}>
         <Stack.Screen name={navigationRoutes.main} component={HomeTabs} />
         <Stack.Screen name={navigationRoutes.VideoHub} component={VideoHub} />
      </Stack.Navigator>
   );
};

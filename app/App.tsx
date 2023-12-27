import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { appRoutes } from './App.Route';
import { SafeArea } from './src/components/Container/Container';
import { paperTheme } from './src/infrastructure/paperTheme/theme';
import { theme } from './src/infrastructure/styleComponentTheme';
import { store } from './src/state/store/store';

import Login from './src/screens/Auth/Login';
import Home from './src/screens/Home/Home';
import MovieInformation from './src/screens/MovieInformation/MovieInformation';
import Settings from './src/screens/Settings/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarInactiveTintColor: theme.colors.text.disabledDark,
            tabBarActiveTintColor: theme.colors.text.primaryLight,
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.colors.brand.secondary, height: theme.sizes.widthAndHeight.grand, paddingTop: 20 },
         }}
      >
         <Tab.Screen
            name={appRoutes.home}
            component={Home}
            options={{
               tabBarShowLabel: false,
               tabBarIcon: ({ color, size }) => <AntDesign color={color} size={size} name="youtube" style={{ position: 'absolute' }} />,
            }}
         />
         <Tab.Screen
            name={appRoutes.settings}
            component={Settings}
            options={{
               tabBarShowLabel: false,
               tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="settings" style={{ position: 'absolute' }} />,
            }}
         />
      </Tab.Navigator>
   );
}

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <PaperProvider theme={paperTheme}>
            <Provider store={store}>
               <SafeArea>
                  <StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
                  <NavigationContainer>
                     <Stack.Navigator initialRouteName={appRoutes.login} screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={appRoutes.login} component={Login} />
                        <Stack.Screen name={appRoutes.main} component={HomeTabs} />
                        <Stack.Screen name={appRoutes.singleMovieInformation} component={MovieInformation} />
                     </Stack.Navigator>
                  </NavigationContainer>
               </SafeArea>
            </Provider>
         </PaperProvider>
      </ThemeProvider>
   );
}

export default App;

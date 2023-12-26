import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeArea } from './src/components/Container/Container';
import { paperTheme } from './src/infrastructure/paperTheme/theme';
import { theme } from './src/infrastructure/styleComponentTheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/state/store/store';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Login from './src/screens/Auth/Login';
import Home from './src/screens/Home/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarInactiveTintColor: theme.colors.text.primaryDark,
            tabBarActiveTintColor: theme.colors.text.primaryLight,
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.colors.brand.secondary, height: theme.sizes.widthAndHeight.grand, paddingTop: 20 },
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarShowLabel: false,
               tabBarIcon: ({ color, size }) => <AntDesign color={color} size={size} name="youtube" style={{ position: 'absolute' }} />,
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
                     <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Main" component={HomeTabs} />
                     </Stack.Navigator>
                  </NavigationContainer>
               </SafeArea>
            </Provider>
         </PaperProvider>
      </ThemeProvider>
   );
}

export default App;

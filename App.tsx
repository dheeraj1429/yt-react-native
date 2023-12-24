import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeArea } from './src/components/Container/Container';
import { theme } from './src/infrastructure/theme';
import Home from './src/screens/Home/Home';
import { store } from './src/state/store/store';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <SafeArea>
               <StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
               <NavigationContainer>
                  <Stack.Navigator
                     initialRouteName="Home"
                     screenOptions={{
                        headerShown: false,
                     }}>
                     {/* <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                           headerShown: false,
                           tabBarIcon: ({ color, size }) => <FontAwesome name="youtube-play" color={color} size={size} />,
                        }}
                     /> */}
                     <Stack.Screen name="Home" component={Home} />
                  </Stack.Navigator>
               </NavigationContainer>
            </SafeArea>
         </Provider>
      </ThemeProvider>
   );
}

export default App;

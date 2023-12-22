import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home/Home';
import SafeArea from './src/components/SafeArea/SafeArea';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';
import { store } from './src/state/store/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <SafeArea>
               <StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
               <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  </Stack.Navigator>
               </NavigationContainer>
            </SafeArea>
         </Provider>
      </ThemeProvider>
   );
}

export default App;

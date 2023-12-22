import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home/Home';
import SafeArea from './src/components/SafeArea/SafeArea';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
   return (
      <SafeArea>
         <ThemeProvider theme={theme}>
            <NavigationContainer>
               <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
               </Stack.Navigator>
            </NavigationContainer>
         </ThemeProvider>
      </SafeArea>
   );
}

export default App;

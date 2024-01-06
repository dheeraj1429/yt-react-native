import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeArea } from './src/components/Container/Container';
import { Navigation } from './src/infrastructure/navigation';
import { paperTheme } from './src/infrastructure/paperTheme/theme';
import { theme } from './src/infrastructure/styleComponentTheme';
import { store } from './src/state/store/store';

function App(): React.JSX.Element {
   return (
      <ThemeProvider theme={theme}>
         <PaperProvider theme={paperTheme}>
            <Provider store={store}>
               <SafeArea>
                  <StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} hidden={false} />
                  <Navigation />
               </SafeArea>
            </Provider>
         </PaperProvider>
      </ThemeProvider>
   );
}

export default App;

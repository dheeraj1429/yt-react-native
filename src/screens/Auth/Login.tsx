import React, { useState } from 'react';
import { LoginContainer, LoginContentContainer } from './Login.style';
import { FullViewContainer, ViewWithSidePadding } from '../../components/Container/Container';
import { Card, CardImage, CardText } from '../../components/Card/Card';
import Box from '../../components/Box/Box';
import { theme } from '../../infrastructure/styleComponentTheme';
import { TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Entypo from 'react-native-vector-icons/Entypo';

interface LoginInterface {}

const schema = yup.object({});

const Login = () => {
   const {} = useForm({
      resolver: yupResolver(schema),
   });
   const [secureTextEntryShow, setSecureTextEntryShow] = useState<boolean>(true);

   return (
      <FullViewContainer>
         <LoginContainer>
            <LoginContentContainer>
               <ViewWithSidePadding>
                  <Box display="flex" flexDirection="column" alignItems="center">
                     <Card customWidth={'80px'} customHeight={'100px'}>
                        <CardImage source={require('../../../public/images/pngwing.com.png')} />
                     </Card>
                     <Box position="top-bottom" size={theme.sizes.spacing.lg} margin={true}>
                        <CardText
                           color={theme.colors.ui.disabled}
                           fontSize={theme.sizes.fontSize['text-2xl']}
                           heading="Enjoy the world of entertainment"
                        />
                     </Box>
                  </Box>
                  <Box position="top-bottom" margin={true} size={theme.sizes.spacing['xl']}>
                     <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
                        <TextInput autoCorrect={false} label="Email or phone number" mode="outlined" />
                     </Box>
                     <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
                        <TextInput
                           autoCorrect={false}
                           right={
                              <TextInput.Icon
                                 onPress={() => setSecureTextEntryShow(!secureTextEntryShow)}
                                 icon={() => <Entypo color={theme.colors.ui.secondary} name={secureTextEntryShow ? 'eye' : 'eye-with-line'} />}
                              />
                           }
                           secureTextEntry={secureTextEntryShow}
                           label="Password"
                           mode="outlined"
                        />
                     </Box>
                  </Box>
               </ViewWithSidePadding>
            </LoginContentContainer>
         </LoginContainer>
      </FullViewContainer>
   );
};

export default Login;

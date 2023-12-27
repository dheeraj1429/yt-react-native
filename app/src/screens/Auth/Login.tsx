import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import * as yup from 'yup';
import Box from '../../components/Box/Box';
import { Card, CardImage, Text } from '../../components/Card/Card';
import { FullViewContainer, ViewWithSidePadding } from '../../components/Container/Container';
import { ErrorView } from '../../components/Error/Error';
import { theme } from '../../infrastructure/styleComponentTheme';
import { ApiErrorResponseInterface, NavigationPropType } from '../../shared/types';
import { useRegisterMutation, useSignInMutation } from '../../state/features/auth/auth.apiSlice';
import { LoginContainer, LoginContentContainer, LoginExtraOptionsContainer } from './Login.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appRoutes } from '../../../App.Route';

interface LoginInterface {
   email: string;
   password: string;
   confirmPassword?: string;
}

const schema = yup.object().shape({
   email: yup.string().email().required('Please enter your email').lowercase().typeError('Please enter a valid email address'),
   password: yup
      .string()
      .required()
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
         'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
      ),
   confirmPassword: yup
      .string()
      .when('$isSignUpUser', (isSignUpUser, schema) => (!!isSignUpUser[0] ? schema.required() : schema.optional()))
      .oneOf([yup.ref('password')], 'Password does not match!'),
});

const Login = ({ navigation }: NavigationPropType) => {
   const [secureTextPasswordShow, setSecureTextPasswordShow] = useState<boolean>(true);
   const [secureTextConfirmPasswordShow, setSecureTextConfirmPasswordShow] = useState<boolean>(true);
   const [isSignUpUser, setIsSignUpUser] = useState<boolean>(false);
   const [showLoading, setShowLoading] = useState<boolean>(false);
   const {
      handleSubmit,
      formState: { errors },
      control,
      reset,
   } = useForm({
      resolver: yupResolver(schema),
      context: { isSignUpUser },
   });
   const [singIn, { isLoading: singInLoading, isSuccess: singInSuccess, error: signInError }] = useSignInMutation();
   const [register, { isLoading: registerLoading, isSuccess: registerSuccess, error: registerError }] = useRegisterMutation();
   const authenticationError: ApiErrorResponseInterface | undefined = (signInError || registerError) as ApiErrorResponseInterface;

   const isLoginExistInCache = async function () {
      setShowLoading(true);
      const user = await AsyncStorage.getItem('user');
      if (user) {
         navigation.navigate(appRoutes.main);
      }
      setShowLoading(false);
   };

   const onSubmit = function (data: LoginInterface) {
      if (!isSignUpUser) return singIn(data);
      return register(data);
   };

   const changeFormHandler = function () {
      setIsSignUpUser(!isSignUpUser);
      reset();
   };

   useEffect(() => {
      isLoginExistInCache();
   }, []);

   useEffect(() => {
      if (singInSuccess || registerSuccess) {
         navigation.navigate(appRoutes.main);
      }
   }, [singInSuccess, registerSuccess]);

   return (
      <FullViewContainer>
         <ViewWithSidePadding flex={1}>
            <LoginContainer>
               <LoginContentContainer>
                  <Box display="flex" flexDirection="column" alignItems="center">
                     <Card customWidth={'80px'} customHeight={'100px'}>
                        <CardImage source={require('../../../public/images/pngwing.com.png')} />
                     </Card>
                     <Box position="top-bottom" size={theme.sizes.spacing.lg} margin={true}>
                        <Text color={theme.colors.ui.disabled} fontSize={theme.sizes.fontSize['text-2xl']}>
                           Enjoy the world of entertainment
                        </Text>
                     </Box>
                  </Box>
                  {showLoading ? (
                     <Box position="top" margin={true} size={theme.sizes.spacing['2xl']}>
                        <ActivityIndicator />
                     </Box>
                  ) : (
                     <Box position="top-bottom" margin={true} size={theme.sizes.spacing['xl']}>
                        <Box position="bottom" margin={true} size={theme.sizes.spacing['lg']}>
                           <Text fontSize={theme.sizes.fontSize['text-6xl']} color={theme.colors.text.primaryLight}>
                              {isSignUpUser ? 'Log In' : 'Sign In'}
                           </Text>
                        </Box>
                        <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
                           <Controller
                              name="email"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                 <TextInput
                                    left={<TextInput.Icon icon="email" />}
                                    error={!!errors?.email?.message || false}
                                    onChangeText={onChange}
                                    value={value || ''}
                                    autoCorrect={false}
                                    label="Email or phone number"
                                    mode="outlined"
                                 />
                              )}
                           />
                           {errors?.email?.message ? <HelperText type="error">{errors.email.message}</HelperText> : null}
                        </Box>
                        <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
                           <Controller
                              name="password"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                 <TextInput
                                    left={<TextInput.Icon icon="lock" />}
                                    error={!!errors?.password?.message || false}
                                    onChangeText={onChange}
                                    value={value || ''}
                                    autoCorrect={false}
                                    right={
                                       <TextInput.Icon
                                          onPress={() => setSecureTextPasswordShow(!secureTextPasswordShow)}
                                          icon={() => (
                                             <Entypo color={theme.colors.ui.secondary} name={secureTextPasswordShow ? 'eye' : 'eye-with-line'} />
                                          )}
                                       />
                                    }
                                    secureTextEntry={secureTextPasswordShow}
                                    label="Password"
                                    mode="outlined"
                                 />
                              )}
                           />
                           {errors?.password?.message ? <HelperText type="error">{errors.password.message}</HelperText> : null}
                        </Box>
                        {isSignUpUser ? (
                           <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
                              <Controller
                                 name="confirmPassword"
                                 control={control}
                                 render={({ field: { onChange, value } }) => (
                                    <TextInput
                                       left={<TextInput.Icon icon="lock" />}
                                       error={!!errors?.password?.message || false}
                                       onChangeText={onChange}
                                       value={value || ''}
                                       autoCorrect={false}
                                       right={
                                          <TextInput.Icon
                                             onPress={() => setSecureTextConfirmPasswordShow(!secureTextConfirmPasswordShow)}
                                             icon={() => (
                                                <Entypo
                                                   color={theme.colors.ui.secondary}
                                                   name={secureTextConfirmPasswordShow ? 'eye' : 'eye-with-line'}
                                                />
                                             )}
                                          />
                                       }
                                       secureTextEntry={secureTextConfirmPasswordShow}
                                       label="Confirm password"
                                       mode="outlined"
                                    />
                                 )}
                              />
                              {errors?.confirmPassword?.message ? <HelperText type="error">{errors.confirmPassword.message}</HelperText> : null}
                           </Box>
                        ) : null}
                        <Box margin={true} position="top" size={theme.sizes.spacing['xl']}>
                           <Button
                              style={{ borderRadius: 5 }}
                              uppercase={true}
                              textColor={theme.colors.text.primaryLight}
                              buttonColor={theme.colors.brand.primary}
                              mode="contained"
                              onPress={handleSubmit(onSubmit)}
                              loading={singInLoading || registerLoading}
                           >
                              Sign In
                           </Button>
                        </Box>
                     </Box>
                  )}

                  {!!authenticationError && authenticationError?.data ? <ErrorView messages={authenticationError.data?.message} /> : null}
               </LoginContentContainer>
               <LoginExtraOptionsContainer>
                  <Box gap={'3px'} display="flex" flexDirection="row" alignItems="center">
                     <Text fontWeight={500} color={theme.colors.ui.secondary} fontSize={theme.sizes.fontSize['text-2xl']}>
                        New to netflix?
                     </Text>
                     <TouchableOpacity onPress={changeFormHandler}>
                        <Text fontWeight={500} fontSize={theme.sizes.fontSize['text-2xl']}>
                           {isSignUpUser ? 'Log In' : 'Sign up now'}
                        </Text>
                     </TouchableOpacity>
                  </Box>
               </LoginExtraOptionsContainer>
            </LoginContainer>
         </ViewWithSidePadding>
      </FullViewContainer>
   );
};

export default Login;

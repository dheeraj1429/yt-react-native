import React from 'react';
import { TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Box from '../../components/Box/Box';
import { Text } from '../../components/Card/Card';
import { ScrollViewWithTheme, ViewWithSidePadding } from '../../components/Container/Container';
import MenuItem, { MenuItemInterface } from '../../components/MenuItem/MenuItem';
import { theme } from '../../infrastructure/styleComponentTheme';
import { SettingContainer } from './Settings.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationPropType } from '../../shared/types';
import { navigationRoutes } from '../../infrastructure/navigation/navigation.routes';
import { useAppDispatch } from '../../state/store/hooks';
import { setLogin } from '../../state/features/auth/auth.slice';

const Settings = ({ navigation }: NavigationPropType) => {
   const dispatch = useAppDispatch();

   const SettingsAr: Array<MenuItemInterface> = [
      {
         icon: (
            <Ionicons
               size={theme.sizes.fontSize['text-3xl']}
               color={theme.colors.text.primaryLight}
               name="notifications"
            />
         ),
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Notifications</Text>,
         id: uuid.v4().toString(),
      },
      {
         icon: <Feather size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="list" />,
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Notifications</Text>,
         id: uuid.v4().toString(),
      },
      {
         icon: (
            <Ionicons size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="settings" />
         ),
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Settings</Text>,
         id: uuid.v4().toString(),
      },
      {
         icon: <Feather size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="user" />,
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Account</Text>,
         id: uuid.v4().toString(),
      },
      {
         icon: (
            <AntDesign
               size={theme.sizes.fontSize['text-3xl']}
               color={theme.colors.text.primaryLight}
               name="infocirlce"
            />
         ),
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Account</Text>,
         id: uuid.v4().toString(),
      },
      {
         icon: (
            <AntDesign size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="like2" />
         ),
         children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Liked</Text>,
         id: uuid.v4().toString(),
         action: () => navigation.navigate(navigationRoutes.likedMoviesList),
      },
   ];

   const logOut = async function () {
      dispatch(setLogin(null));
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login');
   };

   return (
      <ScrollViewWithTheme>
         <ViewWithSidePadding>
            <SettingContainer>
               <Text>Settings</Text>
            </SettingContainer>
            <Box margin={{ top: theme.sizes.spacing['2xl'] }}>
               {SettingsAr.map((item) => (
                  <Box key={item.id} margin={{ bottom: theme.sizes.spacing.md }}>
                     <MenuItem action={item?.action} icon={item.icon}>
                        {item.children}
                     </MenuItem>
                  </Box>
               ))}
            </Box>
            <Box
               display="flex"
               alignItems="center"
               justifyContent="center"
               margin={{ top: theme.sizes.spacing['2xl'] }}
            >
               <TouchableOpacity onPress={logOut}>
                  <Text fontSize={theme.sizes.fontSize['text-2xl']}>Sign Out</Text>
               </TouchableOpacity>
               <Box margin={{ top: theme.sizes.spacing.sm }}>
                  <Text color={theme.colors.ui.secondary} fontSize={theme.sizes.fontSize['text-lg']}>
                     v 0.0.1
                  </Text>
               </Box>
            </Box>
         </ViewWithSidePadding>
      </ScrollViewWithTheme>
   );
};

export default Settings;

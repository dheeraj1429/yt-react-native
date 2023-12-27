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

const SettingsAr: Array<MenuItemInterface> = [
   {
      icon: <Ionicons size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="notifications" />,
      children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Notifications</Text>,
      id: uuid.v4().toString(),
   },
   {
      icon: <Feather size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="list" />,
      children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Notifications</Text>,
      id: uuid.v4().toString(),
   },
   {
      icon: <Ionicons size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="settings" />,
      children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Settings</Text>,
      id: uuid.v4().toString(),
   },
   {
      icon: <Feather size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="user" />,
      children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Account</Text>,
      id: uuid.v4().toString(),
   },
   {
      icon: <AntDesign size={theme.sizes.fontSize['text-3xl']} color={theme.colors.text.primaryLight} name="infocirlce" />,
      children: <Text fontSize={theme.sizes.fontSize['text-xl']}>Account</Text>,
      id: uuid.v4().toString(),
   },
];

const Settings = ({ navigation }: NavigationPropType) => {
   const logOut = async function () {
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login');
   };

   return (
      <ScrollViewWithTheme>
         <ViewWithSidePadding>
            <SettingContainer>
               <Text>Settings</Text>
            </SettingContainer>
            <Box position="top" margin={true} size={theme.sizes.spacing['2xl']}>
               {SettingsAr.map((item) => (
                  <Box key={item.id} position="bottom" margin={true} size={theme.sizes.spacing.md}>
                     <MenuItem icon={item.icon}>{item.children}</MenuItem>
                  </Box>
               ))}
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" margin={true} size={theme.sizes.spacing['2xl']} position="top">
               <TouchableOpacity onPress={logOut}>
                  <Text fontSize={theme.sizes.fontSize['text-2xl']}>Sign Out</Text>
               </TouchableOpacity>
               <Box margin={true} position="top" size={theme.sizes.spacing.sm}>
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

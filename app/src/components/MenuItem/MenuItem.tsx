import React from 'react';
import { ArrowIconContainer, IconAndChildrenContainer, ItemIconContainer, ItemStyleContainer } from './MenuItem.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../infrastructure/styleComponentTheme';
import { TouchableOpacity } from 'react-native';

export interface MenuItemInterface {
   icon: React.ReactNode;
   children?: React.ReactNode;
   arrowIcon?: React.ReactNode;
   id?: string;
   action?: () => void;
}

const MenuItem = ({ icon, arrowIcon, children, action }: MenuItemInterface) => {
   return (
      <TouchableOpacity onPress={action}>
         <ItemStyleContainer>
            <IconAndChildrenContainer>
               <ItemIconContainer>{icon}</ItemIconContainer>
               {children}
            </IconAndChildrenContainer>
            <ArrowIconContainer>
               {arrowIcon || <MaterialIcons name="keyboard-arrow-right" color={theme.colors.text.primaryLight} />}
            </ArrowIconContainer>
         </ItemStyleContainer>
      </TouchableOpacity>
   );
};

export default MenuItem;

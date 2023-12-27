import React, { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { IconButtonContainer } from './IconButton.style';
import { DisplayType, JustifyContentType, AlignItemsType, FlexDirectionType } from '../../shared/types';

export interface IconButtonStyleProps {
   width?: number;
   height?: number;
   borderRadius?: number;
   display?: DisplayType;
   justifyContent?: JustifyContentType;
   alignItems?: AlignItemsType;
   flexDirection?: FlexDirectionType;
   top?: number;
   left?: number;
   right?: number;
   bottom?: number;
   zIndex?: number;
}
export interface IconButtonInterface extends TouchableOpacityProps, IconButtonStyleProps {
   children?: React.ReactNode;
}

const IconButton = forwardRef<TouchableOpacity, IconButtonInterface>(({ children, ...props }, ref) => {
   return (
      <IconButtonContainer ref={ref} {...props}>
         {children}
      </IconButtonContainer>
   );
});

export default IconButton;

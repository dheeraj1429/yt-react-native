import React, { forwardRef } from 'react';
import { TextProps, View, ViewProps, Text } from 'react-native';
import { ChipContainer, ChipTextStyle } from './Chip.style';

export interface ChipProps extends ViewProps {
   children?: React.ReactNode;
}
export interface ChipTextStyleInterface {
   color?: string;
   paddingLeft?: number;
   paddingRight?: number;
   paddingTop?: number;
   paddingBottom?: number;
   fontSize?: number;
   fonWidth?: number;
}
export interface ChipTextInterface extends TextProps, ChipTextStyleInterface {
   heading: string;
}

export const Chip = forwardRef<View, ChipProps>(({ children, ...props }, ref) => {
   return (
      <ChipContainer {...props} ref={ref}>
         {children}
      </ChipContainer>
   );
});

export const ChipText = forwardRef<Text, ChipTextInterface>(({ heading, ...props }, ref) => {
   return (
      <ChipTextStyle {...props} ref={ref}>
         {heading}
      </ChipTextStyle>
   );
});

import React, { forwardRef } from 'react';
import { ChipContainer, ChipTextStyle } from './Chip.style';
import { ChipProps, ChipTextInterface } from '.';
import { View, Text } from 'react-native';

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

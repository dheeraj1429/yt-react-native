import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { BoxProps } from '.';
import { BoxContainer } from './Box.style';

const Box1 = forwardRef<View, BoxProps>(({ children, ...props }, ref) => {
   return (
      <BoxContainer ref={ref} {...props}>
         {children}
      </BoxContainer>
   );
});

export default Box1;

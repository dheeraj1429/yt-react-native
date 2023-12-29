import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { IconButtonInterface } from '.';
import { IconButtonContainer } from './IconButton.style';

const IconButton = forwardRef<TouchableOpacity, IconButtonInterface>(({ children, ...props }, ref) => {
   return (
      <IconButtonContainer ref={ref} {...props}>
         {children}
      </IconButtonContainer>
   );
});

export default IconButton;

import React, { forwardRef, useRef } from 'react';
import { View, ViewProps } from 'react-native';
import { ChipContainer, ChipText } from './Chip.style';

export interface ChipProps extends ViewProps {
   heading: string;
}
export interface ChipRef {}

const Chip = forwardRef<ChipRef, ChipProps>(({ children, heading, ...props }, ref) => {
   const innerRef = useRef<View>(null);

   return (
      <ChipContainer {...props} ref={innerRef}>
         <ChipText>{heading}</ChipText>
      </ChipContainer>
   );
});

export default Chip;

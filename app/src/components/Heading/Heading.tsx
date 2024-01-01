import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeadingContainerInterface, HeadingInterface, ShowAllInterface } from '.';
import { HeadingContainerStyle, HeadingTextStyle, ShowAllTextStyle } from './Heading.style';

export const HeadingContainer = forwardRef<View, HeadingContainerInterface>(({ children, ...props }, ref) => {
   return (
      <HeadingContainerStyle {...props} ref={ref}>
         {children}
      </HeadingContainerStyle>
   );
});

export const HeadingText = forwardRef<Text, HeadingInterface>(({ children, heading, ...props }, ref) => {
   return (
      <HeadingTextStyle ref={ref} {...props}>
         {heading}
      </HeadingTextStyle>
   );
});

export const ShowAllButton = forwardRef<TouchableOpacity, ShowAllInterface>(
   ({ fontWeight, fontSize, color, children, showAll, ...props }, ref) => {
      return (
         <TouchableOpacity {...props} ref={ref}>
            <ShowAllTextStyle fontSize={fontSize} fontWeight={fontWeight} color={color}>
               {showAll}
            </ShowAllTextStyle>
         </TouchableOpacity>
      );
   },
);

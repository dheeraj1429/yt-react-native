import React, { forwardRef, useRef } from 'react';
import { Text, TextProps, TouchableOpacity, View, ViewProps } from 'react-native';
import { HeadingContainerInterface, HeadingInterface, ShowAllInterface } from '.';
import { HeadingContainerStyle, HeadingTextStyle, ShowAllTextStyle } from './Heading.style';

export const HeadingContainer = forwardRef<ViewProps, HeadingContainerInterface>(({ children, ...props }, _) => {
   const headingRef = useRef<View>(null);

   return (
      <HeadingContainerStyle {...props} ref={headingRef}>
         {children}
      </HeadingContainerStyle>
   );
});

export const HeadingText = forwardRef<TextProps, HeadingInterface>(({ children, heading, ...props }, _) => {
   const headingRef = useRef<Text>(null);

   return (
      <HeadingTextStyle {...props} ref={headingRef}>
         {heading}
      </HeadingTextStyle>
   );
});

export const ShowAllButton = forwardRef<TouchableOpacity, ShowAllInterface>(({ fontWeight, fontSize, color, children, showAll, ...props }, _) => {
   const buttonRef = useRef<TouchableOpacity>(null);

   return (
      <TouchableOpacity {...props} ref={buttonRef}>
         <ShowAllTextStyle fontSize={fontSize} fontWeight={fontWeight} color={color}>
            {showAll}
         </ShowAllTextStyle>
      </TouchableOpacity>
   );
});

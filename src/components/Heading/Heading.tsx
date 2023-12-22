import React, { forwardRef, useRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';
import { HeadingContainerStyle, HeadingTextStyle, ShowAllTextStyle } from './Heading.style';

export interface HeadingContainerInterface extends ViewProps {
   children?: React.ReactNode;
}
export interface HeadingInterface extends ViewProps {
   heading?: string;
}
export interface HeadingRef {}
export interface ShowAllInterface extends TouchableOpacityProps {
   showAll?: string;
   children?: React.ReactNode;
}

export const HeadingContainer = forwardRef<ViewProps, HeadingContainerInterface>(({ children, ...props }, _) => {
   const headingRef = useRef<View>(null);

   return (
      <HeadingContainerStyle {...props} ref={headingRef}>
         {children}
      </HeadingContainerStyle>
   );
});

export const HeadingText = forwardRef<ViewProps, HeadingInterface>(({ children, heading, ...props }, _) => {
   const headingRef = useRef<View>(null);

   return (
      <HeadingTextStyle {...props} ref={headingRef}>
         {heading}
      </HeadingTextStyle>
   );
});

export const ShowAllButton = forwardRef<TouchableOpacity, ShowAllInterface>(({ children, showAll, ...props }, _) => {
   const buttonRef = useRef<TouchableOpacity>(null);

   return (
      <TouchableOpacity {...props} ref={buttonRef}>
         <ShowAllTextStyle>{showAll}</ShowAllTextStyle>
      </TouchableOpacity>
   );
});

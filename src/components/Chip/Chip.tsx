import React, { forwardRef } from 'react';
import { TextProps, ViewProps } from 'react-native';
import { ChipContainer, ChipTextStyle } from './Chip.style';

export interface ChipProps extends ViewProps {
   children?: React.ReactNode;
}
export interface ChipRef {}
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

export const Chip = forwardRef<ChipRef, ChipProps>(({ children, ...props }, _) => {
   return <ChipContainer {...props}>{children}</ChipContainer>;
});

export const ChipText = forwardRef<TextProps, ChipTextInterface>(({ heading, ...props }, _) => {
   return <ChipTextStyle {...props}>{heading}</ChipTextStyle>;
});

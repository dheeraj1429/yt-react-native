import React from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';

export interface CardContainerInterface {
   display?: 'flex' | 'block';
   flexDirection?: 'column' | 'row';
   gap?: number;
}
export interface CardImageStyleInterface {
   width?: number;
   height?: number;
}
export interface CardImageInterface extends ImageProps, CardImageStyleInterface {}
export interface CardContainerInterface extends ViewProps, CardContainerInterface {
   children?: React.ReactNode;
}
export interface CardContentContainer extends ViewProps {}
export interface CardHeadingTextStyle {
   fontSize?: number;
   color?: string;
   fontWeight?: number;
}
export interface CardTextInterface extends TextProps, CardHeadingTextStyle {
   heading: string;
}

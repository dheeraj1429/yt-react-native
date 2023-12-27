import React from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';
import { WidthAndHeightInterface } from '../../shared/types';

export interface CardContainerInterface extends WidthAndHeightInterface {
   display?: 'flex' | 'block';
   flexDirection?: 'column' | 'row';
   gap?: number;
}
export interface CardImageStyleInterface extends WidthAndHeightInterface {
   radius?: string;
}
export interface CardImageInterface extends ImageProps, CardImageStyleInterface {}
export interface CardContainerInterface extends ViewProps, CardContainerInterface {
   children?: React.ReactNode;
}
export interface CardContentContainer extends ViewProps, WidthAndHeightInterface {}
export interface CardHeadingTextStyle {
   fontSize?: number;
   color?: string;
   fontWeight?: number;
}
export interface TextInterface extends TextProps, CardHeadingTextStyle {
   length?: number;
   children?: React.ReactNode;
}

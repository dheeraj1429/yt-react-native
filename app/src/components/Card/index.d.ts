import React from 'react';
import { ImageProps, TextProps, ViewProps } from 'react-native';
import { DisplayType, FlexDirectionType, WidthAndHeightInterface } from '../../shared/types';
import { BoxProps } from '../Box';

export interface CardContainerInterface extends WidthAndHeightInterface, BoxProps {
   display?: DisplayType;
   flexDirection?: FlexDirectionType;
   gap?: number;
   backgroundColor?: string;
   borderRadius?: number;
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

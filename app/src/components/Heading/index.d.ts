import React from 'react';
import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';

export interface HeadingContainerInterface extends ViewProps {
   children?: React.ReactNode;
}
export interface HeadingStyleInterface {
   fontSize?: number;
   color?: string;
   fontWeight?: number;
}
export interface HeadingInterface extends TextProps, HeadingStyleInterface {
   heading?: string;
   children?: React.ReactNode;
}
export interface HeadingRef {}
export interface ShowAllStyleInterface extends HeadingStyleInterface {}
export interface ShowAllInterface extends TouchableOpacityProps, ShowAllStyleInterface {
   showAll?: string;
   children?: React.ReactNode;
}

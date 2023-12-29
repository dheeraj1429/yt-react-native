import { TextProps, ViewProps } from 'react-native';

export interface ChipProps extends ViewProps {
   children?: React.ReactNode;
}
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

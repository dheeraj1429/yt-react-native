import { TextInputProps, ViewProps } from 'react-native';
import { DisplayType, JustifyContentType, AlignItemsType, FlexDirectionType } from '../../shared/types';

export interface SearchBarContainerStyleInterface {
   width?: number;
   height?: number;
   backgroundColor?: string;
   display?: DisplayType;
   justifyContent?: JustifyContentType;
   alignItems?: AlignItemsType;
   flexDirection?: FlexDirectionType;
   gap?: number;
   padding?: number;
}
export interface SearchBarContainerInterface extends ViewProps, SearchBarContainerStyleInterface {
   children?: React.ReactNode;
}
export interface SearchBarInputStyleInterface extends SearchBarContainerStyleInterface {}
export interface SearchBarInputInterface extends TextInputProps, SearchBarInputStyleInterface {}
export interface SearchBarIconInterface extends ViewProps {
   children?: React.ReactNode;
}

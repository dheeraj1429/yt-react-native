import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type NavigationPropType = NativeStackScreenProps<RootStackParamList, string, string>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export interface WidthAndHeightInterface {
   customWidth?: string | number;
   customHeight?: string | number;
}
export interface PaginationPayloadInterface {
   page?: number;
}
export interface PaginationInterface {
   page?: number;
   total_pages?: number;
   total_results?: number;
}
export interface ApiErrorResponseInterface {
   data: {
      error: string;
      message: Array<string> | string;
      statusCode: string;
   };
}
export type DisplayType = 'inline' | 'inline-block' | 'block' | 'none' | 'flex';
export type JustifyContentType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial';
export type AlignItemsType = 'center' | 'normal' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'baseline';
export type FlexDirectionType = 'row' | 'column';

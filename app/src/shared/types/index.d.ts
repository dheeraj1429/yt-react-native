import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type NavigationPropType = NativeStackScreenProps<RootStackParamList, string, string>;
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

import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type NavigationPropType = NativeStackScreenProps<RootStackParamList, string, string>;
export interface WidthAndHeightInterface {
   customWidth?: string | number;
   customHeight?: string | number;
}

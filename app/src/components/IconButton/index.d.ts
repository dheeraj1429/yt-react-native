import { TouchableOpacityProps } from 'react-native';
import { PositionType, WidthAndHeightInterface } from '../../shared/types';
import { BoxProps } from '../Box';

export interface IconButtonStyleProps extends WidthAndHeightInterface, BoxProps {
   borderRadius?: string;
   top?: number;
   left?: number;
   right?: number;
   bottom?: number;
   zIndex?: number;
   position?: PositionType;
}
export interface IconButtonInterface extends TouchableOpacityProps, IconButtonStyleProps {
   children?: React.ReactNode;
}

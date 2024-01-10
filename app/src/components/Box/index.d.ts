import { Spacing, WidthAndHeightInterface } from '../../shared/types';
import { DisplayType, AlignItemsType, JustifyContentType, FlexDirectionType } from '../../shared/types';

export interface PaddingAndMarginProps {
   padding?: Spacing;
   margin?: Spacing;
}
export interface BoxProps extends PaddingAndMarginProps, WidthAndHeightInterface {
   children?: React.ReactNode;
   backgroundColor?: string;
   display?: DisplayType;
   justifyContent?: JustifyContentType;
   alignItems?: AlignItemsType;
   flexDirection?: FlexDirectionType;
   gap?: string;
}

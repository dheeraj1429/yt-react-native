import { Spacing } from '../../shared/types';
import { DisplayType, AlignItemsType, JustifyContentType, FlexDirectionType } from '../../shared/types';

export interface BoxProps {
   children?: React.ReactNode;
   backgroundColor?: string;
   display?: DisplayType;
   justifyContent?: JustifyContentType;
   alignItems?: AlignItemsType;
   flexDirection?: FlexDirectionType;
   gap?: string;
   padding?: Spacing;
   margin?: Spacing;
}

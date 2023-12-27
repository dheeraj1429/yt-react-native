import React from 'react';
import { BoxContainer } from './Box.style';
import {
   AlignItemsType,
   DisplayType,
   FlexDirectionType,
   JustifyContentType,
} from '../../shared/types';

export interface SpaceProps {
   position?: 'top' | 'bottom' | 'left' | 'right' | 'top-bottom' | 'left-right' | 'all';
   size?: number;
   padding?: boolean;
   margin?: boolean;
}
export interface BoxProps extends SpaceProps {
   children?: React.ReactNode;
   display?: DisplayType;
   justifyContent?: JustifyContentType;
   alignItems?: AlignItemsType;
   flexDirection?: FlexDirectionType;
   gap?: string;
}

const Box = ({ children, ...props }: BoxProps) => {
   return <BoxContainer {...props}>{children}</BoxContainer>;
};

export default Box;

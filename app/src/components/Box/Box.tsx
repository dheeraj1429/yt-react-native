import React from 'react';
import { BoxContainer } from './Box.style';

export interface BoxProps {
   position?: 'top' | 'bottom' | 'left' | 'right' | 'top-bottom' | 'left-right' | 'all';
   size?: number;
   padding?: boolean;
   margin?: boolean;
   children?: React.ReactNode;
   display?: 'inline' | 'inline-block' | 'block' | 'none' | 'flex';
   justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial';
   alignItems?: 'center' | 'normal' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'baseline';
   flexDirection?: 'row' | 'column';
   gap?: string;
}

const Box = ({ children, ...props }: BoxProps) => {
   return <BoxContainer {...props}>{children}</BoxContainer>;
};

export default Box;

import React, { forwardRef } from 'react';
import { TextInputProps, View, ViewProps } from 'react-native';
import { SearchBarContainerStyle, SearchBarInputStyle, SearchIconStyle } from './SearchBar.style';
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
}
export interface SearchBarContainerInterface extends ViewProps, SearchBarContainerStyleInterface {
   children?: React.ReactNode;
}
export interface SearchBarInputStyleInterface extends SearchBarContainerStyleInterface {}
export interface SearchBarInputInterface extends TextInputProps, SearchBarInputStyleInterface {}
export interface SearchBarIconInterface extends ViewProps {
   children?: React.ReactNode;
}

export const SearchBarContainer = forwardRef<View, SearchBarContainerInterface>(({ children, ...props }, ref) => {
   return (
      <SearchBarContainerStyle ref={ref} {...props}>
         {children}
      </SearchBarContainerStyle>
   );
});

export const SearchInput = ({ ...props }: SearchBarInputInterface) => {
   return <SearchBarInputStyle {...props} />;
};

export const SearchIcon = forwardRef<View, SearchBarIconInterface>(({ children, ...props }, _) => {
   return <SearchIconStyle {...props}>{children}</SearchIconStyle>;
});

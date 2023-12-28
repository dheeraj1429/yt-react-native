import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { SearchBarContainerInterface, SearchBarIconInterface, SearchBarInputInterface } from '.';
import { SearchBarContainerStyle, SearchBarInputStyle, SearchIconStyle } from './SearchBar.style';

export const SearchBarContainer = forwardRef<View, SearchBarContainerInterface>(({ children, ...props }, ref) => {
   return (
      <SearchBarContainerStyle ref={ref} {...props}>
         {children}
      </SearchBarContainerStyle>
   );
});

export const SearchInput = forwardRef<TextInput, SearchBarInputInterface>((props, ref) => {
   return <SearchBarInputStyle {...props} ref={ref} />;
});

export const SearchIcon = forwardRef<View, SearchBarIconInterface>(({ children, ...props }, _) => {
   return <SearchIconStyle {...props}>{children}</SearchIconStyle>;
});

import React from 'react';
import { FullViewContainerStyle, SafeAreaContainer, ScrollViewWithThemeContainer, SidePaddingContainer } from './Container.style';

interface Props {
   children: React.ReactNode;
}

export const SafeArea = ({ children }: Props) => {
   return <SafeAreaContainer>{children}</SafeAreaContainer>;
};

export const ScrollViewWithTheme = ({ children }: Props) => {
   return <ScrollViewWithThemeContainer>{children}</ScrollViewWithThemeContainer>;
};

export const FullViewContainer = ({ children }: Props) => {
   return <FullViewContainerStyle>{children}</FullViewContainerStyle>;
};

export const ViewWithSidePadding = ({ children }: Props) => {
   return <SidePaddingContainer>{children}</SidePaddingContainer>;
};

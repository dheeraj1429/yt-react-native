import React from 'react';
import { FullViewContainerStyle, SafeAreaContainer, ScrollViewWithThemeContainer, SidePaddingContainer } from './Container.style';

interface Props {
   children: React.ReactNode;
}
export interface ViewWithPaddingProps extends Props {
   flex?: number;
}

export const SafeArea = ({ children }: Props) => <SafeAreaContainer>{children}</SafeAreaContainer>;
export const ScrollViewWithTheme = ({ children }: Props) => <ScrollViewWithThemeContainer>{children}</ScrollViewWithThemeContainer>;
export const FullViewContainer = ({ children }: Props) => <FullViewContainerStyle>{children}</FullViewContainerStyle>;
export const ViewWithSidePadding = ({ children, ...props }: ViewWithPaddingProps) => (
   <SidePaddingContainer {...props}>{children}</SidePaddingContainer>
);

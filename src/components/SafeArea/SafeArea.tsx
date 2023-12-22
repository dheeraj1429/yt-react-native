import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface SafeAreaInterface {
   children: React.ReactNode;
}

const SafeAreaContainer = styled(SafeAreaView)`
   flex: 1;
   background-color: ${props => props.theme.colors.brand.secondary};
`;

export const ScrollViewWithThemeContainer = styled(ScrollView)`
   flex: 1;
   background-color: ${props => props.theme.colors.brand.secondary};
`;

const SafeArea = ({ children }: SafeAreaInterface) => {
   return <SafeAreaContainer>{children}</SafeAreaContainer>;
};

export const ScrollViewWithTheme = ({ children }: { children: React.ReactNode }) => {
   return <ScrollViewWithThemeContainer>{children}</ScrollViewWithThemeContainer>;
};

export default SafeArea;

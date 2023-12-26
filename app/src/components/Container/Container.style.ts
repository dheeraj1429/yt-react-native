import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { ViewWithPaddingProps } from './Container';

export const SafeAreaContainer = styled(SafeAreaView)`
   flex: 1;
   background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const ScrollViewWithThemeContainer = styled(ScrollView)`
   flex: 1;
   background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const FullViewContainerStyle = styled(View)`
   flex: 1;
   background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const SidePaddingContainer = styled(View)<ViewWithPaddingProps>`
   padding-right: ${(props) => props.theme.sizes.spacing.md + 'px'};
   padding-left: ${(props) => props.theme.sizes.spacing.md + 'px'};
   ${(props) => props.flex && `flex: ${props.flex}`};
`;

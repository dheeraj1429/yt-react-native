import { Text } from 'react-native';
import { View } from 'react-native';
import { ChipProps } from 'react-native-paper';
import styled from 'styled-components/native';

export const ChipContainer = styled(View)<ChipProps>`
   border-radius: ${props => props.theme.sizes.spacing.md + 'px'};
   background-color: ${props => props.theme.colors.ui.disabled};
`;

export const ChipText = styled(Text)`
   padding-left: ${props => props.theme.sizes.spacing.md + 'px'};
   padding-right: ${props => props.theme.sizes.spacing.md + 'px'};
   padding-top: ${props => props.theme.sizes.spacing.sm + 'px'};
   padding-bottom: ${props => props.theme.sizes.spacing.sm + 'px'};
   color: ${props => props.theme.colors.brand.secondary};
   font-size: ${props => props.theme.sizes.fontSize['text-xl'] + 'px'};
   font-weight: 400;
`;

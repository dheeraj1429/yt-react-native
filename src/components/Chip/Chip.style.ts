import { Text } from 'react-native';
import { View } from 'react-native';
import { ChipProps } from 'react-native-paper';
import styled from 'styled-components/native';
import { ChipTextStyleInterface } from './Chip';

export const ChipContainer = styled(View)<ChipProps>`
   border-radius: ${props => props.theme.sizes.spacing.md + 'px'};
   background-color: ${props => props.theme.colors.ui.disabled};
`;

export const ChipTextStyle = styled(Text)<ChipTextStyleInterface>`
   padding-left: ${props => (props.paddingLeft ? `${props.paddingLeft}px` : props.theme.sizes.spacing.md + 'px')};
   padding-right: ${props => (props.paddingRight ? `${props.paddingRight}px` : props.theme.sizes.spacing.md + 'px')};
   padding-top: ${props => (props.paddingTop ? `${props.paddingTop}px` : props.theme.sizes.spacing.sm + 'px')};
   padding-bottom: ${props => (props.paddingBottom ? `${props.paddingBottom}px` : props.theme.sizes.spacing.sm + 'px')};
   color: ${props => (props.color ? props.color : props.theme.colors.brand.secondary)};
   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : props.theme.sizes.fontSize['text-xl'] + 'px')};
   font-weight: ${props => (props.fonWidth ? props.fonWidth : 400)};
`;

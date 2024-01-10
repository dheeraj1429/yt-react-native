import styled from 'styled-components/native';
import { View } from 'react-native';
import { getSpaceStyle } from '../../utils/helper';
import { BoxProps, PaddingAndMarginProps } from '.';

export const BoxSpacingFunction = ({ padding, margin }: PaddingAndMarginProps) => `
   ${!!margin ? getSpaceStyle({ ...margin, PrType: 'margin' }) : 'margin: 0px;'}
   ${!!padding ? getSpaceStyle({ ...padding, PrType: 'padding' }) : 'padding: 0px;'}
`;

export const BoxContainer = styled(View)<BoxProps>`
   ${({ padding, margin }) => BoxSpacingFunction({ padding, margin })};
   ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
   ${(props) => props.display && `display: ${props.display}`};
   ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
   ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
   ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
   ${(props) => props.gap && `gap: ${props.gap}`};
   width: ${(props) => (props.customWidth ? props.customWidth : 'auto')};
   height: ${(props) => (props.customHeight ? props.customHeight : 'auto')};
`;

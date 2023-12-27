import styled from 'styled-components/native';
import { getMarginStyle, getPaddingStyle } from '../../utils/helper';
import { BoxProps } from './Box';

export const BoxContainer = styled.View<BoxProps>`
   ${({ position, size, padding, margin }) => `
     ${!!margin ? getMarginStyle(position, size) : 'margin: 0px;'}
     ${!!padding ? getPaddingStyle(position, size) : 'padding: 0px;'}
 `};
   ${(props) => props.display && `display: ${props.display}`};
   ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
   ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
   ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
   ${(props) => props.gap && `gap: ${props.gap}`};
`;

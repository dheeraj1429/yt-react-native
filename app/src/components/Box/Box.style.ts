import styled from 'styled-components/native';
import { View } from 'react-native';
import { getSpaceStyle } from '../../utils/helper';
import { BoxProps } from '.';

export const BoxContainer = styled(View)<BoxProps>`
   ${({ backgroundColor, padding, margin }) => `
      ${!!margin ? getSpaceStyle({ ...margin, PrType: 'margin' }) : 'margin: 0px;'}
      ${!!padding ? getSpaceStyle({ ...padding, PrType: 'padding' }) : 'padding: 0px;'}
      ${!!backgroundColor ? `background-color: ${backgroundColor};` : 'background-color: transparent;'}
   `};
   ${(props) => props.display && `display: ${props.display}`};
   ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
   ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
   ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
   ${(props) => props.gap && `gap: ${props.gap}`};
`;

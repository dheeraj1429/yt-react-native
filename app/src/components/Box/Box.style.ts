import { BoxProps } from './Box';
import styled from 'styled-components/native';

const generateStyles = (position: BoxProps['position'], pr: string, size?: number) => {
   switch (position) {
      case 'top':
         return `${pr}-top: ${size}px;`;
      case 'bottom':
         return `${pr}-bottom: ${size}px;`;
      case 'left':
         return `${pr}-left: ${size}px;`;
      case 'right':
         return `${pr}-right: ${size}px;`;
      case 'top-bottom':
         return `${pr}-top: ${size}px; ${pr}-bottom: ${size}px;`;
      case 'left-right':
         return `${pr}-left: ${size}px; ${pr}-right: ${size}px;`;
      case 'all':
         return `${pr}: ${size}px;`;
      default:
         return '';
   }
};

const getPaddingStyle = (position: BoxProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'padding', size);
};

const getMarginStyle = (position: BoxProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'margin', size);
};

export const BoxContainer = styled.View<BoxProps>`
   ${({ position, size, padding, margin }) => `
     ${!!margin ? getMarginStyle(position, size) : 'margin: 0px;'}
     ${!!padding ? getPaddingStyle(position, size) : 'padding: 0px;'}
 `};
   ${props => props.display && `display: ${props.display}`};
   ${props => props.alignItems && `align-items: ${props.alignItems}`};
   ${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
   ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`};
   ${props => props.gap && `gap: ${props.gap}`};
`;

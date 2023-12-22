import React from 'react';
import styled from 'styled-components/native';

interface SpacerProps {
   position?: 'top' | 'bottom' | 'left' | 'right' | 'top-bottom' | 'left-right' | 'all';
   size?: number;
   padding?: boolean;
   margin?: boolean;
   children?: React.ReactNode;
}

const generateStyles = (position: SpacerProps['position'], pr: string, size?: number) => {
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

const getPaddingStyle = (position: SpacerProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'padding', size);
};

const getMarginStyle = (position: SpacerProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'margin', size);
};

const SpacerContainer = styled.View<SpacerProps>`
   ${({ position, size, padding, margin }) => `
    ${!!margin ? getMarginStyle(position, size) : 'margin: 0px;'}
    ${!!padding ? getPaddingStyle(position, size) : 'padding: 0px;'}
`}
`;

const Spacer: React.FC<SpacerProps> = ({ position, size, padding, margin, children }) => {
   return (
      <SpacerContainer position={position} size={size} padding={padding} margin={margin}>
         {children}
      </SpacerContainer>
   );
};

export default Spacer;

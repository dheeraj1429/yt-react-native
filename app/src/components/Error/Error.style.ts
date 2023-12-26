import { View } from 'react-native';
import styled from 'styled-components/native';
import { ErrorStyleInterface } from './Error';
import { theme } from '../../infrastructure/styleComponentTheme';

const generateBackground = function (severity: ErrorStyleInterface['severity']) {
   if (severity === 'error') {
      return theme.colors.text.errorDark;
   } else if (severity === 'warning') {
      return theme.colors.text.secondaryDark;
   } else if (severity === 'info') {
      return theme.colors.text.successDark;
   } else if (severity === 'success') {
      return theme.colors.text.successLight;
   }
};

export const ErrorContainer = styled(View)<ErrorStyleInterface>`
   padding: ${(props) => (props?.padding ? props.padding : props.theme.sizes.spacing.md + 'px')};
   border-radius: ${(props) => (props.radius ? props.radius : props.theme.sizes.fontSize['text-xs'] + 'px')};
   background-color: ${(props) => generateBackground(props.severity)};
   display: flex;
   flex-direction: row;
   gap: ${(props) => (props.gap ? props.gap : '7px')};
`;

export const ErrorIconView = styled(View)``;

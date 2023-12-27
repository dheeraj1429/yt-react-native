import React from 'react';
import { ErrorContainer, ErrorIconView } from './Error.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../infrastructure/styleComponentTheme';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text } from '../Card/Card';
import Box from '../Box/Box';

export interface ErrorStyleInterface {
   severity?: 'error' | 'warning' | 'info' | 'success';
   padding?: string;
   radius?: string;
   gap?: string;
}

export interface ErrorInterface extends ErrorStyleInterface {
   children?: React.ReactNode;
}

export const ErrorView = ({ messages }: { messages: Array<string> | string }) => {
   return Array.isArray(messages) ? (
      messages.map((item) => (
         <Box position="bottom" margin={true} size={theme.sizes.spacing.lg}>
            <Error key={item} severity="error">
               <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-lg']}>
                  {item}
               </Text>
            </Error>
         </Box>
      ))
   ) : (
      <Error severity="error">
         <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-lg']}>
            {messages}
         </Text>
      </Error>
   );
};

const Error = ({ severity, children, ...props }: ErrorInterface) => {
   return (
      <ErrorContainer severity={severity} {...props}>
         <ErrorIconView>
            {severity === 'error' ? (
               <MaterialIcons size={theme.sizes.widthAndHeight.xl} name="error" />
            ) : severity === 'warning' ? (
               <Foundation name="alert" />
            ) : severity === 'info' ? (
               <AntDesign name="infocirlce" />
            ) : severity === 'success' ? (
               <AntDesign name="checkcircle" />
            ) : null}
         </ErrorIconView>
         {children}
      </ErrorContainer>
   );
};
export default Error;

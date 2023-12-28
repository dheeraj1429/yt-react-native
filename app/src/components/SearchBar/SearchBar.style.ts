import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { SearchBarContainerStyleInterface, SearchBarInputStyleInterface } from './SearchBar';

export const SearchBarContainerStyle = styled(View)<SearchBarContainerStyleInterface>`
   border: 1px solid red;
   width: ${(props) => (props.width ? `${props.width}px` : '100%')};
   height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
   background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
   ${(props) => props.display && `display: ${props.display}`};
   ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
   ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
   ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
   ${(props) => props.gap && `gap: ${props.gap}`};
`;

export const SearchBarInputStyle = styled(TextInput)<SearchBarInputStyleInterface>`
   width: 100%;
   background-color: red;
   width: ${(props) => (props.width ? `${props.width}px` : '100%')};
   height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
   background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
`;

export const SearchIconStyle = styled(View)``;

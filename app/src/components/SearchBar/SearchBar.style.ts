import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { SearchBarContainerStyleInterface, SearchBarInputStyleInterface } from '.';

export const SearchBarContainerStyle = styled(View)<SearchBarContainerStyleInterface>`
   width: ${(props) => (props.width ? `${props.width}px` : '100%')};
   height: ${(props) => (props.height ? `${props.height}px` : '100%')};
   background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
   display: ${(props) => (props.display ? props.display : 'flex')};
   align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
   justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
   flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
   gap: ${(props) => (props.gap ? props.gap : 'auto')};
   padding: ${(props) => (props.padding ? `${props.padding}px` : '1px')};
   border-radius: 4px;
`;

export const SearchBarInputStyle = styled(TextInput)<SearchBarInputStyleInterface>`
   width: 100%;
   width: ${(props) => (props.width ? `${props.width}px` : '90%')};
   height: ${(props) => (props.height ? `${props.height}px` : '30px')};
   background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
   color: ${(props) => props.theme.colors.text.primaryLight};
`;

export const SearchIconStyle = styled(View)<SearchBarContainerStyleInterface>`
   width: ${(props) => (props.width ? `${props.width}px` : '10%')};
   height: ${(props) => (props.height ? `${props.height}px` : '100%')};
   display: ${(props) => (props.display ? props.display : 'flex')};
   align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
   justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
   flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
   gap: ${(props) => (props.gap ? props.gap : 'auto')};
   justify-content: center;
`;

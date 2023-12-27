import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { IconButtonStyleProps } from './IconButton';

export const IconButtonContainer = styled(TouchableOpacity)<IconButtonStyleProps>`
   width: ${(props) => (props.width ? `${props.width}px` : props.theme.sizes.widthAndHeight.giga + 'px')};
   height: ${(props) => (props.height ? `${props.height}px` : props.theme.sizes.widthAndHeight.giga + 'px')};
   border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '100px')};
   background-color: ${(props) => props.theme.colors.ui.primary};
   display: ${(props) => (props.display ? props.display : 'flex')};
   align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
   justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
   flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
   position: absolute;
   ${(props) => props.top && `top: ${props.top}px`};
   ${(props) => props.bottom && `bottom: ${props.bottom}px`};
   ${(props) => props.left && `left: ${props.left}px`};
   ${(props) => props.right && `right: ${props.right}px`};
   ${(props) => props.zIndex && `z-index: ${props.zIndex}`};
`;

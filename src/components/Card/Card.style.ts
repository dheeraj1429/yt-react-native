import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { CardContainerInterface, CardContentContainer, CardHeadingTextStyle, CardImageStyleInterface } from '.';

export const CardContainer = styled(View)<CardContainerInterface>`
   display: ${props => (props.display ? props.display : 'block')};
   flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'column')};
   gap: ${props => (props.gap ? `${props.gap}px` : 'auto')};
   width: ${props => (props.customWidth ? props.customWidth : '100%')};
   height: ${props => (props.customHeight ? props.customHeight : 'auto')};
`;

export const ImageContainer = styled(Image)<CardImageStyleInterface>`
   width: ${props => (props.customWidth ? props.customWidth : '100%')};
   height: ${props => (props.customHeight ? props.customHeight : '100%')};
   border-radius: ${props => (props.radius ? props.radius : '8px')};
`;

export const ContentContainer = styled(View)<CardContentContainer>`
   width: ${props => (props.customWidth ? props.customWidth : '100%')};
   height: ${props => (props.customWidth ? props.customWidth : 'auto')};
`;

export const CardStyledText = styled(Text)<CardHeadingTextStyle>`
   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : props.theme.sizes.fontSize['text-3xl'] + 'px')};
   font-weight: ${props => (props.fontWeight ? props.fontWeight : 600)};
   color: ${props => (props.color ? props.color : props.theme.colors.brand.muted)};
`;

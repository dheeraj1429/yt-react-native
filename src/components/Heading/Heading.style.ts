import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { HeadingStyleInterface, ShowAllStyleInterface } from '.';

export const HeadingContainerStyle = styled(View)`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const HeadingTextStyle = styled(Text)<HeadingStyleInterface>`
   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : props.theme.sizes.fontSize['text-2xl'] + 'px')};
   font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
   color: ${props => (props.color ? props.color : props.theme.colors.brand.secondary)};
`;

export const ShowAllTextStyle = styled(Text)<ShowAllStyleInterface>`
   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : props.theme.sizes.fontSize['text-lg'] + 'px')};
   font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
   color: ${props => (props.color ? props.color : props.theme.colors.ui.secondary)};
`;

import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const HeadingContainerStyle = styled(View)`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const HeadingTextStyle = styled(Text)`
   font-size: ${props => props.theme.sizes.fontSize['text-2xl'] + 'px'};
   font-weight: 500;
   color: ${props => props.theme.colors.brand.secondary};
`;

export const ShowAllTextStyle = styled(Text)`
   font-size: ${props => props.theme.sizes.fontSize['text-lg'] + 'px'};
`;

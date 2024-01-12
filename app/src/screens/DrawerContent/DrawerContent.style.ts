import { View } from 'react-native';
import styled from 'styled-components/native';

export const DrawerContentContainer = styled(View)`
   flex: 1;
   background-color: ${(props) => props.theme.colors.text.primaryDark};
`;

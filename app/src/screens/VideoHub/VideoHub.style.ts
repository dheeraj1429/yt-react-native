import { View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const MovieInformationContainer = styled(View)``;

export const StyledButton = styled(Button)`
   border-radius: 0px;
   border-radius: 4px;
   background-color: ${(props) => props.theme.colors.text.gray};
`;

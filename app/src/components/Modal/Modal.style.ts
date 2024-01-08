import { View } from 'react-native';
import { Modal } from 'react-native-paper';
import styled from 'styled-components/native';

export const ModalContainerStyled = styled(Modal)`
   padding: ${(props) => props.theme.sizes.spacing['lg'] + 'px'};
`;

export const ModalContentStyled = styled(View)`
   background-color: ${(props) => props.theme.colors.text.gray};
   border-radius: 4px;
`;

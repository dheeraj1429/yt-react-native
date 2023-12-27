import { View } from 'react-native';
import styled from 'styled-components/native';

export const ItemStyleContainer = styled(View)`
   padding: ${(props) => props.theme.sizes.spacing.lg + 'px'};
   width: 100%;
   background-color: ${(props) => props.theme.colors.ui.primary};
   border-radius: 5px;
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
`;

export const IconAndChildrenContainer = styled(View)`
   display: flex;
   flex-direction: row;
`;

export const ItemIconContainer = styled(View)`
   width: ${(props) => props.theme.sizes.widthAndHeight.giga + 'px'};
`;

export const ArrowIconContainer = styled(View)``;

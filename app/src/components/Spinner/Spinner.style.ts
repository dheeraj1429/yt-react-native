import { View } from 'react-native';
import styled from 'styled-components/native';
import { SpinnerStyleInterface } from './Spinner';

export const SpinnerViewContainer = styled(View)<SpinnerStyleInterface>`
   position: ${props => (props.position ? props.position : 'relative')};
   z-index: ${props => (props.zIndex ? props.zIndex : 100)};
   top: ${props => (props.top ? props.top : 'auto')};
   left: ${props => (props.left ? props.left : 'auto')};
`;

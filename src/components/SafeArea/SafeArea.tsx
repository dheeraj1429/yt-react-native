import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../infrastructure/theme';

interface SafeAreaInterface {
   children: React.ReactNode;
}

const SafeAreaContainer = styled(SafeAreaView)`
   flex: 1;
`;

const SafeArea = ({ children }: SafeAreaInterface) => {
   return <SafeAreaContainer>{children}</SafeAreaContainer>;
};

export default SafeArea;

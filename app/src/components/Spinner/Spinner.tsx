import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, ViewProps } from 'react-native';
import { SpinnerViewContainer } from './Spinner.style';
import { Spacing } from '../../infrastructure/styleComponentTheme/sizes';
import { PaddingAndMarginProps } from '../Box';

export interface SpinnerInterface extends ActivityIndicatorProps {}
export interface SpinnerStyleInterface extends PaddingAndMarginProps {
   position?: 'absolute' | 'relative';
   zIndex?: number;
   top?: string;
   left?: string;
}
export interface SpinnerContainer extends ViewProps, SpinnerStyleInterface {
   children?: React.ReactNode;
}

export const SpinnerContainer = ({ children, ...props }: SpinnerContainer) => {
   return <SpinnerViewContainer {...props}>{children}</SpinnerViewContainer>;
};

export const Spinner = (props: SpinnerInterface) => {
   return <ActivityIndicator {...props} />;
};

import React, { forwardRef } from 'react';
import { CardContainer, CardStyledText, ContentContainer, ImageContainer } from './Card.style';
import { ImageProps } from 'react-native';
import { CardContainerInterface, CardContentContainer, TextInterface, CardImageInterface } from '.';

export const CardImage = forwardRef<ImageProps, CardImageInterface>((props, _) => {
   return <ImageContainer {...props} />;
});

export const CardContent = ({ children, ...props }: CardContentContainer) => {
   return <ContentContainer {...props}>{children}</ContentContainer>;
};

export const Card = ({ children, ...props }: CardContainerInterface) => {
   return <CardContainer {...props}>{children}</CardContainer>;
};

export const Text = ({ heading, length, ...props }: TextInterface) => {
   return <CardStyledText {...props}>{heading.length >= (length! || 70) ? `${heading.slice(0, length || 70)}...` : heading}</CardStyledText>;
};
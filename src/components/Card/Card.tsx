import React, { forwardRef } from 'react';
import { CardContainer, CardText, ContentContainer, ImageContainer } from './Card.style';
import { ImageProps } from 'react-native';
import { CardContainerInterface, CardContentContainer, CardTextInterface, CardImageInterface } from '.';

export const CardImage = forwardRef<ImageProps, CardImageInterface>((props, _) => {
   return <ImageContainer {...props} />;
});

export const CardContent = ({ children, ...props }: CardContentContainer) => {
   return <ContentContainer {...props}>{children}</ContentContainer>;
};

export const Card = ({ children, ...props }: CardContainerInterface) => {
   return <CardContainer {...props}>{children}</CardContainer>;
};

export const CardHeading = ({ heading, ...props }: CardTextInterface) => {
   return <CardText {...props}>{heading}</CardText>;
};

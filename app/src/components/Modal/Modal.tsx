import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { ModalProps, Portal } from 'react-native-paper';
import { ModalContainerStyled, ModalContentStyled } from './Modal.style';

export interface ModalContainerInterface extends ModalProps {
   hideModal: () => void;
}
export interface ModalContentInterface extends ViewProps {
   children?: React.ReactNode;
}

export const ModalContainer = function ({ children, visible, hideModal }: ModalContainerInterface) {
   return (
      <Portal>
         <ModalContainerStyled visible={visible} onDismiss={hideModal}>
            {children}
         </ModalContainerStyled>
      </Portal>
   );
};

export const ModalContent = forwardRef<View, ModalContentInterface>(({ children, ...props }, ref) => {
   return (
      <ModalContentStyled {...props} ref={ref}>
         {children}
      </ModalContentStyled>
   );
});

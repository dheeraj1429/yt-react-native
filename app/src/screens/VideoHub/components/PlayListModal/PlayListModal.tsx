import React from 'react';
import { ModalContainer, ModalContent } from '../../../../components/Modal/Modal';
import { Text } from '../../../../components/Card/Card';
import { Divider } from 'react-native-paper';
import Box from '../../../../components/Box/Box';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { TouchableOpacity } from 'react-native';

export interface PlaylistInterface {
   hideModal: () => void;
   visible: boolean;
   movieId: string;
}

const PlayListModal = ({ hideModal, visible }: PlaylistInterface) => {
   return (
      <ModalContainer hideModal={hideModal} visible={visible}>
         <ModalContent>
            <Box>
               <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                  <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                     Add to...
                  </Text>
               </Box>
               <Divider />
            </Box>
            <Box>
               <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                  <TouchableOpacity>
                     <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                        Create New Playlist
                     </Text>
                  </TouchableOpacity>
               </Box>
               <Divider />
            </Box>
         </ModalContent>
      </ModalContainer>
   );
};

export default PlayListModal;

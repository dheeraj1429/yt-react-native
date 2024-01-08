import React, { Fragment, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import { ModalContainer, ModalContent } from '../../../../components/Modal/Modal';
import { Spinner, SpinnerContainer } from '../../../../components/Spinner/Spinner';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import {
   useLazyGetUserPlayListsQuery,
   useDeletePlayListMutation,
} from '../../../../state/features/playList/playList.apiSlice';
import { checkUserIsLoggedIn } from '../../../../utils/helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconButton from '../../../../components/IconButton/IconButton';

export interface PlaylistInterface {
   hideModal: () => void;
   visible: boolean;
   movieId: string;
   showCreatePlayListHandler: () => void;
}

const PlayListModal = ({ hideModal, visible, showCreatePlayListHandler }: PlaylistInterface) => {
   const [getPlayLists, { isLoading: getPlayListsLoading, data: getPlayListsData }] = useLazyGetUserPlayListsQuery();
   const [removePlayList] = useDeletePlayListMutation();

   const getUserPlayListsHandler = async () => {
      const userObject = await checkUserIsLoggedIn();
      const userId = userObject?.user?._id;
      if (userId) {
         getPlayLists({ userId });
      }
   };

   useEffect(() => {
      getUserPlayListsHandler();
   }, []);

   return (
      <Fragment>
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
               {getPlayListsLoading ? (
                  <SpinnerContainer>
                     <Spinner />
                  </SpinnerContainer>
               ) : null}
               {getPlayListsData?.playlists.length
                  ? getPlayListsData.playlists.map((item) => (
                       <Box key={item._id}>
                          <Box
                             display="flex"
                             flexDirection="row"
                             justifyContent="space-between"
                             padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}
                          >
                             <TouchableOpacity>
                                <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                                   {item.playListName}
                                </Text>
                             </TouchableOpacity>
                             <IconButton position="relative" onPress={() => removePlayList({ playListId: item._id })}>
                                <MaterialIcons name="delete" color={theme.colors.text.disabledLight} />
                             </IconButton>
                          </Box>
                          <Divider />
                       </Box>
                    ))
                  : null}
               <Box>
                  <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                     <TouchableOpacity onPress={showCreatePlayListHandler}>
                        <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                           Create New Playlist
                        </Text>
                     </TouchableOpacity>
                  </Box>
                  <Divider />
               </Box>
            </ModalContent>
         </ModalContainer>
      </Fragment>
   );
};

export default PlayListModal;

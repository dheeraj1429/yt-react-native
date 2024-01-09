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
   useStoreMovieInPlaylistMutation,
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

const PlayListModal = ({ hideModal, visible, showCreatePlayListHandler, movieId }: PlaylistInterface) => {
   const [getPlayLists, { isLoading: getPlayListsLoading, data: getPlayListsData }] = useLazyGetUserPlayListsQuery();
   const [storeMovieInPlayList, { isSuccess: storeMovieInPlayListSuccess }] = useStoreMovieInPlaylistMutation();
   const [removePlayList] = useDeletePlayListMutation();

   const getUserPlayListsHandler = async () => {
      const userObject = await checkUserIsLoggedIn();
      const userId = userObject?.user?._id;
      if (userId) {
         getPlayLists({ userId });
      }
   };

   const storeMovieInPlayListHandler = async ({ playListId, movieId }: { playListId: string; movieId: string }) => {
      const userObject = await checkUserIsLoggedIn();
      const userId = userObject?.user?._id;
      if (userId) {
         storeMovieInPlayList({ userId, playListId, movieId });
      }
   };

   useEffect(() => {
      if (storeMovieInPlayListSuccess) {
         hideModal();
      }
   }, [storeMovieInPlayListSuccess]);

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
                             alignItems="center"
                          >
                             <Box display="flex" flexDirection="row" gap="10px" alignItems="center">
                                <MaterialIcons
                                   size={20}
                                   name={
                                      item?.movies.length
                                         ? item.movies.some((elm) => elm.movieId === movieId)
                                            ? 'playlist-add-check'
                                            : 'playlist-play'
                                         : 'playlist-play'
                                   }
                                   color={theme.colors.text.disabledLight}
                                />
                                <TouchableOpacity
                                   onPress={() => storeMovieInPlayListHandler({ playListId: item._id, movieId })}
                                >
                                   <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                                      {item.playListName}
                                   </Text>
                                </TouchableOpacity>
                             </Box>
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

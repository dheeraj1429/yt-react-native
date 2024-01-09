import React, { Fragment, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import PlayListModal from '../PlayListModal/PlayListModal';
import CreatePlayList from '../CreatePlayList/CreatePlayList';

export interface AddToListInterface {
   movieId: string;
}

const AddToList = ({ movieId }: AddToListInterface) => {
   const [visiblePlaylistModal, setVisiblePlaylistModal] = useState<boolean>(false);
   const [showCreatePlayListModal, setShowCreatePlayListModal] = useState<boolean>(false);

   const pressHandler = function ({ movieId }: { movieId: string }) {
      setVisiblePlaylistModal(true);
   };

   const showCreatePlayListModalHandler = function () {
      setVisiblePlaylistModal(false);
      setShowCreatePlayListModal(true);
   };

   return (
      <Fragment>
         <CreatePlayList hideModal={() => setShowCreatePlayListModal(false)} visible={showCreatePlayListModal} />
         <PlayListModal
            showCreatePlayListHandler={showCreatePlayListModalHandler}
            movieId={movieId.toString()}
            hideModal={() => setVisiblePlaylistModal(false)}
            visible={visiblePlaylistModal}
         />
         <IconButton
            onPress={() => pressHandler({ movieId })}
            customHeight={'auto'}
            customWidth={'auto'}
            position="relative"
            borderRadius={'5px'}
            padding={{
               top: theme.sizes.spacing.sm,
               bottom: theme.sizes.spacing.sm,
               left: theme.sizes.spacing.md,
               right: theme.sizes.spacing.md,
            }}
         >
            <Box margin={{ right: theme.sizes.spacing.md }}>
               <Feather size={theme.sizes.fontSize['text-2xl']} name="list" color={theme.colors.text.primaryLight} />
            </Box>
            <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.text.secondaryLight}>
               Like
            </Text>
         </IconButton>
      </Fragment>
   );
};

export default AddToList;

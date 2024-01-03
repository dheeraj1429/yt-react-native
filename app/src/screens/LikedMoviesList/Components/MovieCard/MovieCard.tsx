import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../../../../components/Box/Box';
import { Card, CardContent, CardImage, Text } from '../../../../components/Card/Card';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { LikedMoviesInterface } from '../../../../state/features/likeAndBookmark';
import { useLikeMoviesMutation } from '../../../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';
import { checkUserIsLoggedIn, getPosterImage } from '../../../../utils/helper';

export interface MovieCardInterface {
   likeMovie: LikedMoviesInterface['likeMovie'];
}

const MovieCard = ({ likeMovie }: MovieCardInterface) => {
   const [visible, setVisible] = useState(false);
   const [addToLike] = useLikeMoviesMutation();

   const openMenu = () => setVisible(true);

   const closeMenu = () => setVisible(false);

   const removeItem = async function () {
      closeMenu();
      const user = await checkUserIsLoggedIn();
      if (user) {
         addToLike({ movieId: likeMovie.id.toString(), userId: user.user._id });
      }
   };

   return (
      <Box margin={{ bottom: 10 }}>
         <Card
            gap={10}
            display="flex"
            flexDirection="row"
            customWidth={'100%'}
            customHeight={'90px'}
            alignItems="center"
         >
            <CardImage customWidth={'35%'} source={{ uri: getPosterImage(likeMovie.poster_path) }} />
            <CardContent customWidth={'50%'}>
               <Box margin={{ bottom: theme.sizes.spacing.md }}>
                  <Text fontSize={theme.sizes.fontSize['text-xl']} fontWeight={500}>
                     {likeMovie?.title.length >= 30 ? `${likeMovie?.title.slice(0, 30)}...` : likeMovie?.title}
                  </Text>
               </Box>
               <Text color={theme.colors.ui.disabled} fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400}>
                  {likeMovie?.overview.length >= 50 ? `${likeMovie?.overview.slice(0, 50)}...` : likeMovie?.overview}
               </Text>
            </CardContent>
            <Box>
               <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                     <IconButton position="relative" onPress={openMenu}>
                        <MaterialCommunityIcons color={theme.colors.ui.disabled} name="dots-vertical" />
                     </IconButton>
                  }
               >
                  <Menu.Item
                     leadingIcon={() => (
                        <Ionicons size={25} color={theme.colors.ui.disabled} name="remove-circle-outline" />
                     )}
                     onPress={removeItem}
                     title={
                        <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-lg']}>
                           Remove
                        </Text>
                     }
                  />
               </Menu>
            </Box>
         </Card>
      </Box>
   );
};

export default MovieCard;

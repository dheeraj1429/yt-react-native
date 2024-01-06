import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../../../../components/Box/Box';
import { Card, CardContent, CardImage, Text } from '../../../../components/Card/Card';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { LikedMoviesInterface } from '../../../../state/features/likeAndBookmark';
import { getPosterImage } from '../../../../utils/helper';
import { TouchableOpacity } from 'react-native';

export interface MovieCardInterface {
   likeMovie: LikedMoviesInterface['likeMovie'];
   menuItems: React.ReactNode;
   imageActionEvent: () => void;
}

const MovieCard = ({ likeMovie, menuItems, imageActionEvent }: MovieCardInterface) => {
   const [visible, setVisible] = useState(false);

   const openMenu = () => setVisible(true);
   const closeMenu = () => setVisible(false);

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
            <Card customWidth={'35%'}>
               <TouchableOpacity onPress={imageActionEvent}>
                  <CardImage customWidth={'100%'} source={{ uri: getPosterImage(likeMovie.poster_path) }} />
               </TouchableOpacity>
            </Card>
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
            {menuItems ? (
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
                     {menuItems}
                  </Menu>
               </Box>
            ) : null}
         </Card>
      </Box>
   );
};

export default MovieCard;

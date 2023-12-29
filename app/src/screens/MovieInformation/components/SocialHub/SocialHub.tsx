import React from 'react';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { useLikeMoviesMutation } from '../../../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';

export interface SocialHubInterface {
   movieId: string;
}

export enum ButtonTypes {
   addToLike,
   share,
   addToList,
}

const buttonAr = [
   {
      icon: <AntDesign size={theme.sizes.fontSize['text-2xl']} name="like2" color={theme.colors.text.primaryLight} />,
      text: (
         <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.text.secondaryLight}>
            Like
         </Text>
      ),
      type: ButtonTypes.addToLike,
   },
   {
      icon: <FontAwesome size={theme.sizes.fontSize['text-xl']} name="send" color={theme.colors.text.primaryLight} />,
      text: (
         <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.text.secondaryLight}>
            Share
         </Text>
      ),
      type: ButtonTypes.share,
   },
];

const SocialHub = ({ movieId }: SocialHubInterface) => {
   const [addToLike, { isLoading, data }] = useLikeMoviesMutation();

   return (
      <Box
         display="flex"
         flexDirection="row"
         alignItems="center"
         margin={{ bottom: theme.sizes.spacing.md }}
         gap={'6px'}
      >
         {buttonAr.map((item) => (
            <IconButton
               key={uuid.v4().toString()}
               customHeight={'auto'}
               padding={'6px'}
               customWidth={'auto'}
               position="relative"
               borderRadius={'5px'}
            >
               <Box margin={{ right: theme.sizes.spacing.md }}>{item.icon}</Box>
               {item.text}
            </IconButton>
         ))}
      </Box>
   );
};

export default SocialHub;

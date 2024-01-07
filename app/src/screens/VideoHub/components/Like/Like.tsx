import React, { useLayoutEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import {
   useLazyMovieLikeStatusQuery,
   useLikeMoviesMutation,
} from '../../../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';
import { checkUserIsLoggedIn } from '../../../../utils/helper';

const Like = ({ movieId }: { movieId: string }) => {
   const [addToLike, { data: addToLikeData }] = useLikeMoviesMutation();
   const [movieLikeStatus, { data: movieLikeStatusData }] = useLazyMovieLikeStatusQuery();

   const movieStatusHandler = async function () {
      const user = await checkUserIsLoggedIn();
      if (user) {
         movieLikeStatus({ userId: user.user._id, movieId });
      }
   };

   const pressHandler = async function ({ movieId }: { movieId: string }) {
      const user = await checkUserIsLoggedIn();
      if (user) {
         addToLike({ movieId: movieId.toString(), userId: user.user._id });
      }
   };

   useLayoutEffect(() => {
      movieStatusHandler();
   }, []);

   return (
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
            <AntDesign
               size={theme.sizes.fontSize['text-2xl']}
               name={
                  (!!addToLikeData && addToLikeData?.success && addToLikeData?.add) ||
                  (!!movieLikeStatusData && movieLikeStatusData?.liked && !addToLikeData)
                     ? 'like1'
                     : 'like2'
               }
               color={theme.colors.text.primaryLight}
            />
         </Box>
         <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.text.secondaryLight}>
            Like
         </Text>
      </IconButton>
   );
};

export default Like;

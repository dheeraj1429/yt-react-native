import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Box from '../../components/Box/Box';
import { Text } from '../../components/Card/Card';
import { FullViewContainer, ViewWithSidePadding } from '../../components/Container/Container';
import { Spinner, SpinnerContainer } from '../../components/Spinner/Spinner';
import { theme } from '../../infrastructure/styleComponentTheme';
import {
   likeAndBookmark,
   likeAndBookmarkTagTypesObject,
   useLazyGetLikedMoviesQuery,
} from '../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';
import { useAppDispatch } from '../../state/store/hooks';
import { checkUserIsLoggedIn } from '../../utils/helper';
import MovieCard from './Components/MovieCard/MovieCard';
import { useNavigation } from '@react-navigation/native';
import { navigationRoutes } from '../../infrastructure/navigation/navigation.routes';
import { useIsFocused } from '@react-navigation/native';

const LikedMoviesList = () => {
   const [getLikedMovies, { isLoading: getLikedMoviesLoading, data: getLikedMoviesData }] = useLazyGetLikedMoviesQuery({
      refetchOnFocus: true,
   });

   const [page, setPage] = useState(1);
   const dispatch = useAppDispatch();
   const { navigate } = useNavigation();
   const isFocused = useIsFocused();

   const getMoviesList = async function () {
      const userData = await checkUserIsLoggedIn();
      if (userData) {
         getLikedMovies({ userId: userData?.user?._id, page });
      }
   };

   const handleEndReached = function () {
      if (getLikedMoviesData?.total_pages > page) {
         setPage((prev) => prev + 1);
      }
   };

   useEffect(() => {
      if (isFocused) {
         getMoviesList();
      }

      return () => {
         dispatch(likeAndBookmark.util.invalidateTags([likeAndBookmarkTagTypesObject.getLikedMoviesTag]));
      };
   }, [dispatch, isFocused, page]);

   return (
      <FullViewContainer>
         <ViewWithSidePadding flex={1}>
            <Text fontSize={theme.sizes.fontSize['text-5xl']}>Liked Movies</Text>
            <Box margin={{ top: theme.sizes.spacing.sm }}>
               <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.ui.disabled}>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                  visual form of a document or a.
               </Text>
            </Box>
            <Box flex={1} margin={{ direction: { position: 'top-bottom', size: theme.sizes.spacing.lg } }}>
               {getLikedMoviesLoading ? (
                  <SpinnerContainer>
                     <Spinner />
                  </SpinnerContainer>
               ) : null}
               {!!getLikedMoviesData && getLikedMoviesData?.likedMovies.length ? (
                  <FlatList
                     data={getLikedMoviesData.likedMovies}
                     keyExtractor={(item) => item.likeMovie.id}
                     renderItem={({ item }) => (
                        <MovieCard
                           imageActionEvent={() =>
                              navigate(navigationRoutes.VideoHub, {
                                 movieId: item.likeMovie.id,
                              })
                           }
                           likeMovie={item.likeMovie}
                        />
                     )}
                     onEndReached={handleEndReached}
                     onEndReachedThreshold={0.1}
                     ListFooterComponent={
                        getLikedMoviesLoading ? (
                           <SpinnerContainer>
                              <Spinner />
                           </SpinnerContainer>
                        ) : null
                     }
                  />
               ) : !getLikedMoviesLoading ? (
                  <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.ui.disabled}>
                     Opps! you don't have any liked movies
                  </Text>
               ) : null}
            </Box>
         </ViewWithSidePadding>
      </FullViewContainer>
   );
};

export default LikedMoviesList;

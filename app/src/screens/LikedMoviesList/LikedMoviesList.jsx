import React, { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import { Text } from '../../components/Card/Card';
import { FullViewContainer, ViewWithSidePadding } from '../../components/Container/Container';
import { Spinner, SpinnerContainer } from '../../components/Spinner/Spinner';
import { theme } from '../../infrastructure/styleComponentTheme';
import { useLazyGetLikedMoviesQuery } from '../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';
import { checkUserIsLoggedIn } from '../../utils/helper';
import MovieCard from './Components/MovieCard/MovieCard';
import { FlatList } from 'react-native';

const LikedMoviesList = () => {
   const [getLikedMovies, { isLoading: getLikedMoviesLoading, data: getLikedMoviesData }] =
      useLazyGetLikedMoviesQuery();
   const [page, setPage] = useState(1);

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
      getMoviesList();
   }, [page]);

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
                     renderItem={({ item }) => <MovieCard likeMovie={item.likeMovie} />}
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
               ) : null}
            </Box>
         </ViewWithSidePadding>
      </FullViewContainer>
   );
};

export default LikedMoviesList;

import React, { useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import { Text } from '../../components/Card/Card';
import { ScrollViewWithTheme, ViewWithSidePadding } from '../../components/Container/Container';
import { Spinner, SpinnerContainer } from '../../components/Spinner/Spinner';
import { theme } from '../../infrastructure/styleComponentTheme';
import { useLazyGetLikedMoviesQuery } from '../../state/features/likeAndBookmark/likeAndBookmark.apiSlice';
import { checkUserIsLoggedIn } from '../../utils/helper';
import MovieCard from './Components/MovieCard/MovieCard';

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

   useEffect(() => {
      getMoviesList();
   }, [page]);

   return (
      <ScrollViewWithTheme>
         <ViewWithSidePadding flex={1}>
            <Text fontSize={theme.sizes.fontSize['text-5xl']}>Liked Movies</Text>
            <Box margin={{ top: theme.sizes.spacing.sm }}>
               <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.ui.disabled}>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                  visual form of a document or a.
               </Text>
            </Box>
            <Box margin={{ direction: { position: 'top-bottom', size: theme.sizes.spacing.lg } }}>
               {getLikedMoviesLoading ? (
                  <SpinnerContainer>
                     <Spinner />
                  </SpinnerContainer>
               ) : null}
               {!!getLikedMoviesData && getLikedMoviesData?.likedMovies.length
                  ? getLikedMoviesData.likedMovies.map((item) => (
                       <MovieCard key={item.likeMovie.id} likedMovies={item} />
                    ))
                  : null}
            </Box>
         </ViewWithSidePadding>
      </ScrollViewWithTheme>
   );
};

export default LikedMoviesList;

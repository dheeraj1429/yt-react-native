import React, { Fragment, useEffect } from 'react';
import { MovieInformationContainer } from './MovieInformation.style';
import { ScrollViewWithTheme } from '../../components/Container/Container';
import { useRoute } from '@react-navigation/native';
import { useLazyGetSingleMovieDetailsQuery } from '../../state/features/movies/movies.apiSlice';
import { Spinner, SpinnerContainer } from '../../components/Spinner/Spinner';
import { Card, CardImage } from '../../components/Card/Card';
import { getPosterImage } from '../../utils/helper';

interface RouteParams {
   movieId?: string;
}

const MovieInformation = () => {
   const route = useRoute();
   const { movieId } = route.params as RouteParams;
   const [getMovieDetails, { isLoading: movieDetailsIsLoading, data: movieDetails }] = useLazyGetSingleMovieDetailsQuery();

   useEffect(() => {
      if (movieId) {
         getMovieDetails({ movieId });
      }
   }, [movieId]);

   return (
      <ScrollViewWithTheme>
         <MovieInformationContainer>
            {movieDetailsIsLoading ? (
               <SpinnerContainer>
                  <Spinner />
               </SpinnerContainer>
            ) : null}
            {!!movieDetails ? (
               <Fragment>
                  <Card>
                     <CardImage
                        customHeight={'240px'}
                        customWidth={'100%'}
                        resizeMode="cover"
                        radius="0px"
                        source={{
                           uri: getPosterImage(movieDetails.backdrop_path),
                        }}
                     />
                  </Card>
               </Fragment>
            ) : null}
         </MovieInformationContainer>
      </ScrollViewWithTheme>
   );
};

export default MovieInformation;

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { ScrollViewWithTheme } from '../../components/SafeArea/SafeArea';
import {
   useGetMovieDiscoverQuery,
   useGetPopularMoviesQuery,
   useGetTopRatedMoviesQuery,
   useGetUpcomingMoviesQuery,
} from '../../state/features/movies/movies.apiSlice';
import MoviesScrollView from './components/MoviesScrollView/MoviesScrollView';

const Home = () => {
   const { isLoading: getTopRatedMoviesLoading, data: getTopRatedMoviesData } = useGetTopRatedMoviesQuery({ page: 1 });
   const { isLoading: getPopularMoviesLoading, data: getPopularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
   const { isLoading: getUpComingMoviesLoading, data: getUpComingMoviesData } = useGetUpcomingMoviesQuery({ page: 1 });
   const { isLoading: getMovieDiscoverLoading, data: getMovieDiscoverData } = useGetMovieDiscoverQuery({
      sort_by: 'popularity.desc',
      language: 'en-US',
      page: 1,
      'vote_average.gte': 5.5,
      with_genres: 27,
   });

   return (
      <Fragment>
         <ScrollViewWithTheme>
            <Navbar />
            <MoviesScrollView isLoading={getPopularMoviesLoading} data={getPopularMoviesData} heading="Popular Movies" showAll="View More" />
            <MoviesScrollView isLoading={getTopRatedMoviesLoading} data={getTopRatedMoviesData} heading="Top Rated" showAll="View More" />
            <MoviesScrollView isLoading={getUpComingMoviesLoading} data={getUpComingMoviesData} heading="Upcoming Movies" showAll="View More" />
            <MoviesScrollView isLoading={getMovieDiscoverLoading} data={getMovieDiscoverData} heading="Movie Discover" showAll="View More" />
         </ScrollViewWithTheme>
      </Fragment>
   );
};

export default Home;

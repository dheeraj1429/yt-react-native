import React from 'react';
import { ScrollViewWithTheme } from '../../components/Container/Container';
import Navbar from '../../components/Navbar/Navbar';
import {
   useGetMovieDiscoverQuery,
   useGetPopularMoviesQuery,
   useGetTopRatedMoviesQuery,
   useGetUpcomingMoviesQuery,
} from '../../state/features/movies/movies.apiSlice';
import MoviesScrollView from '../../components/MoviesScrollView/MoviesScrollView';
import NavMenu from '../../components/NavMenu/NavMenu';

const Home = () => {
   const { isLoading: getTopRatedMoviesLoading, data: getTopRatedMoviesData } = useGetTopRatedMoviesQuery({ page: 2 });
   const { isLoading: getPopularMoviesLoading, data: getPopularMoviesData } = useGetPopularMoviesQuery({ page: 2 });
   const { isLoading: getUpComingMoviesLoading, data: getUpComingMoviesData } = useGetUpcomingMoviesQuery({ page: 2 });
   const { isLoading: getMovieDiscoverLoading, data: getMovieDiscoverData } = useGetMovieDiscoverQuery({
      sort_by: 'popularity.desc',
      language: 'en-US',
      page: 3,
      'vote_average.gte': 5.5,
      with_genres: 27,
   });

   return (
      <ScrollViewWithTheme>
         <NavMenu />
         <Navbar />
         <MoviesScrollView
            isLoading={getPopularMoviesLoading}
            data={getPopularMoviesData}
            heading="Popular Movies"
            showAll="View More"
         />
         <MoviesScrollView
            isLoading={getTopRatedMoviesLoading}
            data={getTopRatedMoviesData}
            heading="Top Rated"
            showAll="View More"
         />
         <MoviesScrollView
            isLoading={getUpComingMoviesLoading}
            data={getUpComingMoviesData}
            heading="Upcoming Movies"
            showAll="View More"
         />
         <MoviesScrollView
            isLoading={getMovieDiscoverLoading}
            data={getMovieDiscoverData}
            heading="Movie Discover"
            showAll="View More"
         />
      </ScrollViewWithTheme>
   );
};

export default Home;

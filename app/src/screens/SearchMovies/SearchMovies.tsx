import _debounce from 'lodash/debounce';
import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Box from '../../components/Box/Box';
import { FullViewContainer, ViewWithSidePadding } from '../../components/Container/Container';
import { SearchBarContainer, SearchIcon, SearchInput } from '../../components/SearchBar/SearchBar';
import { theme } from '../../infrastructure/styleComponentTheme';
import { useLazySearchMoviesQuery } from '../../state/features/movies/movies.apiSlice';
import { checkUserIsLoggedIn } from '../../utils/helper';
import { SpinnerContainer, Spinner } from '../../components/Spinner/Spinner';
import SearchItem from './Components/SearchItem/SearchItem';
import { ScrollView } from 'react-native';

export interface SearchMoviesStateInterface {
   search: string;
}

const SearchMovies = () => {
   const { control } = useForm<SearchMoviesStateInterface>();
   const [getSearchMovies, { isLoading: getSearchMoviesLoading, data: getSearchMoviesData }] =
      useLazySearchMoviesQuery();
   const debounceFn = useCallback(_debounce(searchMoviesHandler, 300), [getSearchMovies]);

   async function searchMoviesHandler(value: string) {
      const userObject = await checkUserIsLoggedIn();

      if (userObject?.user?._id) {
         getSearchMovies({ search: value });
      }
   }

   return (
      <FullViewContainer>
         <ViewWithSidePadding flex={1}>
            <Box display="flex" flexDirection="column">
               <Box customHeight={'5%'}>
                  <SearchBarContainer backgroundColor={theme.colors.ui.primary}>
                     <SearchIcon>
                        <AntDesign color={theme.colors.ui.tertiary} name="search1" />
                     </SearchIcon>
                     <Controller
                        name="search"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                           <SearchInput
                              onChangeText={(value) => {
                                 onChange(value);
                                 debounceFn(value);
                              }}
                              value={value}
                              placeholder="Search movies"
                           />
                        )}
                     />
                  </SearchBarContainer>
               </Box>
               <Box
                  customHeight={'95%'}
                  padding={{ direction: { position: 'top-bottom', size: theme.sizes.spacing.md } }}
               >
                  {getSearchMoviesLoading ? (
                     <SpinnerContainer padding={{ direction: { position: 'all', size: theme.sizes.spacing.md } }}>
                        <Spinner />
                     </SpinnerContainer>
                  ) : null}
                  <ScrollView>
                     {getSearchMoviesData?.results.length
                        ? getSearchMoviesData.results.map((item) => (
                             <SearchItem movieId={item.id.toString()} heading={item.name} key={item.id.toString()} />
                          ))
                        : null}
                  </ScrollView>
               </Box>
            </Box>
         </ViewWithSidePadding>
      </FullViewContainer>
   );
};

export default SearchMovies;

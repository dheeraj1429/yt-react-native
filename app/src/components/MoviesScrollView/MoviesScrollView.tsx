import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { appRoutes } from '../../../App.Route';
import Box from '../Box/Box';
import { Card, CardContent, CardImage, Text } from '../Card/Card';
import { ViewWithSidePadding } from '../Container/Container';
import { HeadingContainer, HeadingText, ShowAllButton } from '../Heading/Heading';
import { Spinner, SpinnerContainer } from '../Spinner/Spinner';
import { theme } from '../../infrastructure/styleComponentTheme';
import { GetMoviesInterface } from '../../state/features/movies';
import { getPosterImage } from '../../utils/helper';
import { StackNavigation } from '../../shared/types';

export interface MoviesScrollViewProps {
   isLoading: boolean;
   data?: GetMoviesInterface;
   heading?: string;
   showAll?: string;
}

const MoviesScrollView = ({ isLoading, data, heading, showAll }: MoviesScrollViewProps) => {
   const { navigate } = useNavigation<StackNavigation>();

   const singlePageRouteHandler = function (movieId: string | number) {
      navigate(appRoutes.singleMovieInformation, { movieId });
   };

   return (
      <ViewWithSidePadding>
         <Box margin={{ bottom: theme.sizes.spacing.xl }}>
            {isLoading ? (
               <SpinnerContainer>
                  <Spinner />
               </SpinnerContainer>
            ) : null}
            {!!data && data?.results.length ? (
               <View>
                  <HeadingContainer>
                     <HeadingText heading={heading} />
                     <ShowAllButton showAll={showAll} />
                  </HeadingContainer>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     {data.results.map((item) => (
                        <Box
                           margin={{ top: theme.sizes.spacing.lg, right: theme.sizes.spacing.sm }}
                           key={item.id.toString()}
                        >
                           <TouchableOpacity onPress={() => singlePageRouteHandler(item.id)}>
                              <Card customWidth={'140px'} gap={theme.sizes.spacing.md}>
                                 <CardImage
                                    source={{
                                       uri: getPosterImage(item.poster_path),
                                    }}
                                    resizeMode="cover"
                                    radius={'7px'}
                                    customHeight={'190px'}
                                 />
                                 <CardContent>
                                    <Text length={16} fontSize={theme.sizes.fontSize['text-lg']}>
                                       {item.title.length >= 15 ? `${item.title.slice(0, 15)}...` : item.title}
                                    </Text>
                                 </CardContent>
                              </Card>
                           </TouchableOpacity>
                        </Box>
                     ))}
                  </ScrollView>
               </View>
            ) : null}
         </Box>
      </ViewWithSidePadding>
   );
};

export default MoviesScrollView;

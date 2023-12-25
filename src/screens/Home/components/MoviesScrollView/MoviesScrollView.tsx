import React from 'react';
import Box from '../../../../components/Box/Box';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { GetMoviesInterface } from '../../../../state/features/movies';
import { Spinner, SpinnerContainer } from '../../../../components/Spinner/Spinner';
import { ScrollView, View } from 'react-native';
import { HeadingContainer, HeadingText, ShowAllButton } from '../../../../components/Heading/Heading';
import { CardImage, Card, CardContent, CardText } from '../../../../components/Card/Card';
import { getPosterImage } from '../../../../utils/helper';
import { ViewWithSidePadding } from '../../../../components/Container/Container';

export interface MoviesScrollViewProps {
   isLoading: boolean;
   data?: GetMoviesInterface;
   heading?: string;
   showAll?: string;
}

const MoviesScrollView = ({ isLoading, data, heading, showAll }: MoviesScrollViewProps) => {
   return (
      <ViewWithSidePadding>
         <Box position="bottom" size={theme.sizes.spacing.xl} margin={true}>
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
                     {data.results.map(item => (
                        <Box key={item.id.toString()} position="top" size={theme.sizes.spacing.lg} margin={true}>
                           <Box position="right" size={theme.sizes.spacing.sm} margin={true}>
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
                                    <CardText length={16} heading={item.title} fontSize={theme.sizes.fontSize['text-lg']} />
                                 </CardContent>
                              </Card>
                           </Box>
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

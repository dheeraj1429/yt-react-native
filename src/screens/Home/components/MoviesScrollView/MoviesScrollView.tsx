import React from 'react';
import Spacer from '../../../../components/Spacer/Spacer';
import { theme } from '../../../../infrastructure/theme';
import { GetMoviesInterface } from '../../../../state/features/movies';
import { Spinner, SpinnerContainer } from '../../../../components/Spinner/Spinner';
import { ScrollView, View } from 'react-native';
import { HeadingContainer, HeadingText, ShowAllButton } from '../../../../components/Heading/Heading';
import { CardImage, Card } from '../../../../components/Card/Card';
import { getPosterImage } from '../../../../utils/helper';

export interface MoviesScrollViewProps {
   isLoading: boolean;
   data?: GetMoviesInterface;
   heading?: string;
   showAll?: string;
}

const MoviesScrollView = ({ isLoading, data, heading, showAll }: MoviesScrollViewProps) => {
   return (
      <Spacer position="top" size={theme.sizes.spacing.lg} margin={true}>
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
                     <Spacer key={item.id.toString()} position="top" size={theme.sizes.spacing.lg} margin={true}>
                        <Spacer position="right" size={theme.sizes.spacing.sm} margin={true}>
                           <Card customHeight={'170px'} customWidth={'100px'} gap={theme.sizes.spacing.md}>
                              <CardImage
                                 source={{
                                    uri: getPosterImage(item.poster_path),
                                 }}
                                 resizeMode="cover"
                                 radius={'7px'}
                              />
                           </Card>
                        </Spacer>
                     </Spacer>
                  ))}
               </ScrollView>
            </View>
         ) : null}
      </Spacer>
   );
};

export default MoviesScrollView;

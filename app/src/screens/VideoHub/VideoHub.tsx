import React, { Fragment, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import uuid from 'react-native-uuid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import YoutubePlayer from 'react-native-youtube-iframe';
import Box from '../../components/Box/Box';
import { Card, CardImage, Text } from '../../components/Card/Card';
import { Chip, ChipText } from '../../components/Chip/Chip';
import { ScrollViewWithTheme, ViewWithSidePadding } from '../../components/Container/Container';
import IconButton from '../../components/IconButton/IconButton';
import { Spinner, SpinnerContainer } from '../../components/Spinner/Spinner';
import { theme } from '../../infrastructure/styleComponentTheme';
import { NavigationPropType } from '../../shared/types';
import { useLazyGetSingleMovieDetailsQuery } from '../../state/features/movies/movies.apiSlice';
import { useGetMovieTrailerQuery } from '../../state/features/moviesTrailer/moviesTrailer.apiSlice';
import { getPosterImage } from '../../utils/helper';
import { MovieInformationContainer } from './VideoHub.style';
import SocialHub from './components/SocialHub/SocialHub';

interface RouteParams {
   movieId: string;
}

const VideoHub = ({ navigation, route }: NavigationPropType) => {
   const { movieId } = route.params as RouteParams;
   const [isPlaying, setIsPlaying] = useState<boolean>(false);
   const [showMoviePlayer, setShowMoviePlayer] = useState<boolean>(false);

   const [getMovieDetails, { isLoading: movieDetailsIsLoading, data: movieDetails }] =
      useLazyGetSingleMovieDetailsQuery();
   const { data: getMovieTrailerData } = useGetMovieTrailerQuery({
      tmdb_id: +movieId,
      categories: 'Trailer',
   });

   const goBackHandler = function () {
      navigation.goBack();
   };

   const playHandler = function () {
      setShowMoviePlayer(true);
      setIsPlaying(true);
   };

   useEffect(() => {
      if (movieId) {
         getMovieDetails({ movieId });
      }
   }, [movieId]);

   useEffect(() => {
      if (getMovieTrailerData) {
         playHandler();
      }
   }, [getMovieTrailerData]);

   return (
      <ScrollViewWithTheme>
         <MovieInformationContainer>
            <IconButton top={10} zIndex={100} right={10} onPress={goBackHandler}>
               <AntDesign color={'#fff'} name="close" />
            </IconButton>
            {movieDetailsIsLoading ? (
               <SpinnerContainer>
                  <Spinner />
               </SpinnerContainer>
            ) : null}
            {!!movieDetails ? (
               <Fragment>
                  <Card customHeight={'auto'}>
                     {showMoviePlayer ? (
                        <Box>
                           <YoutubePlayer
                              height={230}
                              play={isPlaying}
                              videoId={getMovieTrailerData?.trailer?.youtube_video_id}
                           />
                        </Box>
                     ) : (
                        <CardImage
                           customHeight={'230px'}
                           customWidth={'100%'}
                           resizeMode="cover"
                           radius="0px"
                           source={{
                              uri: getPosterImage(movieDetails.backdrop_path),
                           }}
                        />
                     )}
                  </Card>
                  <ViewWithSidePadding>
                     <Box padding={{ direction: { position: 'top-bottom', size: theme.sizes.spacing.md } }}>
                        {movieId ? <SocialHub movieId={movieId} /> : null}
                        <Text fontWeight={700} fontSize={theme.sizes.fontSize['text-3xl']}>
                           {movieDetails.title}
                        </Text>
                        {movieDetails?.genres.length ? (
                           <Box margin={{ top: theme.sizes.spacing.md }}>
                              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 {movieDetails?.genres.map((item) => (
                                    <Box key={uuid.v4().toString()} margin={{ right: theme.sizes.spacing.sm }}>
                                       <Chip>
                                          <ChipText fontSize={theme.sizes.fontSize['text-lg']} heading={item.name} />
                                       </Chip>
                                    </Box>
                                 ))}
                                 <Box margin={{ right: theme.sizes.spacing.sm }}>
                                    <MaterialIcons size={22} color={'white'} name="hdr-on" />
                                 </Box>
                              </ScrollView>
                           </Box>
                        ) : null}
                        {movieDetails?.tagline ? (
                           <Box
                              display="flex"
                              alignItems="center"
                              flexDirection="row"
                              margin={{ top: theme.sizes.spacing.md }}
                           >
                              <Entypo color={theme.colors.ui.disabled} name="dot-single" />
                              <Text
                                 fontWeight={400}
                                 fontSize={theme.sizes.fontSize['text-xl']}
                                 color={theme.colors.ui.disabled}
                              >
                                 {movieDetails.tagline}
                              </Text>
                           </Box>
                        ) : null}
                        <Box margin={{ top: theme.sizes.spacing.md }}>
                           <Card
                              padding={{ direction: { position: 'all', size: theme.sizes.spacing.md } }}
                              backgroundColor={theme.colors.ui.primary}
                           >
                              {movieDetails?.status ? (
                                 <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="row"
                                    margin={{ bottom: theme.sizes.spacing.md }}
                                 >
                                    <Text fontWeight={600} fontSize={theme.sizes.fontSize['text-xl']}>
                                       {movieDetails.status}
                                    </Text>
                                    <Entypo color={theme.colors.ui.disabled} name="dot-single" />
                                 </Box>
                              ) : null}
                              <Box display="flex" gap="7px">
                                 <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-lg']}>
                                    {movieDetails.overview}
                                 </Text>
                                 <Text
                                    color={theme.colors.ui.disabled}
                                    fontWeight={300}
                                    fontSize={theme.sizes.fontSize['text-lg']}
                                 >
                                    {movieDetails.original_title}
                                 </Text>
                              </Box>
                           </Card>
                        </Box>
                     </Box>
                  </ViewWithSidePadding>
               </Fragment>
            ) : null}
         </MovieInformationContainer>
      </ScrollViewWithTheme>
   );
};

export default VideoHub;

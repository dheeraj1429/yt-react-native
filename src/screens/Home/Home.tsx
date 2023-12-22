import React from 'react';
import { HomeContainer } from './Home.style';
import Navbar from '../../components/Navbar/Navbar';
import Spacer from '../../components/Spacer/Spacer';
import { theme } from '../../infrastructure/theme';
import { HeadingContainer, HeadingText, ShowAllButton } from '../../components/Heading/Heading';
import { Card, CardImage, CardContent, CardHeading } from '../../components/Card/Card';

const Home = () => {
   return (
      <HomeContainer>
         <Navbar />
         <Spacer position="left-right" size={theme.sizes.spacing.lg} padding={true}>
            <HeadingContainer>
               <HeadingText heading="Continue Watching" />
               <ShowAllButton showAll="View More" />
            </HeadingContainer>
            <Spacer position="top" size={theme.sizes.spacing.lg} margin={true}>
               <Card gap={theme.sizes.spacing.md}>
                  <CardImage
                     source={{
                        uri: 'https://filmdaily.co/wp-content/uploads/2022/12/avatar2.jpeg',
                     }}
                     resizeMode="cover"
                  />
                  <CardContent>
                     <CardHeading heading="Avatar - The Way of water" />
                     <Spacer position="top" margin={true} size={theme.sizes.spacing.sm}>
                        <CardHeading
                           color={theme.colors.ui.secondary}
                           fontSize={theme.sizes.fontSize['text-lg']}
                           fontWeight={500}
                           heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
                        />
                     </Spacer>
                  </CardContent>
               </Card>
            </Spacer>
         </Spacer>
      </HomeContainer>
   );
};

export default Home;

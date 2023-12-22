import React from 'react';
import { HomeContainer } from './Home.style';
import Navbar from '../../components/Navbar/Navbar';
import Spacer from '../../components/Spacer/Spacer';
import { theme } from '../../infrastructure/theme';
import { HeadingContainer, HeadingText, ShowAllButton } from '../../components/Heading/Heading';

const Home = () => {
   return (
      <HomeContainer>
         <Navbar />
         <Spacer position="left-right" size={theme.sizes.spacing.lg} padding={true}>
            <HeadingContainer>
               <HeadingText heading="Continue Watching" />
               <ShowAllButton showAll="View More" />
            </HeadingContainer>
         </Spacer>
      </HomeContainer>
   );
};

export default Home;

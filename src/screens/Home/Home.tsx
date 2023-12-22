import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Spacer from '../../components/Spacer/Spacer';
import { theme } from '../../infrastructure/theme';
import { HeadingContainer, HeadingText, ShowAllButton } from '../../components/Heading/Heading';
import { Card, CardImage, CardContent, CardHeading } from '../../components/Card/Card';
import { ScrollViewWithTheme } from '../../components/SafeArea/SafeArea';

const Home = () => {
   return (
      <ScrollViewWithTheme>
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
                        uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d4t4n6x-5c7d8cf3-0ace-415b-ae53-2bf895f06321.jpg/v1/fill/w_1024,h_400,q_75,strp/__the_avengers___banner_3_by_andrewss7_d4t4n6x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kNHQ0bjZ4LTVjN2Q4Y2YzLTBhY2UtNDE1Yi1hZTUzLTJiZjg5NWYwNjMyMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HceDboxVGK1DhZ3khh5Orp8PpGUpBXCw--CPqjEL2hk',
                     }}
                     resizeMode="cover"
                  />
                  <CardContent>
                     <CardHeading heading="Avengers - End Games" />
                     <Spacer position="top" margin={true} size={theme.sizes.spacing.sm}>
                        <CardHeading
                           color={theme.colors.ui.secondary}
                           fontSize={theme.sizes.fontSize['text-xl']}
                           fontWeight={400}
                           heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry.."
                        />
                     </Spacer>
                  </CardContent>
               </Card>
            </Spacer>
            <Spacer position="top" size={theme.sizes.spacing.lg} margin={true}>
               <Card display="flex" flexDirection="row" gap={theme.sizes.spacing.md}>
                  <CardImage
                     customWidth={'40%'}
                     customHeight={'100px'}
                     source={{
                        uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/66932197773601.5ecd2ebb832dc.jpeg',
                     }}
                     resizeMode="cover"
                  />
                  <CardContent customWidth={'60%'}>
                     <CardHeading heading="Avengers - End Games" />
                     <Spacer position="top" margin={true} size={theme.sizes.spacing.sm}>
                        <CardHeading
                           color={theme.colors.ui.secondary}
                           fontSize={theme.sizes.fontSize['text-xl']}
                           fontWeight={400}
                           heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry.."
                        />
                     </Spacer>
                  </CardContent>
               </Card>
            </Spacer>
            <Spacer position="top" size={theme.sizes.spacing.lg} margin={true}>
               <Card display="flex" flexDirection="row" gap={theme.sizes.spacing.md}>
                  <CardImage
                     customWidth={'40%'}
                     customHeight={'100px'}
                     source={{
                        uri: 'https://www.joblo.com/wp-content/uploads/2019/04/Dark-Phoenix-character-3-913-1.jpg',
                     }}
                     resizeMode="cover"
                  />
                  <CardContent customWidth={'60%'}>
                     <CardHeading heading="Avengers - End Games" />
                     <Spacer position="top" margin={true} size={theme.sizes.spacing.sm}>
                        <CardHeading
                           color={theme.colors.ui.secondary}
                           fontSize={theme.sizes.fontSize['text-xl']}
                           fontWeight={400}
                           heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry.."
                        />
                     </Spacer>
                  </CardContent>
               </Card>
            </Spacer>
         </Spacer>
      </ScrollViewWithTheme>
   );
};

export default Home;

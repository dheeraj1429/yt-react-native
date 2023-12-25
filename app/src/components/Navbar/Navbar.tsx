import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Chip, ChipText, ChipTextInterface } from '../Chip/Chip';
import { Image, ImageContainer, NavbarContainer } from './Navbar.style';

const TabsAr: Array<ChipTextInterface> = [
   { heading: 'Tv Shows' },
   { heading: 'Movies' },
   { heading: 'Categories' },
   { heading: 'Cartoon' },
   { heading: 'Cartoon Box' },
   { heading: 'Continue Watching' },
];

const Navbar = () => {
   return (
      <View>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <NavbarContainer>
               <ImageContainer>
                  <Image source={require('../../../public/images/pngwing.com.png')} />
               </ImageContainer>
               {TabsAr.map(item => (
                  <TouchableOpacity key={item.heading}>
                     <Chip>
                        <ChipText heading={item.heading} />
                     </Chip>
                  </TouchableOpacity>
               ))}
            </NavbarContainer>
         </ScrollView>
      </View>
   );
};

export default Navbar;

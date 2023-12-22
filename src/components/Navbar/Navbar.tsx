import React from 'react';
import { NavbarContainer, ImageContainer, Image } from './Navbar.style';
import Chip, { ChipProps } from '../Chip/Chip';
import { ScrollView, TouchableOpacity } from 'react-native';

const TabsAr: Array<ChipProps> = [
   { heading: 'Tv Shows' },
   { heading: 'Movies' },
   { heading: 'Categories' },
   { heading: 'Cartoon' },
   { heading: 'Cartoon Box' },
   { heading: 'Continue Watching' },
];

const Navbar = () => {
   return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <NavbarContainer>
            <ImageContainer>
               <Image source={require('../../../public/images/pngwing.com.png')} />
            </ImageContainer>
            {TabsAr.map(item => (
               <TouchableOpacity key={item.heading}>
                  <Chip heading={item.heading} />
               </TouchableOpacity>
            ))}
         </NavbarContainer>
      </ScrollView>
   );
};

export default Navbar;

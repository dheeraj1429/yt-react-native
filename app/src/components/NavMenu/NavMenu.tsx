import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { theme } from '../../infrastructure/styleComponentTheme';
import Box from '../Box/Box';
import { ViewWithSidePadding } from '../Container/Container';
import { SearchBarContainer, SearchIcon, SearchInput } from '../SearchBar/SearchBar';
import { navigationRoutes } from '../../infrastructure/navigation/navigation.routes';
import { StackNavigation } from '../../shared/types';

const NavMenu = () => {
   const { navigate } = useNavigation<StackNavigation>();

   return (
      <ViewWithSidePadding>
         <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <TouchableOpacity>
               <FontAwesome6
                  size={theme.sizes.fontSize['text-2xl']}
                  name="bars-staggered"
                  color={theme.colors.bg.secondary}
               />
            </TouchableOpacity>
            <SearchBarContainer backgroundColor={theme.colors.ui.primary} width={300}>
               <SearchIcon>
                  <AntDesign color={theme.colors.ui.tertiary} name="search1" />
               </SearchIcon>
               <SearchInput onFocus={() => navigate(navigationRoutes.searchMovies)} placeholder="Search movies" />
            </SearchBarContainer>
            <TouchableOpacity>
               <Entypo
                  size={theme.sizes.fontSize['text-2xl']}
                  name="dots-three-horizontal"
                  color={theme.colors.bg.secondary}
               />
            </TouchableOpacity>
         </Box>
      </ViewWithSidePadding>
   );
};

export default NavMenu;

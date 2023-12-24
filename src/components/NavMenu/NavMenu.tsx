import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { theme } from '../../infrastructure/theme';
import Box from '../Box/Box';
import { ViewWithSidePadding } from '../Container/Container';
import { TouchableOpacity } from 'react-native';

const NavMenu = () => {
   return (
      <ViewWithSidePadding>
         <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <TouchableOpacity>
               <FontAwesome6 size={theme.sizes.fontSize['text-2xl']} name="bars-staggered" color={theme.colors.bg.secondary} />
            </TouchableOpacity>
            <TouchableOpacity>
               <Entypo size={theme.sizes.fontSize['text-2xl']} name="dots-three-horizontal" color={theme.colors.bg.secondary} />
            </TouchableOpacity>
         </Box>
      </ViewWithSidePadding>
   );
};

export default NavMenu;

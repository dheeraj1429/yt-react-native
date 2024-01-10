import React from 'react';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../../../shared/types';
import { TouchableOpacity } from 'react-native';
import { navigationRoutes } from '../../../../infrastructure/navigation/navigation.routes';

export interface SearchItemProps {
   heading?: string;
   movieId: string;
}

const SearchItem = ({ heading, movieId }: SearchItemProps) => {
   const { navigate } = useNavigation<StackNavigation>();

   return (
      <Box>
         <TouchableOpacity onPress={() => navigate(navigationRoutes.VideoHub, { movieId })}>
            <Box
               padding={{ direction: { position: 'top-bottom', size: theme.sizes.spacing.md } }}
               display="flex"
               alignItems="center"
               flexDirection="row"
               gap={theme.sizes.spacing.md + 'px'}
            >
               <MaterialCommunityIcons size={20} color={theme.colors.text.disabledDark} name="history" />
               <Text
                  fontWeight={400}
                  fontSize={theme.sizes.fontSize['text-2xl']}
                  color={theme.colors.text.primaryLight}
               >
                  {heading}
               </Text>
            </Box>
            <Divider />
         </TouchableOpacity>
      </Box>
   );
};

export default SearchItem;

import React from 'react';
import IconButton from '../../../../components/IconButton/IconButton';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Share = () => {
   return (
      <IconButton
         customHeight={'auto'}
         customWidth={'auto'}
         position="relative"
         borderRadius={'5px'}
         padding={{
            top: theme.sizes.spacing.sm,
            bottom: theme.sizes.spacing.sm,
            left: theme.sizes.spacing.md,
            right: theme.sizes.spacing.md,
         }}
      >
         <Box margin={{ right: theme.sizes.spacing.md }}>
            <FontAwesome size={theme.sizes.fontSize['text-xl']} name="send" color={theme.colors.text.primaryLight} />
         </Box>
         <Text fontSize={theme.sizes.fontSize['text-lg']} fontWeight={400} color={theme.colors.text.secondaryLight}>
            Share
         </Text>
      </IconButton>
   );
};

export default Share;

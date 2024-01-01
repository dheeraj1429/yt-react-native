import React from 'react';
import Box from '../../../../components/Box/Box';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import Like from '../Like/Like';
import Share from '../Share/Share';

export interface SocialHubInterface {
   movieId: string;
}

const SocialHub = ({ movieId }: SocialHubInterface) => {
   return (
      <Box
         display="flex"
         flexDirection="row"
         alignItems="center"
         margin={{ bottom: theme.sizes.spacing.md }}
         gap={'6px'}
      >
         <Like movieId={movieId} />
         <Share />
      </Box>
   );
};

export default SocialHub;

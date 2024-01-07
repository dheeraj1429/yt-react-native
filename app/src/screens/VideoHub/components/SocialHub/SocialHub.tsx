import React from 'react';
import Box from '../../../../components/Box/Box';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import Like from '../Like/Like';
import Share from '../Share/Share';
import AddToList from '../AddToList/AddToList';

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
         <AddToList movieId={movieId} />
      </Box>
   );
};

export default SocialHub;

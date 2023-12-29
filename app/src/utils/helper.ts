import { Spacing } from '../shared/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserResponseInterface } from '../state/features/auth';

export const addApiKeyWithRequest = function (apiUri: string, otherParameters?: Object) {
   let apiUrl = apiUri.endsWith('/') ? apiUri.slice(0, -1) : apiUri;
   apiUrl += `?api_key=${process.env.API_KEY!}`;

   if (otherParameters) {
      for (let [key, value] of Object.entries(otherParameters)) {
         apiUrl += `&${key}=${value}`;
      }
   }

   return apiUrl.toString();
};

export const getPosterImage = (posterUrl: string) => process.env.MOVIES_POSTER_PATH_URI + posterUrl;

export const generateStyles = (pr: string, size?: number) => {
   return size ? `${pr}: ${size}px;` : '';
};

export const getSpaceStyle = ({ top, bottom, left, right, direction, PrType }: Spacing & { PrType: string }) => {
   if (!!direction && direction.position) {
      if (direction.position === 'all') return `${PrType}: ${direction.size}px;`;
      if (direction.position === 'left-right') {
         return `${generateStyles(`${PrType}-left`, direction.size)};${generateStyles(
            `${PrType}-right`,
            direction.size,
         )};`;
      }
      if (direction.position === 'top-bottom') {
         return `${generateStyles(`${PrType}-top`, direction.size)};${generateStyles(
            `${PrType}-bottom`,
            direction.size,
         )};`;
      }
   }

   const styles = [
      generateStyles(`${PrType}-top`, top),
      generateStyles(`${PrType}-bottom`, bottom),
      generateStyles(`${PrType}-left`, left),
      generateStyles(`${PrType}-right`, right),
   ];

   return styles.filter(Boolean).join(' ');
};

export const checkUserIsLoggedIn = async () => {
   const user = await AsyncStorage.getItem('user');
   return user ? (JSON.parse(user) as UserResponseInterface) : null;
};

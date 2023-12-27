import { BoxProps } from '../components/Box/Box';

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

export const generateStyles = (position: BoxProps['position'], pr: string, size?: number) => {
   switch (position) {
      case 'top':
         return `${pr}-top: ${size}px;`;
      case 'bottom':
         return `${pr}-bottom: ${size}px;`;
      case 'left':
         return `${pr}-left: ${size}px;`;
      case 'right':
         return `${pr}-right: ${size}px;`;
      case 'top-bottom':
         return `${pr}-top: ${size}px; ${pr}-bottom: ${size}px;`;
      case 'left-right':
         return `${pr}-left: ${size}px; ${pr}-right: ${size}px;`;
      case 'all':
         return `${pr}: ${size}px;`;
      default:
         return '';
   }
};

export const getPaddingStyle = (position: BoxProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'padding', size);
};

export const getMarginStyle = (position: BoxProps['position'], size?: number) => {
   if (!size) return '';
   return generateStyles(position, 'margin', size);
};

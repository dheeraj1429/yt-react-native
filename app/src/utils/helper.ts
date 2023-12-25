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

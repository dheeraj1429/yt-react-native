import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AxiosService } from 'src/axios/axios.service';
import { GetSingleMovieDetailsInterface } from '.';

@Injectable()
export class MoviesService {
   constructor(private readonly axiosService: AxiosService) {
      moviesApiKey: process.env.MOVIES_API_KEY;
      moviesBaseUrl: process.env.MOVIES_BASE_URL;
      apiAccessToken: process.env.API_ACCESS_TOKEN;
   }

   async getMovieDetails({ movieId }: { movieId: number }): Promise<GetSingleMovieDetailsInterface> {
      try {
         const axiosInstance = this.axiosService.getAxiosInstance();
         const response = await axiosInstance.get(`/movie/${movieId}`, {
            params: { api_key: process.env.MOVIES_API_KEY },
         });
         return response.data;
      } catch (err) {
         console.log(err);
         throw new InternalServerErrorException(
            err.response.data?.status_message || `Could not get details for movie ${movieId}`,
         );
      }
   }
}

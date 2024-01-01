export interface MoviesTrailerPayload {
   tmdb_id: number;
   language?: string;
   categories?: string;
}
export interface MovieTrailerInterface {
   id: string;
   youtube_video_id: string;
   youtube_channel_id: string;
   youtube_thumbnail: string;
   title: string;
   thumbnail: string;
   language: string;
   categories: Array<string>;
   published: string;
   views: number;
}
export interface MoviesTrailerResponse {
   id: string;
   tmdb_id: number;
   imdb_id: string;
   language: string;
   title: string;
   title: string;
   trailer: MovieTrailerInterface;
   videos: Array<MovieTrailerInterface>;
}

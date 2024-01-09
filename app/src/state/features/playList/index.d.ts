import { ApiResponseInterface } from '../../../shared/types';

export interface GetUserPlayListsPayload {
   userId: string;
}
export interface GetAllPlaylistsResponse extends ApiResponseInterface {
   playlists: Array<{
      _id: Types.ObjectId;
      playListName: string;
      movies: Array<{ _id: Types.ObjectId; movieId: string }>;
   }>;
}
export interface CreatePlayListPayload {
   playListName: string;
   userId: string;
}
export interface CreatePlayListResponse extends ApiResponseInterface {}
export interface RemovePlayListPayload {
   playListId: string;
}
export interface RemovePlayListResponse extends ApiResponseInterface {}
export interface StoreMovieInPlaylistDto extends GetUserPlayListsPayload, RemovePlayListPayload {
   movieId: string;
}
export interface StoreMovieInPlaylistResponse extends ApiResponseInterface {
   add: boolean;
}

import { ApiResponseInterface } from '../../../shared/types';

export interface GetUserPlayListsPayload {
   userId: string;
}
export interface GetAllPlaylistsResponse extends ApiResponseInterface {
   playlists: Array<{ _id: string; playListName: string }>;
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

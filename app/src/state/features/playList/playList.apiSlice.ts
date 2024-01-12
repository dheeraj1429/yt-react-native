import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithToken } from '../../../utils/helper';
import {
   CreatePlayListPayload,
   CreatePlayListResponse,
   GetAllPlaylistsResponse,
   GetUserPlayListsPayload,
   RemovePlayListPayload,
   RemovePlayListResponse,
   StoreMovieInPlaylistDto,
   StoreMovieInPlaylistResponse,
} from '.';

const playListTagTypes = {
   getUserPlaylistsTag: 'getUserPlaylistsTag',
};

export const playListApiSlice = createApi({
   reducerPath: 'playListApiSlice',
   baseQuery: baseQueryWithToken(process.env.BACKEND_URL!),
   tagTypes: [...Object.keys(playListTagTypes)],
   endpoints: (builder) => ({
      getUserPlayLists: builder.query<GetAllPlaylistsResponse, GetUserPlayListsPayload>({
         query: ({ userId }) => ({ url: `/bookmark-and-like/get-all-playlists?userId=${userId}` }),
         providesTags: (resultValue) =>
            resultValue?.playlists.length
               ? [
                    { type: playListTagTypes.getUserPlaylistsTag, id: 'getUserPlaylistId' },
                    ...resultValue.playlists.map((item) => ({
                       type: playListTagTypes.getUserPlaylistsTag,
                       id: item._id,
                    })),
                 ]
               : [playListTagTypes.getUserPlaylistsTag],
      }),
      createPlayList: builder.mutation<CreatePlayListResponse, CreatePlayListPayload>({
         query: (body) => ({
            url: '/bookmark-and-like/create-playlist',
            method: 'POST',
            body,
         }),
         invalidatesTags: [playListTagTypes.getUserPlaylistsTag],
      }),
      deletePlayList: builder.mutation<RemovePlayListResponse, RemovePlayListPayload>({
         query: ({ playListId }) => ({
            url: `/bookmark-and-like/remove-playlist?playListId=${playListId}`,
            method: 'DELETE',
         }),
         invalidatesTags: (_, _2, args) => [{ type: playListTagTypes.getUserPlaylistsTag, id: args.playListId }],
      }),
      storeMovieInPlaylist: builder.mutation<StoreMovieInPlaylistResponse, StoreMovieInPlaylistDto>({
         query: (body) => ({
            url: '/bookmark-and-like/store-movie-in-playlist',
            method: 'POST',
            body,
         }),
         invalidatesTags: (_, _2, args) => [{ type: playListTagTypes.getUserPlaylistsTag, id: args.playListId }],
      }),
   }),
});

export const {
   useLazyGetUserPlayListsQuery,
   useCreatePlayListMutation,
   useDeletePlayListMutation,
   useStoreMovieInPlaylistMutation,
} = playListApiSlice;

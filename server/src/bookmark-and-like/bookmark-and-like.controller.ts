import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guards';
import {
   BookmarkMoviesResponse,
   CreatePlaylistResponse,
   DeletePlaylistResponse,
   GetLikedMoviesResponse,
   LikeMoviesResponse,
   MovieLikeStatusResponse,
} from '.';
import { BookmarkAndLikeService } from './bookmark-and-like.service';
import {
   BookmarkDto,
   CreatePlaylistDto,
   DeletePlaylistDto,
   GetLikedMoviesDto,
   LikeDto,
   MovieLikeStatusDto,
} from './dtos/bookmaker.dto';

@UseGuards(JwtGuard)
@Controller('bookmark-and-like')
export class BookmarkAndLikeController {
   constructor(private readonly bookmarkAndLikeService: BookmarkAndLikeService) {}

   @Post('add-remove-bookmark')
   @HttpCode(HttpStatus.OK)
   async bookmarkMovies(@Body() body: BookmarkDto): Promise<BookmarkMoviesResponse> {
      return this.bookmarkAndLikeService.bookmarkMovies(body);
   }

   @Post('add-remove-like')
   @HttpCode(HttpStatus.OK)
   async likeMovies(@Body() body: LikeDto): Promise<LikeMoviesResponse> {
      return this.bookmarkAndLikeService.likeMovies(body);
   }

   @Get('movie-like-status')
   @HttpCode(HttpStatus.OK)
   async movieLikeStatus(@Query() query: MovieLikeStatusDto): Promise<MovieLikeStatusResponse> {
      return this.bookmarkAndLikeService.movieLikeStatus(query);
   }

   @Get('/get-liked-movies')
   @HttpCode(HttpStatus.OK)
   async getLikedMovies(@Query() query: GetLikedMoviesDto): Promise<GetLikedMoviesResponse> {
      return this.bookmarkAndLikeService.getLikedMovies(query);
   }

   @Post('create-playlist')
   @HttpCode(HttpStatus.CREATED)
   async createPlaylist(@Body() body: CreatePlaylistDto): Promise<CreatePlaylistResponse> {
      return this.bookmarkAndLikeService.createPlaylist(body);
   }

   @Delete('remove-playlist')
   @HttpCode(HttpStatus.OK)
   async deletePlaylist(@Query() query: DeletePlaylistDto): Promise<DeletePlaylistResponse> {
      return this.bookmarkAndLikeService.deletePlaylist(query);
   }
}

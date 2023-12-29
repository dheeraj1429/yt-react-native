import { Body, Controller, Post } from '@nestjs/common';
import { BookmarkAndLikeService } from './bookmark-and-like.service';
import { BookmarkDto, LikeDto } from './dtos/bookmaker.dto';
import { BookmarkMoviesResponse, LikeMoviesResponse } from '.';

@Controller('bookmark-and-like')
export class BookmarkAndLikeController {
   constructor(private readonly bookmarkAndLikeService: BookmarkAndLikeService) {}

   @Post('add-remove-bookmark')
   async bookmarkMovies(@Body() body: BookmarkDto): Promise<BookmarkMoviesResponse> {
      return this.bookmarkAndLikeService.bookmarkMovies(body);
   }

   @Post('add-remove-like')
   async likeMovies(@Body() body: LikeDto): Promise<LikeMoviesResponse> {
      return this.bookmarkAndLikeService.likeMovies(body);
   }
}

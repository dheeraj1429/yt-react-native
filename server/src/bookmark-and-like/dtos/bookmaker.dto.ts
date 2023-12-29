import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UserAndMovieDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   readonly userId: Types.ObjectId;

   @IsNotEmpty()
   @IsString()
   readonly movieId: string;
}

export class BookmarkDto extends UserAndMovieDto {}
export class LikeDto extends UserAndMovieDto {}
export class MovieLikeStatusDto extends UserAndMovieDto {}

import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UserIdDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   readonly userId: Types.ObjectId;
}

export class UserAndMovieDto extends UserIdDto {
   @IsNotEmpty()
   @IsString()
   readonly movieId: string;
}

export class BookmarkDto extends UserAndMovieDto {}
export class LikeDto extends UserAndMovieDto {}
export class MovieLikeStatusDto extends UserAndMovieDto {}
export class GetLikedMoviesDto extends UserIdDto {
   @IsNotEmpty()
   @IsString()
   readonly page: string;
}

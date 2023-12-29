import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UserAndMovieDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   userId: Types.ObjectId;

   @IsNotEmpty()
   @IsString()
   movieId: string;
}

export class BookmarkDto extends UserAndMovieDto {}
export class LikeDto extends UserAndMovieDto {}

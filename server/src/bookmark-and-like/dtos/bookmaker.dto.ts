import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
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
export class CreatePlaylistDto extends UserIdDto {
   @IsNotEmpty()
   @IsString()
   readonly playListName: string;
}
export class DeletePlaylistDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   readonly playListId: Types.ObjectId;
}
export class StoreMovieInPlaylistDto extends UserAndMovieDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   readonly playListId: Types.ObjectId;
}

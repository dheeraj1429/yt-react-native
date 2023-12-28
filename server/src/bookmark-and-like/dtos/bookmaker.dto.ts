import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class BookmarkDto {
   @IsNotEmpty()
   @IsString()
   @IsMongoId()
   userId: Types.ObjectId;

   @IsNotEmpty()
   @IsString()
   movieId: string;
}

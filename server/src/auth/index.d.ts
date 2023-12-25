import { Types } from 'mongoose';
import { AuthDocument } from './schemas/auth.schema';
import { ApiResponseInterface } from 'src/shared/types';

export interface UserInterface {
   _id: Types.ObjectId;
   name: string;
   email: string;
   createdAt: Date;
   avatar: string;
   accessToken?: string;
   refreshToken?: string;
}
export interface UserResponseInterface extends ApiResponseInterface {
   user: UserInterface;
}
export type GenerateAccessToken = { success: true; accessToken: string };

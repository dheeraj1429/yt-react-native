export interface UserInterface {
   _id: Types.ObjectId;
   name: string;
   email: string;
   createdAt: Date;
   avatar: string;
   accessToken?: string;
   refreshToken?: string;
}
export interface UserAuthPayload {
   email: string;
   password: string;
}
export interface UserResponseInterface extends ApiResponseInterface {
   user: UserInterface;
}
export interface InitialStateInterface {
   auth: UserResponseInterface | null;
}

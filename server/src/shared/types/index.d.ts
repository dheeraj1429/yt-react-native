export interface ApiResponseInterface {
   success: boolean;
   error: boolean;
   message?: string;
}
export interface KnownError {
   message: string[] | string;
   error?: string;
   statusCode?: string;
}

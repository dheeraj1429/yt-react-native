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
export interface PaginationInterface {
   page?: number;
   total_pages?: number;
   total_results?: number;
}

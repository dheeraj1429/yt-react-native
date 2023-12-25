import { SetMetadata } from "@nestjs/common";
export const Token = (...token: string[]) => SetMetadata("token", token);

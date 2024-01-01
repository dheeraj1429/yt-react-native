import { DynamicModule, Module } from '@nestjs/common';
import { AxiosService } from './axios.service';

@Module({})
export class AxiosModule {
   static forRoot(baseUrl: string): DynamicModule {
      return {
         module: AxiosModule,
         providers: [{ provide: AxiosService, useFactory: () => new AxiosService(baseUrl) }],
         exports: [AxiosService],
      };
   }
}

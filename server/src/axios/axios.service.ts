import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosService {
   private readonly axiosInstance: AxiosInstance;
   private readonly baseUrl: string;

   constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
      this.axiosInstance = axios.create({ baseURL: this.baseUrl, paramsSerializer: this.customParamsSerializer });
   }

   private customParamsSerializer(params: any) {
      const paramsSerializer = Object.keys(params)
         .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
         .join('&');
      return paramsSerializer;
   }

   getAxiosInstance(): AxiosInstance {
      return this.axiosInstance;
   }
}

import { Module, forwardRef } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { AxiosModule } from 'src/axios/axios.module';

@Module({
   imports: [forwardRef(() => AxiosModule.forRoot(process.env.MOVIES_BASE_URL))],
   providers: [MoviesService],
   exports: [MoviesService],
})
export class MoviesModule {}

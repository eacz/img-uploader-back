import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ImagesModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { CommonModule } from './common/common.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ImagesModule, CommonModule],
})
export class AppModule {}

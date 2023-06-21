import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { FilesService } from './files.service';

@Module({
  providers: [CloudinaryProvider, CloudinaryService, FilesService],
  exports: [CloudinaryProvider, CloudinaryService, FilesService],
})
export class CommonModule {}

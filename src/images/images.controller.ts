import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { fileExtensionFilter } from 'src/common/filters/file-extension.filter';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', { fileFilter: fileExtensionFilter }),
  )
  create(@UploadedFile() image: Express.Multer.File) {
    return this.imagesService.create(image);
  }
}

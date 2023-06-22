import { BadRequestException, Injectable } from '@nestjs/common';
import { FilesService } from '../common/files.service';

@Injectable()
export class ImagesService {
  constructor(private readonly filesService: FilesService) {}

  async create(image: Express.Multer.File) {
    if (!image) {
      throw new BadRequestException('You should send an image');
    }
    const fileUploaded = await this.filesService.uploadImage(image);

    return fileUploaded.secure_url;
  }
}

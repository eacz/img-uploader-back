import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ImagesService {
  create(image: Express.Multer.File) {
    if (!image) {
      throw new BadRequestException('You should send an image');
    }
    console.log(image);

    return 'This action adds a new image';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola buenas, ¿como le va?';
  }

  getGretting(): string {
    return 'estas son gretting'
  }
}

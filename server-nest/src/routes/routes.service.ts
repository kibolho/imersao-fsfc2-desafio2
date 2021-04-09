import { Injectable } from '@nestjs/common';
import { Routes } from './entities/routes.entity';
import { getRandomInRange } from 'src/utils/random';

@Injectable()
export class RoutesService {
  private routes: Routes[] = Array.from(Array(3)).map((_, i) => ({
      title: `${i+1}a rota`,
      startPosition: {
        latitude: getRandomInRange(-180, 180, 3),
        longitude: getRandomInRange(-180, 180, 3),
      },
      endPosition: {
        latitude: getRandomInRange(-180, 180, 3),
        longitude: getRandomInRange(-180, 180, 3),
      }
  }));

  async getRoutes() {
      return this.routes
  }
}
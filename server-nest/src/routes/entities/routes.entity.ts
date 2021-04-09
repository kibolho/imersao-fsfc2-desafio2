
export interface Position {
  latitude: number;
  longitude: number;
}

export class Routes {
  title: string;
  startPosition: Position;
  endPosition: Position;
}

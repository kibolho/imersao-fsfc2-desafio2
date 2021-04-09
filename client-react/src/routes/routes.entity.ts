export interface Position {
  latitude: number;
  longitude: number;
}

export interface Routes {
  title: string;
  startPosition: Position;
  endPosition: Position;
}

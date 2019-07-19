export interface Point {
  x: number;
  y: number;
}

export interface Round {
  id: string;
  level: number;
  map: string[][];
  targetPoints: Point[];
  side?: number;
}

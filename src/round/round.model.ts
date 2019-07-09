interface Point {
  x: number;
  y: number;
}

export interface Round {
  level: number;
  target?: Point;
  side: number;
  map: number[];
}

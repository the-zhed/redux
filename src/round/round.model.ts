export interface TargetPoint {
  x: number;
  y: number;
}

export interface Round {
  level: number;
  map: string[][];
  targetPoint?: TargetPoint[];
  sideLength?: number;
}

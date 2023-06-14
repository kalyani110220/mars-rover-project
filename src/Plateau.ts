export class Plateau {
    private readonly maxX: number;
    private readonly maxY: number;
  
    constructor(maxX: number, maxY: number) {
      this.maxX = maxX;
      this.maxY = maxY;
    }
  
    public isValidPosition(x: number, y: number): boolean {
      return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
    }
  }
  
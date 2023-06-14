export class MarsRover {
    private x: number;
    private y: number;
    private orientation: 'N' | 'S' | 'W' | 'E';
  
    constructor(x: number, y: number, orientation: 'N' | 'S' | 'W' | 'E') {
      this.x = x;
      this.y = y;
      if (orientation !== 'N' && orientation !== 'S' && orientation !== 'W' && orientation !== 'E') {
        throw new Error(`Invalid orientation: ${orientation}`);
      }
      this.orientation = orientation;
    }
  
    rotateRight(): void {
      switch (this.orientation) {
        case 'N':
          this.orientation = 'E';
          break;
        case 'E':
          this.orientation = 'S';
          break;
        case 'S':
          this.orientation = 'W';
          break;
        case 'W':
          this.orientation = 'N';
          break;
        default:
          throw new Error(`Invalid orientation: ${this.orientation}`);
      }
    }
  
    rotateLeft(): void {
      switch (this.orientation) {
        case 'N':
          this.orientation = 'W';
          break;
        case 'W':
          this.orientation = 'S';
          break;
        case 'S':
          this.orientation = 'E';
          break;
        case 'E':
          this.orientation = 'N';
          break;
        default:
          throw new Error(`Invalid orientation: ${this.orientation}`);
      }
    }
  
    moveForward(): void {
      switch (this.orientation) {
        case 'N':
          this.y += 1;
          break;
        case 'E':
          this.x += 1;
          break;
        case 'S':
          this.y -= 1;
          break;
        case 'W':
          this.x -= 1;
          break;
        default:
          throw new Error(`Invalid orientation: ${this.orientation}`);
      }
    }
  
    getPosition(): string {
      return `${this.x} ${this.y} ${this.orientation}`;
    }
  
    getOrientation(): 'N' | 'S' | 'W' | 'E' {
      return this.orientation;
    }
  }
  
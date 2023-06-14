export class MarsRover {
    x: number;
    y: number;
    orientation: string;
  
    constructor(x: number, y: number, orientation: string) {
      this.x = x;
      this.y = y;
      this.orientation = orientation;
    }

    move(): void {
        if (this.orientation === 'N') {
          this.y += 1;
        } else if (this.orientation === 'E') {
          this.x += 1;
        } else if (this.orientation === 'S') {
          this.y -= 1;
        } else if (this.orientation === 'W') {
          this.x -= 1;
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
  }
  
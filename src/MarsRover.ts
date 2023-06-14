import { Plateau } from './Plateau';
import { Orientation } from './Orientation';

export class MarsRover {
    private x: number;
    private y: number;
    private orientation: Orientation;
    private readonly plateau: Plateau;

    constructor(x: number, y: number, orientation: string, plateau: Plateau) {
      this.x = x;
      this.y = y;
      this.orientation = this.validateOrientation(orientation);
      this.plateau = plateau;
    }

    private validateOrientation(orientation: string): Orientation {
        const validOrientations: Orientation[] = ['N', 'S', 'W', 'E'];
        if (!validOrientations.includes(orientation as Orientation)) {
          throw new Error(`Invalid orientation: ${orientation}`);
        }
        return orientation as Orientation;
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
      const { maxX, maxY } = this.plateau.getMaxCoordinates();
      if (!this.plateau.isValidPosition(this.x, this.y)) {
        // Handle the case where the rover is outside the plateau boundaries after rotation
        // Reset the rover's position to a valid position within the plateau
        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
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

      const { maxX, maxY } = this.plateau.getMaxCoordinates();
      if (!this.plateau.isValidPosition(this.x, this.y)) {
        // Handle the case where the rover is outside the plateau boundaries after rotation
        // Reset the rover's position to a valid position within the plateau
        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
      }
    }
  
    moveForward(): void {
    let newX = this.x;
    let newY = this.y;
    switch (this.orientation) {
        case 'N':
          newY += 1;
          break;
        case 'S':
          newY -= 1;
          break;
        case 'W':
          newX -= 1;
          break;
        case 'E':
          newX += 1;
          break;
      
        default:
          throw new Error(`Invalid orientation: ${this.orientation}`);
      }
      if (this.plateau.isValidPosition(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  
    getPosition(): string {
      return `${this.x} ${this.y} ${this.orientation}`;
    }
  
    getOrientation(): 'N' | 'S' | 'W' | 'E' {
      return this.orientation;
    }

    public executeCommands(commands: string): void {
        for (let i = 0; i < commands.length; i++) {
          const command = commands[i];
          switch (command) {
            case 'L':
              this.rotateLeft();
              break;
            case 'R':
              this.rotateRight();
              break;
            case 'M':
              this.moveForward();
              break;
            default:
              throw new Error(`Invalid command: ${command}`);
          }
        }
      }
      
  }
  
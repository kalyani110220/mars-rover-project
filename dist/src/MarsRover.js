"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarsRover = void 0;
class MarsRover {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    rotateRight() {
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
    rotateLeft() {
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
    moveForward() {
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
    getPosition() {
        return `${this.x} ${this.y} ${this.orientation}`;
    }
    getOrientation() {
        return this.orientation;
    }
}
exports.MarsRover = MarsRover;
//# sourceMappingURL=MarsRover.js.map
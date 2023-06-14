"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarsRover = void 0;
class MarsRover {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
    move() {
        if (this.orientation === 'N') {
            this.y += 1;
        }
        else if (this.orientation === 'E') {
            this.x += 1;
        }
        else if (this.orientation === 'S') {
            this.y -= 1;
        }
        else if (this.orientation === 'W') {
            this.x -= 1;
        }
    }
    rotateLeft() {
        // Implement the logic to rotate the Rover 90 degrees to the left
        // without changing its position
    }
    rotateRight() {
        // Implement the logic to rotate the Rover 90 degrees to the left
        // without changing its position
    }
}
exports.MarsRover = MarsRover;

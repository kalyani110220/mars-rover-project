"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarsRover = void 0;
class MarsRover {
    constructor(x, y, orientation, plateau) {
        this.x = x;
        this.y = y;
        if (orientation !== 'N' && orientation !== 'S' && orientation !== 'W' && orientation !== 'E') {
            throw new Error(`Invalid orientation: ${orientation}`);
        }
        this.orientation = orientation;
        this.plateau = plateau;
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
        const { maxX, maxY } = this.plateau.getMaxCoordinates();
        if (!this.plateau.isValidPosition(this.x, this.y)) {
            // Handle the case where the rover is outside the plateau boundaries after rotation
            // Reset the rover's position to a valid position within the plateau
            this.x = Math.max(0, Math.min(this.x, maxX));
            this.y = Math.max(0, Math.min(this.y, maxY));
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
        const { maxX, maxY } = this.plateau.getMaxCoordinates();
        if (!this.plateau.isValidPosition(this.x, this.y)) {
            // Handle the case where the rover is outside the plateau boundaries after rotation
            // Reset the rover's position to a valid position within the plateau
            this.x = Math.max(0, Math.min(this.x, maxX));
            this.y = Math.max(0, Math.min(this.y, maxY));
        }
    }
    moveForward() {
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
    getPosition() {
        return `${this.x} ${this.y} ${this.orientation}`;
    }
    getOrientation() {
        return this.orientation;
    }
}
exports.MarsRover = MarsRover;
//# sourceMappingURL=MarsRover.js.map
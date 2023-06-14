"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarsRover = void 0;
class MarsRover {
    constructor(x, y, orientation, plateau) {
        this.x = x;
        this.y = y;
        this.orientation = this.validateOrientation(orientation);
        this.plateau = plateau;
    }
    validateOrientation(orientation) {
        const validOrientations = ['N', 'S', 'W', 'E'];
        if (!validOrientations.includes(orientation)) {
            throw new Error(`Invalid orientation: ${orientation}`);
        }
        return orientation;
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
    executeCommands(commands) {
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
exports.MarsRover = MarsRover;
//# sourceMappingURL=MarsRover.js.map
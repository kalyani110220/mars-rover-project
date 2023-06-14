"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRover_1 = require("../src/MarsRover");
describe('MarsRover', () => {
    test('should move the Rover forward by one grid point', () => {
        const rover = new MarsRover_1.MarsRover(0, 0, 'N');
        rover.move();
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(1);
    });
});
describe('MarsRover', () => {
    test('should rotate the Rover 90 degrees to the left', () => {
        const rover = new MarsRover_1.MarsRover(0, 0, 'N');
        rover.rotateLeft();
        expect(rover.orientation).toBe('W');
        rover.rotateLeft();
        expect(rover.orientation).toBe('S');
        rover.rotateLeft();
        expect(rover.orientation).toBe('E');
        rover.rotateLeft();
        expect(rover.orientation).toBe('N');
    });
});
//# sourceMappingURL=MarsRover.test.js.map
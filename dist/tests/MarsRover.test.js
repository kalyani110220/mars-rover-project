"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRover_1 = require("../src/MarsRover");
const Plateau_1 = require("../src/Plateau");
describe('MarsRover', () => {
    let plateau;
    beforeEach(() => {
        plateau = new Plateau_1.Plateau(5, 5);
    });
    describe('rotateLeft', () => {
        it('should rotate left from "N" to "W"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'N', plateau);
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('W');
        });
        it('should rotate left from "S" to "E"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'S', plateau);
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('E');
        });
        it('should rotate left from "W" to "S"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'W', plateau);
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('S');
        });
        it('should rotate left from "E" to "N"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'E', plateau);
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('N');
        });
        it('should stay in the same position after rotating left', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N', plateau);
            rover.rotateLeft();
            const expectedPosition = '0 0 W';
            expect(rover.getPosition()).toBe(expectedPosition);
        });
    });
    describe('rotateRight', () => {
        it('should rotate right from "N" to "E"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'N', plateau);
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('E');
        });
        it('should rotate right from "S" to "W"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'S', plateau);
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('W');
        });
        it('should rotate right from "W" to "N"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'W', plateau);
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('N');
        });
        it('should rotate right from "E" to "S"', () => {
            const rover = new MarsRover_1.MarsRover(1, 1, 'E', plateau);
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('S');
        });
        it('should stay in the same position after rotating right', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N', plateau);
            rover.rotateRight();
            const expectedPosition = '0 0 E';
            expect(rover.getPosition()).toBe(expectedPosition);
        });
    });
    describe('moveForward', () => {
        it('should move forward correctly when facing North', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N', plateau);
            rover.moveForward();
            expect(rover.getPosition()).toBe('0 1 N');
        });
        it('should move forward correctly when facing South', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'S', plateau);
            rover.moveForward();
            const expectedPosition = '0 0 S';
            expect(rover.getPosition()).toBe(expectedPosition);
        });
        it('should move forward correctly when facing West', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'W', plateau);
            rover.moveForward();
            const expectedPosition = '0 0 W';
            expect(rover.getPosition()).toBe(expectedPosition);
        });
        it('should move forward correctly when facing East', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'E', plateau);
            rover.moveForward();
            expect(rover.getPosition()).toBe('1 0 E');
        });
        it('should not move forward if it exceeds the plateau boundaries', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N', plateau);
            // Attempt to move the rover outside the plateau boundaries
            rover.moveForward();
            // Verify that the rover's position remains unchanged
            const expectedPosition = '0 1 N';
            expect(rover.getPosition()).toBe(expectedPosition);
        });
    });
});
//# sourceMappingURL=MarsRover.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRover_1 = require("../src/MarsRover");
describe('MarsRover', () => {
    describe('rotateRight()', () => {
        it('should rotate from North to East', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('E');
        });
        it('should rotate from East to South', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'E');
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('S');
        });
        it('should rotate from South to West', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'S');
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('W');
        });
        it('should rotate from West to North', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'W');
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('N');
        });
        it('should handle invalid orientation', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.rotateRight();
            expect(rover.getOrientation()).toBe('X'); // Invalid orientation
        });
    });
    describe('rotateLeft()', () => {
        it('should rotate from North to West', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('W');
        });
        it('should rotate from West to South', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'W');
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('S');
        });
        it('should rotate from South to East', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'S');
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('E');
        });
        it('should rotate from East to North', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'E');
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('N');
        });
        it('should handle invalid orientation', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.rotateLeft();
            expect(rover.getOrientation()).toBe('X'); // Invalid orientation
        });
    });
    describe('moveForward()', () => {
        it('should move forward from (0, 0) facing North', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.moveForward();
            expect(rover.getPosition()).toBe('0 1 N');
        });
        it('should move forward from (0, 0) facing East', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'E');
            rover.moveForward();
            expect(rover.getPosition()).toBe('1 0 E');
        });
        it('should move forward from (0, 0) facing South', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'S');
            rover.moveForward();
            expect(rover.getPosition()).toBe('0 -1 S');
        });
        it('should move forward from (0, 0) facing West', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'W');
            rover.moveForward();
            expect(rover.getPosition()).toBe('-1 0 W');
        });
        it('should handle invalid orientation', () => {
            const rover = new MarsRover_1.MarsRover(0, 0, 'N');
            rover.moveForward();
            expect(rover.getOrientation()).toBe('X'); // Invalid orientation
        });
    });
});
//# sourceMappingURL=MarsRover.test.js.map
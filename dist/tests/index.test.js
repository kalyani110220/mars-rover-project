"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRover_1 = require("../src/MarsRover");
const Plateau_1 = require("../src/Plateau");
describe('Mars Rover Program', () => {
    it('should execute the example test case correctly', () => {
        const plateau = new Plateau_1.Plateau(5, 5);
        const rover1 = new MarsRover_1.MarsRover(1, 2, 'N', plateau);
        rover1.executeCommands('LMLMLMLMM');
        expect(rover1.getPosition()).toBe('1 3 N');
        const rover2 = new MarsRover_1.MarsRover(3, 3, 'E', plateau);
        rover2.executeCommands('MMRMMRMRRM');
        expect(rover2.getPosition()).toBe('5 1 E');
    });
});
//# sourceMappingURL=index.test.js.map
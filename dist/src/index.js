"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Plateau_1 = require("./Plateau");
const MarsRover_1 = require("./MarsRover");
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    // Read the plateau size
    rl.question('Enter the plateau size (format: maxX maxY): ', (plateauSize) => {
        const [maxX, maxY] = plateauSize.split(' ').map(Number);
        // Create the plateau object
        const plateau = new Plateau_1.Plateau(maxX, maxY);
        // Read the rover instructions
        rl.question('Enter the rover instructions (format: x y orientation): ', (roverPosition) => {
            const [x, y, orientation] = roverPosition.split(' ');
            if (!validateOrientation(orientation)) {
                console.log(`Invalid orientation: ${orientation}`);
                rl.close();
                return;
            }
            const rover = new MarsRover_1.MarsRover(Number(x), Number(y), orientation, plateau);
            rl.question('Enter the movement instructions: ', (movementInstructions) => {
                // Process the movement instructions for the rover
                rover.executeCommands(movementInstructions);
                // Output the final position of the rover
                console.log(`Final position: ${rover.getPosition()}`);
                rl.close();
            });
        });
    });
    function validateOrientation(orientation) {
        const validOrientations = ['N', 'S', 'W', 'E'];
        return validOrientations.includes(orientation.toUpperCase());
    }
}
main();
//# sourceMappingURL=index.js.map
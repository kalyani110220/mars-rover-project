import { Plateau } from './Plateau';
import { MarsRover } from './MarsRover';
import { Orientation } from './Orientation';

function main(): void {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Read the plateau size
  rl.question('Enter the plateau size (format: maxX maxY): ', (plateauSize: string) => {
    const [maxX, maxY] = plateauSize.split(' ').map(Number);

    // Create the plateau object
    const plateau = new Plateau(maxX, maxY);

    // Read the rover instructions
    rl.question('Enter the rover instructions (format: x y orientation): ', (roverPosition: string) => {
      const [x, y, orientation] = roverPosition.split(' ');
      if (!validateOrientation(orientation)) {
        console.log(`Invalid orientation: ${orientation}`);
        rl.close();
        return;
      }
      const rover = new MarsRover(Number(x), Number(y), orientation, plateau);

      rl.question('Enter the movement instructions: ', (movementInstructions: string) => {
        // Process the movement instructions for the rover
        rover.executeCommands(movementInstructions);

        // Output the final position of the rover
        console.log(`Final position: ${rover.getPosition()}`);

        rl.close();
      });
    });
  });

  function validateOrientation(orientation: string): boolean {
    const validOrientations: Orientation[] = ['N', 'S', 'W', 'E'];
    return validOrientations.includes(orientation.toUpperCase() as Orientation);
  }
}

main();

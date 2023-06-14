import { MarsRover } from '../src/MarsRover';

describe('MarsRover', () => {
  test('should move the Rover forward by one grid point', () => {
    const rover = new MarsRover(0, 0, 'N');
    rover.move();
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(1);
  });
});

describe('MarsRover', () => {
    test('should rotate the Rover 90 degrees to the left', () => {
      const rover = new MarsRover(0, 0, 'N');
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

  describe('MarsRover', () => {
    test('should rotate the Rover 90 degrees to the right', () => {
      const rover = new MarsRover(0, 0, 'N');
      rover.rotateRight();
      expect(rover.orientation).toBe('E');
  
      rover.rotateRight();
      expect(rover.orientation).toBe('S');
  
      rover.rotateRight();
      expect(rover.orientation).toBe('W');
  
      rover.rotateRight();
      expect(rover.orientation).toBe('N');
    });
  });

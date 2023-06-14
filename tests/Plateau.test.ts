import { Plateau } from '../src/Plateau';

describe('Plateau', () => {
  describe('isValidPosition', () => {
    it('should return true for valid positions within the plateau boundaries', () => {
      const plateau = new Plateau(5, 5);

      expect(plateau.isValidPosition(0, 0)).toBe(true);
      expect(plateau.isValidPosition(3, 3)).toBe(true);
      expect(plateau.isValidPosition(5, 5)).toBe(true);
    });

    it('should return false for positions outside the plateau boundaries', () => {
      const plateau = new Plateau(5, 5);

      expect(plateau.isValidPosition(-1, 0)).toBe(false);
      expect(plateau.isValidPosition(0, -1)).toBe(false);
      expect(plateau.isValidPosition(6, 3)).toBe(false);
      expect(plateau.isValidPosition(3, 6)).toBe(false);
    });
  });

  describe('getMaxCoordinates', () => {
    it('should return the maximum coordinates of the plateau', () => {
      const plateau = new Plateau(5, 5);

      expect(plateau.getMaxCoordinates()).toEqual({ maxX: 5, maxY: 5 });
    });
  });
});

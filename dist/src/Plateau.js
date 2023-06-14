"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plateau = void 0;
class Plateau {
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
    }
    isValidPosition(x, y) {
        return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
    }
    getMaxCoordinates() {
        return { maxX: this.maxX, maxY: this.maxY };
    }
}
exports.Plateau = Plateau;
//# sourceMappingURL=Plateau.js.map
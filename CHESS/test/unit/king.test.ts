import Position from '../../src/position';
import King from '../../src/king';

describe("King tests", () => {
    let king = new King('White', 4, 'D');

    test("Should move one step forward", () => {
        expect(king.canMoveTo(new Position(5,'D'))).toBe(true);
    });

    test("Should move one step backward", () => {
        expect(king.canMoveTo(new Position(3,'D'))).toBe(true);
    });

    test("Should move one step to the left", () => {
        expect(king.canMoveTo(new Position(4,'C'))).toBe(true);
    });

    test("Should move one step to the right", () => {
        expect(king.canMoveTo(new Position(4,'E'))).toBe(true);
    });

    test("Should move one step to the left & right", () => {
        expect(king.canMoveTo(new Position(5,'E'))).toBe(true);
    });

    test("Shouldn't move to the same position", () => {
        expect(king.canMoveTo(new Position(4,'D'))).toBe(false);
    });

    test("Shouldn't move to that position", () => {
        expect(king.canMoveTo(new Position(8,'F'))).toBe(false);
    });
});
import Position from '../../src/position';
import Bishop from '../../src/bishop';

describe("Bishop tests", () => {
    let bishop = new Bishop('White', 4, 'D');

    test("Should move in diagonal to the top right side", () => {
        expect(bishop.canMoveTo(new Position(6,'F'))).toBe(true);
    });

    test("Should move in diagonal to the bottom left side", () => {
        expect(bishop.canMoveTo(new Position(2,'B'))).toBe(true);
    });

    test("Should move in diagonal to the top left side", () => {
        expect(bishop.canMoveTo(new Position(6,'B'))).toBe(true);
    });

    test("Should move in diagonal to the bottom right side", () => {
        expect(bishop.canMoveTo(new Position(2,'F'))).toBe(true);
    });

    test("Shouldn't move to that position", () => {
        expect(bishop.canMoveTo(new Position(8,'A'))).toBe(false);
    });

    test("Shouldn't move to the same position", () => {
        expect(bishop.canMoveTo(new Position(4,'D'))).toBe(false);
    });
});
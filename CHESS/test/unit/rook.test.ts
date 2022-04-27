import Position from '../../src/position';
import Rook from '../../src/rook';

describe("Rook tests", () => {
    let rook = new Rook('White', 4, 'D');

    test("Should move 3 steps forward", () => {
        expect(rook.canMoveTo(new Position(7,'D'))).toBe(true);
    });

    test("Should move 3 steps backward", () => {
        expect(rook.canMoveTo(new Position(1,'D'))).toBe(true);
    });

    test("Should move 3 steps to the right", () => {
        expect(rook.canMoveTo(new Position(4,'G'))).toBe(true);
    });

    test("Should move 3 steps to the left", () => {
        expect(rook.canMoveTo(new Position(4,'A'))).toBe(true);
    });

    test("Shouldn't move to that position", () => {
        expect(rook.canMoveTo(new Position(8,'A'))).toBe(false);
    });

    test("Shouldn't move to the same position", () => {
        expect(rook.canMoveTo(new Position(4,'D'))).toBe(false);
    });
});
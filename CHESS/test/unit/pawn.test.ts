import Position from '../../src/position';
import Pawn from '../../src/pawn';

describe("Pawn tests", () => {
    let pawn = new Pawn('White', 2, 'D');

    test("Should move one step forward", () => {
        expect(pawn.canMoveTo(new Position(3,'D'))).toBe(true);
    });

    test("Should move two steps forward", () => {
        expect(pawn.canMoveTo(new Position(4,'D'))).toBe(true);
    });

    test("Shouldn't move three steps forward", () => {
        expect(pawn.canMoveTo(new Position(5,'D'))).toBe(false);
    });

    test("Shouldn't move one step backward", () => {
        expect(pawn.canMoveTo(new Position(1,'D'))).toBe(false);
    });

    test("Shouldn't move to that position", () => {
        expect(pawn.canMoveTo(new Position(8,'A'))).toBe(false);
    });

    test("Shouldn't move to the same position", () => {
        expect(pawn.canMoveTo(new Position(2,'D'))).toBe(false);
    });
});
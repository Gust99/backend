import Position from '../../src/position';
import Queen from '../../src/queen';

describe("Queen tests", () => {
    let queen = new Queen('White', 4, 'D');

    test("Should move like rook", () => {
        expect(queen.canMoveTo(new Position(4,'F'))).toBe(true);
    });

    test("Should move like rook", () => {
        expect(queen.canMoveTo(new Position(6,'D'))).toBe(true);
    });

    test("Should move like bishop", () => {
        expect(queen.canMoveTo(new Position(6,'F'))).toBe(true);
    });

    test("Should move like bishop", () => {
        expect(queen.canMoveTo(new Position(3,'C'))).toBe(true);
    });

    test("Shouldn't move to that position", () => {
        expect(queen.canMoveTo(new Position(8,'A'))).toBe(false);
    });

    test("Shouldn't move to the same position", () => {
        expect(queen.canMoveTo(new Position(4,'D'))).toBe(false);
    });
});
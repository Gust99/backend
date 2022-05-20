import Knight from "../../core/Domain/Logic/Pieces/Knight";
import Position from "../../core/Domain/Logic/Position";


describe("Knight tests", () => {
    let knight = new Knight({ teamID: 2, color: "White" },new Position(4,'D'));

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(6,'C'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(6,'E'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(2,'C'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(2,'E'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(5,'B'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(5,'F'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(3,'B'))).toBe(true);
    });

    test("Should move to that position", () => {
        expect(knight.canMoveTo(new Position(3,'F'))).toBe(true);
    });

    test("Shouldn't move to that position", () => {
        expect(knight.canMoveTo(new Position(8,'A'))).toBe(false);
    });

    test("Shouldn't move to the same position", () => {
        expect(knight.canMoveTo(new Position(4,'D'))).toBe(false);
    });
});
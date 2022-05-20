import Queen from "../../core/Domain/Logic/Pieces/Queen";
import Position from "../../core/Domain/Logic/Position";


describe("Queen tests", () => {
    let queen = new Queen({ teamID: 4, color: "White" },new Position(4,'D'));

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
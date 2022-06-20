import Game from '../../core/Domain/Logic/Game';
import Position from '../../core/Domain/Logic/Position';

describe("Game Tests", () => {
    let game = new Game({
        pieces: [],
        positions: [],
        whiteKilledPieces: [],
        blackKilledPieces: [],
        whiteTurn: true
    });
    game.start();

    test("White pawn to A4", () => {
        expect(game.next(
            { teamID: 9, color: "White" },
            new Position(4,'A')
        )).toBe(true);
    });

    test("White move in Black turn", () => {
        expect(game.next(
            { teamID: 10, color: "White" },
            new Position(4,'B')
        )).toBe(false);
    });

    test("Black pawn to A5", () => {
        expect(game.next(
            { teamID: 9, color: "Black" },
            new Position(5,'A')
        )).toBe(true);
    });

    test("White pawn to A5, invalid", () => {
        expect(game.next(
            { teamID: 9, color: "White" },
            new Position(5,'A')
        )).toBe(false);
    });

    test("White knight to F3", () => {
        expect(game.next(
            { teamID: 7, color: "White" },
            new Position(3,'F')
        )).toBe(true);
    });

    test("Black pawn to E6", () => {
        expect(game.next(
            { teamID: 13, color: "Black" },
            new Position(6,'E')
        )).toBe(true);
    });

    test("White rook to H5", () => {
        expect(game.next(
            { teamID: 8, color: "White" },
            new Position(5,'H')
        )).toBe(false);
    });

    test("White pawn to D3", () => {
        expect(game.next(
            { teamID: 12, color: "White" },
            new Position(3,'D')
        )).toBe(true);
    });

    test("Black bishop to B4", () => {
        expect(game.next(
            { teamID: 6, color: "Black" },
            new Position(4,'B')
        )).toBe(true);
    });

    test("White pawn to B3", () => {
        expect(game.next(
            { teamID: 10, color: "White" },
            new Position(3,'B')
        )).toBe(false);
    });

    test("White pawn to C3", () => {
        expect(game.next(
            { teamID: 11, color: "White" },
            new Position(3,'C')
        )).toBe(true);
    });
});
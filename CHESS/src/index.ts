import King from './king';
import Position from './position';
import Queen from './queen';

let king = new King('White', 1, 'A');

console.log(king);

console.log(
    king.canMoveTo(new Position(2, 'B')),
    king.canMoveTo(new Position(5, 'D'))
);

console.log(
    (+true ^ +true) === 1,
    (+false ^ +false) === 1,
    (+true ^ +false) === 1,
    (+false ^ +true) === 1
);

let queen = new Queen('White', 1, 'A');

console.log(queen);

console.log(
    queen.canMoveTo(new Position(3, 'C')),
    queen.canMoveTo(new Position(3, 'A')),
    queen.canMoveTo(new Position(3, 'D')),
    queen.canMoveTo(new Position(4, 'B')),
);
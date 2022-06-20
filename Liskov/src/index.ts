import Square from './Square';
import Rectangle from './Rectangle';
import Quadrilateral from './Quadrilateral';

let square:Quadrilateral = new Square(3,3);
let rectangle:Quadrilateral = new Rectangle(3,4);

test(square);
test(rectangle);

function test(object: Quadrilateral) {
    if(object.calcArea() === 12) {
        console.log('Success');
    } else {
        console.log('Error');
    }
}
export default abstract class Quadrilateral {
    constructor(
        public a: number,
        public b: number
    ) {}

    calcArea() {
        return this.a * this.b;
    }
}
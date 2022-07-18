import CarProductSecurity from './CarProductSecurity';
export default abstract class Company {
    constructor(
        private carProductSecurity: CarProductSecurity,
        private carType: string
    ) {}

    abstract assemble(): void;
    abstract produceProduct(): void;

    printDetails(): void {
        console.log('Product', this.carProductSecurity.productName());
        console.log('Car type', this.carType);
    };
}
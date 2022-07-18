import CarProductSecurity from './CarProductSecurity';
export default class GearLocking implements CarProductSecurity {
    productName(): string {
        throw new Error('Method not implemented.');
    }

    produce(): void {
        throw new Error('Method not implemented.');
    }
}
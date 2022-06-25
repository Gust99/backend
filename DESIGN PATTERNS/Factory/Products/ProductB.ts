import IProduct from './IProduct';

export default class ProductB implements IProduct {
    build(): void {
        console.log('Build B');
    }
}
import IProduct from './IProduct';

export default class ProductA implements IProduct {
    build(): void {
        console.log('Build A');
    }
}
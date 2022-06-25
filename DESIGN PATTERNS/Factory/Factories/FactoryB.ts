import Factory from './Factory';
import IProduct from '../Products/IProduct';
import ProductB from '../Products/ProductB';

export default class FactoryB extends Factory {
    createProduct(): IProduct {
        return new ProductB();
    }
}
import Factory from './Factory';
import IProduct from '../Products/IProduct';
import ProductA from '../Products/ProductA';

export default class FactoryA extends Factory {
    createProduct(): IProduct {
        return new ProductA();
    }
}
import IProduct from '../Products/IProduct';

export default abstract class Factory {
    abstract createProduct(): IProduct;
}
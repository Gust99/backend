import FactoryA from './Factory/Factories/FactoryA';
import FactoryB from './Factory/Factories/FactoryB';
import GenericFactory from './Factory/Factories/GenericFactory';
import ProductA from './Factory/Products/ProductA';
import ProductB from './Factory/Products/ProductB';
import IProduct from './Factory/Products/IProduct';

// npm init @eslint/config
// https://eslint.org/docs/latest/user-guide/getting-started
// https://www.simonholywell.com/post/typescript-constructor-type.html

const factoryA = new FactoryA();
const productA = factoryA.createProduct();
productA.build();

const factoryB = new FactoryB();
const productB = factoryB.createProduct();
productB.build();

const a2 = GenericFactory.createProduct<IProduct>(ProductA); // Type of IProduct
// const a2 = GenericFactory.createProduct<Number>(ProductA); // Error, type ProductA does not have properties of type Number
const b2 = GenericFactory.createProduct(ProductB); // Type of ProductB

a2.build();
b2.build();
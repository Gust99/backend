import FactoryA from './Factory/Factories/FactoryA';
import FactoryB from './Factory/Factories/FactoryB';
import GenericFactory from './Factory/Factories/GenericFactory';
import ProductA from './Factory/Products/ProductA';
import ProductB from './Factory/Products/ProductB';

// npm init @eslint/config
// https://eslint.org/docs/latest/user-guide/getting-started

const factoryA = new FactoryA();
const productA = factoryA.createProduct();
productA.build();

const factoryB = new FactoryB();
const productB = factoryB.createProduct();
productB.build();

const a2 = GenericFactory.createProduct(ProductA);
const b2 = GenericFactory.createProduct(ProductB);

a2.build();
b2.build();
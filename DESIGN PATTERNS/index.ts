import FactoryA from './Factory/Factories/FactoryA';
import FactoryB from './Factory/Factories/FactoryB';

const factoryA = new FactoryA();
const productA = factoryA.createProduct();
productA.build();

const factoryB = new FactoryB();
const productB = factoryB.createProduct();
productB.build();
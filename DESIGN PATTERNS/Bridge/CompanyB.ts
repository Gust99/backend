import Company from './Company';
export default class CompanyB extends Company {
    assemble(): void {
        console.log('Compoany B assemble');
    }

    produceProduct(): void {
        console.log('Company B produce product');
    }
}
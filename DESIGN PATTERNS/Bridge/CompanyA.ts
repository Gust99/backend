import Company from './Company';
export default class CompanyA extends Company {
    assemble(): void {
        console.log('Compoany A assemble');
    }

    produceProduct(): void {
        console.log('Company A produce product');
    }
}
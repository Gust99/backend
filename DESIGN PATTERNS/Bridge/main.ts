import CentralLocking from './CentralLocking';
import CompanyA from './CompanyA';

const companyA = new CompanyA(new CentralLocking(), 'companyA');
console.log(companyA);
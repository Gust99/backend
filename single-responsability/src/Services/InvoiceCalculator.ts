import ICalculator from '../IServices/ICalculator';
import { Invoice } from '../Entities/invoice';

export default class InvoiceCalculator implements ICalculator<Invoice> {
    calculateTotal(innvoice: Invoice) {
        return innvoice.total + innvoice.tax;
    }
}
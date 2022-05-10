import IExporter from '../IServices/IExporter';
import IFormatter from '../IServices/IFormatter';

export default class Exporter<T extends IFormatter> implements IExporter<T> {
    constructor(
        private formater: T
    ) {}
    
    save(): void {
        this.formater.save();
    }
}
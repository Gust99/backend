import IFormatter from '../IServices/IFormatter';

export default class CSV<T> implements IFormatter {
    constructor(
        private object: T
    ) {}

    save() {
        console.log('CSV');
    }
}
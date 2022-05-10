export default interface ICalculator<T> {
    calculateTotal(object: T): number;
}
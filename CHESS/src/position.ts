import { Row, Column } from './types';

export default class Position {
    constructor(
        private row: Row,
        private column: Column
    ) {}

    getRow() {
        return this.row;
    }

    getColumn() {
        return this.column;
    }
}
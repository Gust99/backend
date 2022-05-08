import { File, Rank } from './types';

export default class Position {
    constructor(
        private rank: Rank,
        private file: File
    ) {}

    getRank() {
        return this.rank;
    }

    getFile() {
        return this.file;
    }
}
import { File, PositionState, Rank } from './types';

export default class Position {
    private state: PositionState = 'Free';

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

    getPosition(): PositionState {
        return this.state;
    }

    getState(): PositionState {
        return this.state;
    }

    setState(state: PositionState) {
        this.state = state;
    }
}
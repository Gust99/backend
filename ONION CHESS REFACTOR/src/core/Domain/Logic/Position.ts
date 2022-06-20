import { File, PositionState, Rank, Attack } from './types';

export default class Position {
    private state: PositionState = {
        free: true,
        attacked: 'None'
    };

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

    setAvailabilityStatus(value: boolean) {
        this.state.free = value;
    }

    setAttackStatus(value: Attack) {
        this.state.attacked = value;
    }
}
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Color = 'Black' | 'White';

export type PieceTeamID = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
                    9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export type PieceGameID = {
    teamID: PieceTeamID,
    color: Color
}

export type Attack = 'WhiteAttack' | 'BlackAttack' | 'BothAttack' | 'None';

export type PositionState = {
    free: boolean,
    attacked: Attack
};

export type KingState = 'Free' | 'Checked';
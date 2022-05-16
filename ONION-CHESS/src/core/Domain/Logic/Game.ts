import Position from './Position';
import GameStatus from '../interfaces/GameStatus';
import { PieceGameID } from './types';
import Populator from './Populator';
import IRestriction from '../interfaces/IBlockingRestriction';
import BlockingRestriction from './Restrictions/BlockingRestriction';
import AttackMapping from './Utils/AttackMapping';
import KingCheckRestriction from './Restrictions/KingCheckRestriction';

export default class Game {
    private blockingRestriction: IRestriction = new BlockingRestriction();
    private attackingRestriction: AttackMapping = new AttackMapping();
    private KingCheckRestriction: KingCheckRestriction = new KingCheckRestriction();

    constructor(
        private status: GameStatus
    ) {}

    start(): GameStatus {
        Populator.populate(this.status);
        return this.status;
    }

    next(pieceID: PieceGameID, position: Position): boolean {
        let targetPieceIndex = this.status.pieces.findIndex(pi => JSON.stringify(pi.getID()) === JSON.stringify(pieceID));
        let currentPositionIndex = this.status.positions.findIndex(pos => JSON.stringify(pos) === JSON.stringify(this.status.pieces[targetPieceIndex].getPosition())); 
        let targetPositionIndex = this.status.positions.findIndex(pos => (pos.getFile() === position.getFile() && pos.getRank() === position.getRank()));

        //PIECE AND POSITION FOUNDED
        if(targetPieceIndex === -1 || targetPositionIndex === -1) {
            console.log('Piece or position not found');
            console.log(targetPieceIndex, targetPositionIndex);
            return false;
        }

        //CORRECT TURN
        if(+(pieceID.color === 'White') + +(this.status.whiteTurn) === 1) {
            console.log('Is not your turn');
            return false;
        }

        //POSITION IS PART OF PIECE SCOPE
        const positionOfPiece = this.status.pieces[targetPieceIndex].canMoveTo(position);
        if(!positionOfPiece) {
            return false;
        }

        //PATH TO POSITION IS FREE
        const pathAvailable = this.blockingRestriction.actionAvailable(
            this.status.pieces[targetPieceIndex],
            this.status.positions[targetPositionIndex],
            this.status.positions
        );
        if(!pathAvailable) {
            return false;
        }

        //KING CHECK RESTRICTION, ONLY MOVE KING IF CHECKED
        //KING CHECK RESTRICTION, DONT MOVE PIECES THAT PUT KING ON CHECKED STATE
        if(!this.KingCheckRestriction.actionAvailable(
            this.status.pieces[targetPieceIndex],
            this.status.positions[targetPositionIndex],
            this.status.pieces,
            this.status.positions,
            targetPieceIndex,
            currentPositionIndex,
            targetPositionIndex
        )) {
            return false;
        }

        //MOVE THE PIECE AND UPDATE POSITIONS STATES
        //UPDATE KINGS STATES
        this.status.positions[currentPositionIndex].setState('Free');
        this.status.pieces[targetPieceIndex].moveTo(position);
        this.status.positions[targetPositionIndex].setState('Occupied');
        this.status.whiteTurn = !this.status.whiteTurn;

        //MAP ATTACKS TO POSITIONS FOR BOTH TEAMS AND UPDATE POSITIONS STATES
        this.attackingRestriction.mapAttack(this.status.pieces, this.status.positions);

        return true;
    }

    restart() {
        Populator.destroy(this.status);
        return this.start();
    }
}
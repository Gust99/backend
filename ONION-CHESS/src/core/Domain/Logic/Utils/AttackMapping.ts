import Piece from "../../abstracts/Piece";
import IBlockingRestriction from "../../interfaces/IBlockingRestriction";
import Position from '../Position';
import BlockingRestriction from '../Restrictions/BlockingRestriction';
import { File, Rank } from '../types';

export default class AttackMapping {
    private blockingChecker: IBlockingRestriction = new BlockingRestriction();

    mapAttack(pieces: Piece[], positions: Position[]) {
        this.setPositionsToNoneAttack(positions);
        
        pieces.forEach(piece => {
            if(piece.getName() === 'Pawn') {
                if(piece.getColor() === 'White') {
                    const attackRank = <Rank>piece.getPosition().getRank() + 8;
                    const leftAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) - 1));
                    const rightAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) + 1));

                    const leftAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === leftAttackFile));
                    const rightAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === rightAttackFile));

                    if(leftAttackPosition?.getState().attacked === 'None') {
                        leftAttackPosition.setAttackStatus('WhiteAttack');
                    } else if(leftAttackPosition?.getState().attacked === 'BlackAttack') {
                        leftAttackPosition.setAttackStatus('BothAttack');
                    }

                    if(rightAttackPosition?.getState().attacked === 'None') {
                        rightAttackPosition.setAttackStatus('WhiteAttack');
                    } else if(rightAttackPosition?.getState().attacked === 'BlackAttack') {
                        rightAttackPosition.setAttackStatus('BothAttack');
                    }
                } else {
                    const attackRank = <Rank>piece.getPosition().getRank() - 8;
                    const leftAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) - 1));
                    const rightAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) + 1));

                    const leftAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === leftAttackFile));
                    const rightAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === rightAttackFile));

                    if(leftAttackPosition?.getState().attacked === 'None') {
                        leftAttackPosition.setAttackStatus('BlackAttack');
                    } else if(leftAttackPosition?.getState().attacked === 'WhiteAttack') {
                        leftAttackPosition.setAttackStatus('BothAttack');
                    }

                    if(rightAttackPosition?.getState().attacked === 'None') {
                        rightAttackPosition.setAttackStatus('BlackAttack');
                    } else if(rightAttackPosition?.getState().attacked === 'WhiteAttack') {
                        rightAttackPosition.setAttackStatus('BothAttack');
                    }
                }
            } else {
                positions.forEach(pos => {
                    if(piece.canMoveTo(pos)) {
                        const pathToPositionExists = this.blockingChecker.actionAvailable(piece, pos, positions, pieces);
                        if(pathToPositionExists) {
                            this.blockingChecker.trajectory.forEach(pathPos => {
                                if(piece.getColor() === 'White') {
                                    if(pathPos.getState().attacked === 'None') {
                                        pathPos.setAttackStatus('WhiteAttack');
                                    } else if(pathPos.getState().attacked === 'BlackAttack') {
                                        pathPos.setAttackStatus('BothAttack');
                                    }
                                } else {
                                    if(pathPos.getState().attacked === 'None') {
                                        pathPos.setAttackStatus('BlackAttack');
                                    } else if(pathPos.getState().attacked === 'WhiteAttack') {
                                        pathPos.setAttackStatus('BothAttack');
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
    }
    setPositionsToNoneAttack(positions: Position[]) {
        positions.forEach(pos => {
            pos.setAttackStatus('None');
        });
    }
}
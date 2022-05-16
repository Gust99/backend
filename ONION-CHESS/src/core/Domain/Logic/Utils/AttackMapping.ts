import Piece from "../../abstracts/Piece";
import IBlockingRestriction from "../../interfaces/IBlockingRestriction";
import Position from '../Position';
import BlockingRestriction from '../Restrictions/BlockingRestriction';
import { File, Rank } from '../types';

export default class AttackMapping {
    private blockingChecker: IBlockingRestriction = new BlockingRestriction();

    mapAttack(pieces: Piece[], positions: Position[]) {
        pieces.forEach(piece => {
            if(piece.getName() === 'Pawn') {
                if(piece.getColor() === 'White') {
                    const attackRank = <Rank>piece.getPosition().getRank() + 8;
                    const leftAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) - 1));
                    const rightAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) + 1));

                    const leftAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === leftAttackFile));
                    const rightAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === rightAttackFile));

                    if(leftAttackPosition?.getState() !== 'Free' && leftAttackPosition?.getState() !== 'Occupied') {
                        leftAttackPosition?.setState('BothAttack');
                    } else {
                        leftAttackPosition.setState('WhiteAttack');
                    }

                    if(rightAttackPosition?.getState() !== 'Free' && rightAttackPosition?.getState() !== 'Occupied') {
                        rightAttackPosition?.setState('BothAttack');
                    } else {
                        rightAttackPosition.setState('WhiteAttack');
                    }
                } else {
                    const attackRank = <Rank>piece.getPosition().getRank() - 8;
                    const leftAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) - 1));
                    const rightAttackFile = <File>String.fromCharCode((piece.getPosition().getFile().charCodeAt(0) + 1));

                    const leftAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === leftAttackFile));
                    const rightAttackPosition = positions.find(pos => (pos.getRank() === attackRank && pos.getFile() === rightAttackFile));

                    if(leftAttackPosition?.getState() !== 'Free' && leftAttackPosition?.getState() !== 'Occupied') {
                        leftAttackPosition?.setState('BothAttack');
                    } else {
                        leftAttackPosition.setState('BlackAttack');
                    }

                    if(rightAttackPosition?.getState() !== 'Free' && rightAttackPosition?.getState() !== 'Occupied') {
                        rightAttackPosition?.setState('BothAttack');
                    } else {
                        rightAttackPosition.setState('BlackAttack');
                    }
                }
            } else {
                positions.forEach(pos => {
                    if(piece.canMoveTo(pos)) {
                        if(this.blockingChecker.actionAvailable(piece, pos, positions)) {
                            if(pos.getState() !== 'Free' && pos.getState() !== 'Occupied') {
                                pos.setState('BothAttack');
                            } else if(piece.getColor() === 'White') {
                                pos.setState('WhiteAttack');
                            } else {
                                pos.setState('BlackAttack');
                            }
                        }
                    }
                });
            }
        });
    }
}
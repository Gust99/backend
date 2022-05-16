import Move from '../Domain/Entities/Move';

export default interface IMoveRepository {
    create(chessID: number, object: Move): Promise<boolean>;
}
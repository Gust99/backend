import Move from '../Domain/Move';

export default interface IMoveRepository {
    create(chessID: number, object: Move): Promise<boolean>;
}
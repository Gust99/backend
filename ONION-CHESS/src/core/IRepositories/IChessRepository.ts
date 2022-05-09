import Chess from '../Domain/Chess';

export default interface IChessRepository {
    create(object: Chess): Promise<number>;
}
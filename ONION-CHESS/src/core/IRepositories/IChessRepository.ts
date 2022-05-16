import Chess from '../Domain/Entities/Chess';

export default interface IChessRepository {
    create(object: Chess): Promise<number>;
}
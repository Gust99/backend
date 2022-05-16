import Move from '../Domain/Entities/Move';

export default interface IMoveSerivce {
    create(object: Move): boolean;
}
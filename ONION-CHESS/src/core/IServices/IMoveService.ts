import Move from '../Domain/Move';

export default interface IMoveSerivce {
    create(object: Move): boolean;
}
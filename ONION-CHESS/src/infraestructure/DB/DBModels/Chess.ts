import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm"
import { MoveModel } from "./Move";

@Entity()
export class ChessModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(type => MoveModel, move => move.chess_id) moves: MoveModel[] | undefined;

    // @Column()
    // date!: Date;
}
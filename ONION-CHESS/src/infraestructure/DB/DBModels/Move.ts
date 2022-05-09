import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ChessModel } from "./Chess";

@Entity()
export class MoveModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column() 
    chess_id!: number;

    @Column()
    piece!: string;

    @Column()
    color!: string;
    
    @Column()
    piece_id!: number;
    
    @Column()
    rank!: number;
    
    @Column()
    file!: string;

    @ManyToOne(type => ChessModel, chess => chess.id) chess: ChessModel | undefined;
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nickname!: string;

    @Column()
    fullname!: string;
}
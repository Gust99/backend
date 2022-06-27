import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity()
export class UserModel {
    @PrimaryColumn()
    id!: string;

    @Column()
    nickname!: string;

    @Column()
    fullname!: string;

    @Column()
    athendance!: number;
}

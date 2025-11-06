import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('iaxixi_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Github: string;

    @Column()
    Email: string;

    @Column()
    Juejin: string;
}
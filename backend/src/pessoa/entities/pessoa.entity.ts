import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;
}

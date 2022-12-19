import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;
    date_reservation: Date;
    @Column('time', {name: 'hour'})
    hour: Date;
    @Column()
    num_persons: number;
    @Column()
    resturant_id: number;
    @CreateDateColumn()
    created_at: Date;
}
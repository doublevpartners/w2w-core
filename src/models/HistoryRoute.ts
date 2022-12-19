import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
    @Column()
    route_id: number;
    @CreateDateColumn()
    created_at: Date;
}
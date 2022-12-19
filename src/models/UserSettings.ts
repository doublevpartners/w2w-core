import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: string;
    @Column()
    language: string;
    @Column()
    currency: string;
    @Column()
    location: boolean;
    @Column()
    notification: boolean;
}
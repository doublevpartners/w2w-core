import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    menu_id: number;
    @Column()
    image: string;
}
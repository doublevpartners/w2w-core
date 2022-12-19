import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    menu_name: number;
    @Column()
    description:number;
}
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    card_name: string;
    @Column()
    card_number:number;
    @Column()
    expiry_date: Date;
    @Column()
    cvv: number;
}
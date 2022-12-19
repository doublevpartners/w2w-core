import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    business_name: string;
    @Column()
    slug: string;
    @Column()
    address: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @Column()
    location: number;
    @Column()
    restaurant_type: string;
    @Column()
    average_cost: number;
    @Column()
    image: string;
    @Column()
    parking_lot:boolean;
    @Column()
    menu_id: number;
}
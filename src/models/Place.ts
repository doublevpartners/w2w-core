import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserSettings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    place_name: string;
    @Column()
    description: string;
    @Column()
    slug: string;
    @Column()
    latitude: string;
    @Column()
    longitude: string;
}
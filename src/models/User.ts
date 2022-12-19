import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name!: string;

    @Column()
    lastName: string;

    @Column()
    birthDate: string;

    @Column()
    profile_photo_path: string;

    @Column()
    status: boolean;

    @Column()
    isPremium: boolean;

    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;

    @Column()
    token: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    invoice_id: string;
}
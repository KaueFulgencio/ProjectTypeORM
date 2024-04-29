import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    customerName: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalAmount: number;

}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  message: string;

  constructor(name: string, weight: number, comment: string) {
    this.name = name;
    this.weight = weight;
    this.comment = comment;
  }
}

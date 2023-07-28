import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cat } from 'src/cats/entities/cat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  // @OneToMany(type => Cat, cat => cat.user)
  // cats: Cat[];
}

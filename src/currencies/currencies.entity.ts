import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('currencies', { synchronize: false })
export class CurrenciesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  @Length(3, 3)
  @IsNotEmpty()
  currency: string;

  @Column({ type: 'float', scale: 2, precision: 10 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  value: number;

  @CreateDateColumn({ type: 'timestamp' })
  create_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  update_at: Date;
}

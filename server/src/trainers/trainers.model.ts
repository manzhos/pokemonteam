import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Team } from '../teams/teams.model';

interface TrainerCreationAttrs {
  email: string;
}

@Table({ tableName: 'trainers' })
export class Trainer extends Model<Trainer, TrainerCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @HasMany(() => Team)
  teams: Team[];
}

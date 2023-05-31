import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Trainer } from '../trainers/trainers.model';
import { Pokemon } from '../pokemons/pokemons.model';
import { TeamPokemons } from '../pokemons/team-pokemons.model';

interface TeamCreationAttrs {
  name: string;
  trainerId: number;
}

@Table({ tableName: 'teams' })
export class Team extends Model<Team, TeamCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => Trainer)
  @Column({ type: DataType.INTEGER })
  trainerId: number;

  @BelongsTo(() => Trainer)
  trainer: Trainer;

  @BelongsToMany(() => Pokemon, () => TeamPokemons)
  pokemons: Pokemon[];
}

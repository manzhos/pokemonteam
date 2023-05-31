import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from '../teams/teams.model';
import { Pokemon } from './pokemons.model';

@Table({ tableName: 'team_pokemons', createdAt: false, updatedAt: false })
export class TeamPokemons extends Model<TeamPokemons> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ForeignKey(() => Pokemon)
  @Column({ type: DataType.INTEGER })
  pokemonId: number;
}

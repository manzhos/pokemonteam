import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from '../teams/teams.model';
import { TeamPokemons } from './team-pokemons.model';

interface PokemonCreationAttrs {
  name: string;
  base_experience: number;
  sprite_image: object;
  abilities: object[];
  types: object[];
}

@Table({ tableName: 'pokemons' })
export class Pokemon extends Model<Pokemon, PokemonCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.INTEGER })
  base_experience: number;

  @Column({ type: DataType.JSONB })
  sprite_image: object;

  @Column({ type: DataType.ARRAY(DataType.JSONB) })
  abilities: object[];

  @Column({ type: DataType.ARRAY(DataType.JSONB) })
  types: object[];

  @BelongsToMany(() => Team, () => TeamPokemons)
  teams: Team[];
}

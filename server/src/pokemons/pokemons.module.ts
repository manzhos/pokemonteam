import { Module } from '@nestjs/common';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pokemon } from './pokemons.model';
import { Team } from '../teams/teams.model';
import { TeamPokemons } from './team-pokemons.model';
import { TeamsModule } from '../teams/teams.module';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [
    SequelizeModule.forFeature([Pokemon, Team, TeamPokemons]),
    TeamsModule,
  ],
})
export class PokemonsModule {}

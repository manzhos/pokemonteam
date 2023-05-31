import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './teams.model';
import { Trainer } from '../trainers/trainers.model';
import { Pokemon } from '../pokemons/pokemons.model';
import { TeamPokemons } from '../pokemons/team-pokemons.model';
import { PokemonsModule } from '../pokemons/pokemons.module';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [
    SequelizeModule.forFeature([Team, Trainer, Pokemon, TeamPokemons]),
    // PokemonsModule,
  ],
  exports: [TeamsService],
})
export class TeamsModule {}

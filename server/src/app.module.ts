import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/';
import { SequelizeModule } from '@nestjs/sequelize';
import { TrainersModule } from './trainers/trainers.module';
import { Trainer } from './trainers/trainers.model';
import { TeamsModule } from './teams/teams.module';
import { Team } from './teams/teams.model';
import { Pokemon } from './pokemons/pokemons.model';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TeamPokemons } from './pokemons/team-pokemons.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Trainer, Team, Pokemon, TeamPokemons],
      autoLoadModels: true,
    }),
    TrainersModule,
    TeamsModule,
    PokemonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

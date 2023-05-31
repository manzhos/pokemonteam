import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './teams.model';
import { CreateTeamDto } from './dto/create-team.dto';
import { PokemonsService } from '../pokemons/pokemons.service';
import {Pokemon} from "../pokemons/pokemons.model";

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team) private teamRepository: typeof Team,
    @InjectModel(Pokemon) private pokemonRepository: typeof Pokemon,
  ) {}

  async createTeam(dto: CreateTeamDto, pokemons) {
    console.log('try to create the team:', dto);
    const team = await this.teamRepository.create(dto);
    pokemons.map(async (pokemon) => {
      const p = await this.pokemonRepository.create(pokemon);
      await team.$add('pokemons', [p.id]);
    });
    return team;
  }

  async getAllTeam() {
    const teams = await this.teamRepository.findAll();
    return teams;
  }

  async getTeamByTrainer(trainerId: number) {
    const teams = await this.teamRepository.findAll({
      where: { trainerId: trainerId },
    });
    return teams;
  }

  async getTeamById(teamId: number) {
    const team = await this.teamRepository.findOne({ where: { id: teamId } });
    return team;
  }

  async getTeamByIdPkemons(teamId: number) {
    const team = await this.teamRepository.findAll({
      where: { id: teamId },
      include: { all: true },
    });
    return team;
  }
}

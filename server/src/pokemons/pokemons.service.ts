import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pokemon } from './pokemons.model';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { TeamsService } from '../teams/teams.service';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectModel(Pokemon) private pokemonRepository: typeof Pokemon,
    private teamService: TeamsService,
  ) {}

  async createPokemon(pokemonDto: CreatePokemonDto, teamId) {
    const pokemon = await this.pokemonRepository.create(pokemonDto);
    const team = await this.teamService.getTeamById(teamId);
    await team.$add('pokemons', [pokemon.id]);
    return pokemon;
  }

  async getAllPokemon() {
    const pokemons = await this.pokemonRepository.findAll();
    return pokemons;
  }

  async getPokemonById(id: number) {
    const pokemon = await this.pokemonRepository.findOne({ where: { id } });
    return pokemon;
  }
}

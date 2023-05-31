import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Post()
  create(
    @Body('pokemon') pokemonDto: CreatePokemonDto,
    @Body('teamId') teamId,
  ) {
    console.log('try to save new Pokemon:', pokemonDto, ' in the team:', teamId);
    return this.pokemonsService.createPokemon(pokemonDto, teamId);
  }

  @Get()
  getAllPokemon() {
    return this.pokemonsService.getAllPokemon();
  }

  @Get('/:id')
  getPokemonById(@Param('id') id: number) {
    console.log('Pkemon ID:', id);
    return this.pokemonsService.getPokemonById(id);
  }
}

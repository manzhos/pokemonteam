import {Column, DataType} from "sequelize-typescript";

export class CreatePokemonDto {
  readonly name: string;
  readonly base_experience: number;
  readonly sprite_image: object;
  readonly abilities: object[];
  readonly types: object[];
}

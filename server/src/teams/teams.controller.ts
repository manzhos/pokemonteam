import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post()
  create(
    @Body('team') teamDto: CreateTeamDto,
    @Body('pokemons') pokemons,
  ) {
    if (!teamDto.trainerId) return;
    return this.teamsService.createTeam(teamDto, pokemons);
  }

  @Get()
  getAllTeam() {
    return this.teamsService.getAllTeam();
  }

  @Get('/trainer/:id')
  getTeamByTrainer(@Param('id') id: number) {
    console.log('Trainer ID:', id);
    return this.teamsService.getTeamByTrainer(id);
  }

  @Get('/:id')
  getTeamById(@Param('id') id: number) {
    console.log('Team ID:', id);
    return this.teamsService.getTeamById(id);
  }

  @Get('/:id/pokemons')
  getTeamByIdPkemons(@Param('id') id: number) {
    console.log('Team ID:', id);
    return this.teamsService.getTeamByIdPkemons(id);
  }
}

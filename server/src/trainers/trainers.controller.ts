import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { TrainersService } from './trainers.service';

@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService) {}

  @Post()
  create(@Body() trainerDto: CreateTrainerDto) {
    console.log('try to create the trainer:', trainerDto);
    return this.trainersService.createTrainer(trainerDto);
  }

  @Get()
  getAllTrainer() {
    return this.trainersService.getAllTrainer();
  }

  @Get('/:email')
  getTrainerByEmail(@Param('email') email: string) {
    return this.trainersService.getTrainerByEmail(email);
  }
}

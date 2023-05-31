import { Module } from '@nestjs/common';
import { TrainersController } from './trainers.controller';
import { TrainersService } from './trainers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trainer } from './trainers.model';
import { Team } from '../teams/teams.model';

@Module({
  controllers: [TrainersController],
  providers: [TrainersService],
  imports: [SequelizeModule.forFeature([Trainer, Team])],
})
export class TrainersModule {}

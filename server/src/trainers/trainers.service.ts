import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trainer } from './trainers.model';
import { CreateTrainerDto } from './dto/create-trainer.dto';

@Injectable()
export class TrainersService {
  constructor(
    @InjectModel(Trainer) private trainerRepository: typeof Trainer,
  ) {}

  async createTrainer(dto: CreateTrainerDto) {
    const trainer = await this.trainerRepository.create(dto);
    return trainer;
  }

  async getAllTrainer() {
    const trainers = await this.trainerRepository.findAll();
    return trainers;
  }

  async getTrainerByEmail(email) {
    const trainer = await this.trainerRepository.findOne({
      where: { email: email },
    });
    return trainer;
  }
}

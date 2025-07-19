import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calculation } from './calculation/calculation.entity';

@Injectable()
export class CalculationsService {
  constructor(
    @InjectRepository(Calculation)
    private calculationRepo: Repository<Calculation>,
  ) {}

  findAll() {
    return this.calculationRepo.find();
  }

  findOne(id: number) {
    return this.calculationRepo.findOneBy({ id });
  }

  create(data: Partial<Calculation>) {
    return this.calculationRepo.save(data);
  }

  update(id: number, data: Partial<Calculation>) {
    return this.calculationRepo.update(id, data);
  }

  remove(id: number) {
    return this.calculationRepo.delete(id);
  }
}

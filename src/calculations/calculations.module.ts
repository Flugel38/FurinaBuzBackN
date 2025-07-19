import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculation } from './calculation/calculation.entity';
import { CalculationsService } from './calculations.service';
import { CalculationsController } from './calculations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Calculation])],
  providers: [CalculationsService],
  controllers: [CalculationsController],
})
export class CalculationsModule {}

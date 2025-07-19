import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CalculationsService } from './calculations.service';
import { Calculation } from './calculation/calculation.entity';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly service: CalculationsService) {}

  @Get()
  findAll(): Promise<Calculation[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  create(@Body() body: Partial<Calculation>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Calculation>) {
    return this.service.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}

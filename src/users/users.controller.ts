import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): any[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string)  : any | undefined {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() body: { name: string; email: string }): any {
    return this.usersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): any | undefined {
    return this.usersService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}

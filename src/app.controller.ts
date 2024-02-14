import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller('/todos')
export class AppController {
  // get data from client
  // querystring
  // paramas
  // body
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
  ) {}

  @Get()
  getTodos() {
    console.log(this.config.get('app.name'));
    return this.appService.getTodos();
  }

  @Get('q')
  getQuery(@Query('name') name: string, @Query('age') age: number) {
    return {
      message: `Hello ${name}! You are ${age} years old!`,
    };
  }

  @Get(':id')
  getTodo(@Param('id') _id: string) {
    return {
      message: `you are looking for todo with id ${_id}`,
    };
  }

  @Post()
  createTodo(@Body('task') kaj: string, @Body('isDone') hoiseKina: boolean) {
    return {
      kaj,
      hoiseKina,
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos = [];

  getHello(): string {
    return 'Hello World!!!!';
  }

  getTodos() {
    return this.todos;
  }
}

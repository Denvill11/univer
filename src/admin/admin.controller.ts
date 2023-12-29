import { Body, Controller, Post } from '@nestjs/common';
import { createNewTaskDto } from './adminDTO/createNewTaskDto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly service: AdminService
  ) {}
  @Post('/create')
  createNewTask(@Body() createTask: createNewTaskDto) { 
    return this.service.createTask(createTask);
  }
}

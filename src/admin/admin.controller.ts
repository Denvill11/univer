import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { createNewTaskDto } from './adminDTO/createNewTaskDto';
import { AdminService } from './admin.service';
import { deleteTaskDto } from './adminDTO/deleteTaskDto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly service: AdminService
  ) {}

  @Post('/create')
  createNewTask(@Body() createTask: createNewTaskDto) { 
    return this.service.createTask(createTask);
  }

  @Get('/all')
  getAll() {
    return this.service.getAll();
  }

  @Delete('delete/:id') 
  deleteTask(@Param() data: deleteTaskDto) {
    return this.service.deleteTask(data.id);
  }
}

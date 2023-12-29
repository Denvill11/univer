import { Injectable } from '@nestjs/common';
import { createNewTaskDto } from './adminDTO/createNewTaskDto';

@Injectable()
export class AdminService {
  createTask(data: createNewTaskDto) { 
    
  }
}

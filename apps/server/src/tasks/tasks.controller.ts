import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: number) {
    return this.tasksService.getTask(+id);
  }

  @Put()
  createTask(@Body('title') title: string) {
    return this.tasksService.createTask(title);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(+id);
  }

  @Post(':id')
  updateTask(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    return this.tasksService.updateTask(+id, dto);
  }
}

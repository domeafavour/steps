import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { UpdateTaskDto } from './dto/update-task.dto';

let id = 0;

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: ++id, title: 'Task 1' },
    { id: ++id, title: 'Task 2' },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | null {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  createTask(title: string) {
    const newTask: Task = { id: ++id, title };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return id;
  }

  updateTask(id: number, values: UpdateTaskDto) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...values };
      }
      return task;
    });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../Repositories/TaskRepository';
import { SaveTaskDto } from '../UseCase/SaveTask/SaveTaskDto';
import { UpdateTaskDto } from '../UseCase/UpdateTask/UpdateTaskDto';
import { Task } from '@prisma/client'; // Si Prisma

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(dto: SaveTaskDto): Promise<Task> {
    return this.taskRepository.create(dto);
  }

  async getAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async findOne(id: number): Promise<Task | null> {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    try {
      return this.taskRepository.update(id, dto);
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async delete(id: number): Promise<Task> {
    try {
      return this.taskRepository.delete(id);
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
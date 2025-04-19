import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
export default class GetAllTasksUseCase implements UseCase<Promise<Task[]>, []> {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    handle(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}

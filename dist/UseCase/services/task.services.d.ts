import { TaskRepository } from '../Repositories/TaskRepository';
import { SaveTaskDto } from '../UseCase/SaveTask/SaveTaskDto';
import { UpdateTaskDto } from '../UseCase/UpdateTask/UpdateTaskDto';
import { Task } from '@prisma/client';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    createTask(dto: SaveTaskDto): Promise<Task>;
    getAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task | null>;
    updateTask(id: number, dto: UpdateTaskDto): Promise<Task>;
    delete(id: number): Promise<Task>;
}

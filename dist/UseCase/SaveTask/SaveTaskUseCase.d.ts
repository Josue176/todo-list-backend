import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    handle(dto: SaveTaskDto): Promise<Task>;
}

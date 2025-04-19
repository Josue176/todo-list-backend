import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
export default class DeleteTask implements UseCase<Promise<boolean>, [id: number]> {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    handle(id: number): Promise<boolean>;
}

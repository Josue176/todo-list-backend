import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from 'src/UseCase/UseCaseFactory';
import { UpdateTaskDto } from 'src/UseCase/UpdateCase/UpdateTasksDto';
export default class TaskController {
    private readonly useCaseFactory;
    constructor(useCaseFactory: UseCaseFactory);
    getAll(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(dto: SaveTaskDto): Promise<void>;
    update(id: string, dto: UpdateTaskDto): Promise<void>;
    delete(id: string): Promise<boolean>;
}

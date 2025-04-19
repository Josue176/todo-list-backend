import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
type UseCases = GetAllTasksUseCase | DeleteTask;
export default class UseCaseFactory extends ServiceFactory<UseCases> {
}
export {};

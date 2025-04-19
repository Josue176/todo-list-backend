"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const SaveTaskDto_1 = require("../UseCase/SaveTask/SaveTaskDto");
const UseCaseFactory_1 = require("../UseCase/UseCaseFactory");
const GetAllTasksUseCase_1 = require("../UseCase/GetAllTasks/GetAllTasksUseCase");
const DeleteTask_1 = require("../UseCase/DeleteTask/DeleteTask");
const UpdateTasksDto_1 = require("../UseCase/UpdateCase/UpdateTasksDto");
let TaskController = class TaskController {
    constructor(useCaseFactory) {
        this.useCaseFactory = useCaseFactory;
    }
    async getAll() {
        try {
            const useCase = await this.useCaseFactory.create(GetAllTasksUseCase_1.default);
            return await useCase.handle();
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des tâches.');
        }
    }
    async create(dto) {
        if (!dto?.name?.trim()) {
            throw new common_1.BadRequestException('Le nom de la tâche est requis.');
        }
    }
    async update(id, dto) {
        const taskId = parseInt(id, 10);
    }
    async delete(id) {
        const taskId = parseInt(id, 10);
        if (isNaN(taskId)) {
            throw new common_1.BadRequestException('ID de tâche invalide.');
        }
        try {
            const useCase = await this.useCaseFactory.create(DeleteTask_1.default);
            return await useCase.handle(taskId);
        }
        catch (error) {
            throw new common_1.NotFoundException(`Tâche avec l’ID ${id} introuvable ou erreur lors de la suppression.`);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SaveTaskDto_1.default]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateTasksDto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [UseCaseFactory_1.default])
], TaskController);
exports.default = TaskController;
//# sourceMappingURL=TaskController.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const TaskRepository_1 = require("../../Repositories/TaskRepository");
let SaveTaskUseCase = class SaveTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async handle(dto) {
        if (!dto.title || typeof dto.title !== 'string') {
            throw new Error('Le titre est requis et doit être une chaîne de caractères.');
        }
        try {
            const savedTask = await this.taskRepository.save(dto);
            return savedTask;
        }
        catch (error) {
            throw new Error('Erreur lors de la sauvegarde de la tâche : ' + error.message);
        }
    }
};
SaveTaskUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [TaskRepository_1.default])
], SaveTaskUseCase);
exports.default = SaveTaskUseCase;
//# sourceMappingURL=SaveTaskUseCase.js.map
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import SaveTaskDto from 'src/UseCase/SaveTask/SaveTaskDto';
import { UpdateTaskDto } from '../UseCase/UpdateCase/UpdateTasksDto';

import UseCaseFactory from '../UseCase/UseCaseFactory';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase';
import DeleteTaskUseCase from '../UseCase/DeleteTask/DeleteTask';

/**
 * Contrôleur pour les tâches (CRUD)
 */
@Controller('tasks')
export default class TaskController {
  constructor(private readonly useCaseFactory: UseCaseFactory) {}

  /**
   * GET /tasks — Récupère toutes les tâches
   */
  @Get()
  async getAll() {
    try {
      const useCase = await this.useCaseFactory.create(GetAllTasksUseCase);
      return await useCase.handle(dto);
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des tâches.');
    }
  }

  /**
   * POST /tasks — Crée une nouvelle tâche
   */
  @Post()
  async create(@Body() dto: SaveTaskDto) {
    if (!dto?.name?.trim()) {
      throw new BadRequestException('Le nom de la tâche est requis.');
    }

    try {
      const useCase = await this.useCaseFactory.create(SaveTaskUseCase);
      return await useCase.handle();
    } catch (error) {
      throw new BadRequestException('Erreur lors de la création de la tâche.');
    }
  }

  /**
   * PATCH /tasks/:id — Met à jour une tâche existante
   */
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      throw new BadRequestException('ID de tâche invalide.');
    }

    if (!dto?.name?.trim()) {
      throw new BadRequestException('Le nom de la tâche est requis pour la mise à jour.');
    }

    try {
      const useCase = await this.useCaseFactory.create(SaveTaskUseCase); // Remplace SaveTaskUseCase par UpdateTaskUseCase si tu en as un
      return await useCase.handle({ id: taskId, ...dto });
    } catch (error) {
      throw new NotFoundException(`Tâche avec l’ID ${id} introuvable ou erreur lors de la mise à jour.`);
    }
  }

  /**
   * DELETE /tasks/:id — Supprime une tâche
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const taskId = parseInt(id, 10);

    if (isNaN(taskId)) {
      throw new BadRequestException('ID de tâche invalide.');
    }

    try {
      const useCase = await this.useCaseFactory.create(DeleteTaskUseCase);
      return await useCase.handle(taskId);
    } catch (error) {
      throw new NotFoundException(`Tâche avec l’ID ${id} introuvable ou erreur lors de la suppression.`);
    }
  }
}

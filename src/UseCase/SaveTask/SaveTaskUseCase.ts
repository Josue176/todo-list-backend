import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    // Exemple de validation simple (à adapter selon vos besoins)
    if (!dto.title || typeof dto.title !== 'string') {
      throw new Error('Le titre est requis et doit être une chaîne de caractères.');
    }

    try {
      // On suppose que dto peut contenir un id pour la mise à jour
      const savedTask = await this.taskRepository.save(dto as any);
      return savedTask;
    } catch (error) {
      // Gestion d'erreur simple
      throw new Error('Erreur lors de la sauvegarde de la tâche : ' + error.message);
    }
  }
}
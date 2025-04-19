import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data:
      | (Prisma.TaskCreateInput & { id?: undefined })
      | (Prisma.TaskUpdateInput & { id: number }),
  ) {
    if (!('id' in data) || data.id === undefined) {
      // Création
      return this.prisma.task.create({
        data: data as Prisma.TaskCreateInput,
      });
    } else {
      // Mise à jour
      const { id, ...updateData } = data as Prisma.TaskUpdateInput & { id: number };
      return this.prisma.task.update({
        where: { id },
        data: updateData,
      });
    }
  }
}
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';
export default class TaskRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    save(data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput> | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>): Promise<void>;
}

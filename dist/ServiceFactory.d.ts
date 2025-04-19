import { Type } from '@nestjs/common/interfaces/type.interface';
import { ModuleRef } from '@nestjs/core';
import { UseCase } from './index';
export default abstract class ServiceFactory<U extends UseCase<any, any>> {
    protected readonly container: ModuleRef;
    constructor(container: ModuleRef);
    create<T extends U>(type: Type<T>): Promise<T>;
}

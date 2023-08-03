import { Entity } from './Entity';
export declare class Collection<T extends Entity> {
    private name;
    private file;
    private entities;
    constructor(dir: string, name: string);
    create(obj: object): string;
    delete(id: any): void;
    get(id: string): T;
    list(): T[];
    update(entity: T): void;
    private findIndex(id);
    private load();
    private save();
}

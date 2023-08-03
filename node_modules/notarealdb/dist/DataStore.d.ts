import { Collection } from './Collection';
import { Entity } from './Entity';
export declare class DataStore {
    private dir;
    constructor(dir: string);
    collection<T extends Entity>(name: string): Collection<T>;
}

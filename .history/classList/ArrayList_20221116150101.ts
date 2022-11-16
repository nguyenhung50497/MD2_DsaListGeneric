import {IArrayList} from "./IArrayList";

export class ArrayList<T> implements IArrayList<T>{
    container: Array<T>;

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {
    }

    remove(): void {
    }

    size(): number {
        return 0;
    }
}
import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
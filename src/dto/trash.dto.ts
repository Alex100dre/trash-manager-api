import {Trash} from "../types/trash.type";

export class TrashDto {
    id;
    removalDays;
    lastRemoval;

    constructor({id, removalDays, lastRemoval}: Trash) {
        this.id = id;
        this.removalDays = removalDays;
        this.lastRemoval = lastRemoval;
    }
}
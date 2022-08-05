export interface Trash {
    id: TrashVariant,
    removalDays: Day[],
    lastRemoval: string,
}

export interface TodaysRemoval extends Trash {
    hasAlreadyBeenRemoved: boolean
}

export enum TrashVariant {
    Brown = 'BROWN',
    Yellow = 'YELLOW',
}

export enum Day {
    Sunday = 'SUNDAY',
    Monday = 'MONDAY',
    Tuesday = 'TUESDAY',
    Wednesday = 'WEDNESDAY',
    Thursday = 'THURSDAY',
    Friday = 'FRIDAY',
    Saturdays = 'SATURDAYS',
}
export enum CantaraPage {
    PageSongSelection,
    PageSettings,
    PageSongPresentation,
}

/* Allowed types of Cantara Song Files */
export enum CantaraSongFileType {
    ClassicSongFile,
    CSSF,
    SongSelect,
}

/* Represents a Song File in Cantara */
export interface CantaraSongFile {
    title: string,
    author: string,
    filepath: string,
    tags: string[],
    songfiletype: CantaraSongFileType,
}

export type CantaraSongList = CantaraSongFile[];
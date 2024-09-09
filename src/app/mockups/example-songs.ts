import { CantaraSongFile, CantaraSongFileType, CantaraSongList } from "../cantara-datatypes";

const amazingGrace: CantaraSongFile = {
    title: "Amazing Grace",
    author: "John Newton",
    filepath: "Amazing Grace.song",
    tags: ["Classic", "Hymn"],
    songfiletype: CantaraSongFileType.ClassicSongFile
}

const whatAFriend: CantaraSongFile = {
    title: "What A Friend We Have In Jesus",
    author: "Unknown",
    filepath: "What a friend we have in Jesus.song",
    tags: ["Classic", "Hymn"],
    songfiletype: CantaraSongFileType.ClassicSongFile
}

const rescueThePerishing: CantaraSongFile = {
    title: "Rescue the perishing",
    author: "Fanny Jane Crosby, William Howard Doan",
    filepath: "Rescue the perishing.song",
    tags: ["Classic", "Hymn", "Popular"],
    songfiletype: CantaraSongFileType.CSSF
} 

export const exampleSongFileList: CantaraSongList = [
    amazingGrace, 
    whatAFriend, 
    rescueThePerishing
]
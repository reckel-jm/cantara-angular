import { Injectable } from '@angular/core';
import { exampleSongFileList } from './mockups/example-songs';
import { CantaraSongList, CantaraSongFile } from './cantara-datatypes';

/* This service is going to manage all the input files such as songs, bibles etc. */
@Injectable({
  providedIn: 'root'
})
export class FileManagerServiceService {

  constructor() { }

  songList: CantaraSongList = exampleSongFileList; // This is a mock up suitable for now
  selectedSongs: CantaraSongList = [];

  addSong(song: CantaraSongFile) {
    this.selectedSongs.push(song);
  }

  removeEntry(elementNumber: number) {
    // TODO: To implement
  }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListEntryComponent } from './song-list-entry.component';

describe('SongListEntryComponent', () => {
  let component: SongListEntryComponent;
  let fixture: ComponentFixture<SongListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongListEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

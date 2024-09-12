import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongContextMenuComponent } from './song-context-menu.component';

describe('SongContextMenuComponent', () => {
  let component: SongContextMenuComponent;
  let fixture: ComponentFixture<SongContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongContextMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

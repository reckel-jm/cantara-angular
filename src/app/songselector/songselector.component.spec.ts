import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongselectorComponent } from './songselector.component';

describe('SongselectorComponent', () => {
  let component: SongselectorComponent;
  let fixture: ComponentFixture<SongselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

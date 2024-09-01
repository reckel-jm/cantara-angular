import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationControllerComponent } from './presentation-controller.component';

describe('PresentationControllerComponent', () => {
  let component: PresentationControllerComponent;
  let fixture: ComponentFixture<PresentationControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

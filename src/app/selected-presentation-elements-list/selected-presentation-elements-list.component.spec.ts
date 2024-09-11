import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPresentationElementsListComponent } from './selected-presentation-elements-list.component';

describe('SelectedPresentationElementsListComponent', () => {
  let component: SelectedPresentationElementsListComponent;
  let fixture: ComponentFixture<SelectedPresentationElementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPresentationElementsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPresentationElementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

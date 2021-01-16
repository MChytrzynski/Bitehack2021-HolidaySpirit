import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsListItemComponent } from './problems-list-item.component';

describe('ProblemsListItemComponent', () => {
  let component: ProblemsListItemComponent;
  let fixture: ComponentFixture<ProblemsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

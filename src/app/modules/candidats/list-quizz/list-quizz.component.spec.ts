import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizzComponent } from './list-quizz.component';

describe('ListQuizzComponent', () => {
  let component: ListQuizzComponent;
  let fixture: ComponentFixture<ListQuizzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuizzComponent]
    });
    fixture = TestBed.createComponent(ListQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

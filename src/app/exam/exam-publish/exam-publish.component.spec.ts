import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPublishComponent } from './exam-publish.component';

describe('ExamPublishComponent', () => {
  let component: ExamPublishComponent;
  let fixture: ComponentFixture<ExamPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

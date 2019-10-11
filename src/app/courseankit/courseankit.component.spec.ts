import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseankitComponent } from './courseankit.component';

describe('CourseankitComponent', () => {
  let component: CourseankitComponent;
  let fixture: ComponentFixture<CourseankitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseankitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseankitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

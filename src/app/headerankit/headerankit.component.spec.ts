import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderankitComponent } from './headerankit.component';

describe('HeaderankitComponent', () => {
  let component: HeaderankitComponent;
  let fixture: ComponentFixture<HeaderankitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderankitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderankitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

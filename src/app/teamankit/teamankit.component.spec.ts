import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamankitComponent } from './teamankit.component';

describe('TeamankitComponent', () => {
  let component: TeamankitComponent;
  let fixture: ComponentFixture<TeamankitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamankitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamankitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

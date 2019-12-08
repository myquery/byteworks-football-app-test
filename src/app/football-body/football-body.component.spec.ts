import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballBodyComponent } from './football-body.component';

describe('FootballBodyComponent', () => {
  let component: FootballBodyComponent;
  let fixture: ComponentFixture<FootballBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

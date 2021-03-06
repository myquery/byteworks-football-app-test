import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHeaderComponent } from './football-header.component';

describe('FootballHeaderComponent', () => {
  let component: FootballHeaderComponent;
  let fixture: ComponentFixture<FootballHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

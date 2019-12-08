import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFooterComponent } from './football-footer.component';

describe('FootballFooterComponent', () => {
  let component: FootballFooterComponent;
  let fixture: ComponentFixture<FootballFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

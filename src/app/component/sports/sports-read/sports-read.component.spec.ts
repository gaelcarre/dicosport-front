import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsReadComponent } from './sports-read.component';

describe('SportsReadComponent', () => {
  let component: SportsReadComponent;
  let fixture: ComponentFixture<SportsReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

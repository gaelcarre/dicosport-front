import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberofComponent } from './memberof.component';

describe('MemberofComponent', () => {
  let component: MemberofComponent;
  let fixture: ComponentFixture<MemberofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

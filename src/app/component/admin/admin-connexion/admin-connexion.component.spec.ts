import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConnexionComponent } from './admin-connexion.component';

describe('AdminConnexionComponent', () => {
  let component: AdminConnexionComponent;
  let fixture: ComponentFixture<AdminConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

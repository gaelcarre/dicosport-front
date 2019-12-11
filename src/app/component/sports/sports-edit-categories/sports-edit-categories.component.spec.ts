import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsEditCategoriesComponent } from './sports-edit-categories.component';

describe('SportsEditCategoriesComponent', () => {
  let component: SportsEditCategoriesComponent;
  let fixture: ComponentFixture<SportsEditCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsEditCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsEditCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEmprunterPage } from './list-emprunter.page';

describe('ListEmprunterPage', () => {
  let component: ListEmprunterPage;
  let fixture: ComponentFixture<ListEmprunterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmprunterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

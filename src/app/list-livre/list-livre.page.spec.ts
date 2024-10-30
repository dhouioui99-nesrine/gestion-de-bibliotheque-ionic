import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLivrePage } from './list-livre.page';

describe('ListLivrePage', () => {
  let component: ListLivrePage;
  let fixture: ComponentFixture<ListLivrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

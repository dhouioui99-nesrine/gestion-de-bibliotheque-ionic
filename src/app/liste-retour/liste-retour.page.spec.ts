import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeRetourPage } from './liste-retour.page';

describe('ListeRetourPage', () => {
  let component: ListeRetourPage;
  let fixture: ComponentFixture<ListeRetourPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRetourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

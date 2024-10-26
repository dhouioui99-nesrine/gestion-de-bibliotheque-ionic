import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivrePage } from './livre.page';

describe('LivrePage', () => {
  let component: LivrePage;
  let fixture: ComponentFixture<LivrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

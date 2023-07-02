import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportsionicPage } from './supportsionic.page';

describe('SupportsionicPage', () => {
  let component: SupportsionicPage;
  let fixture: ComponentFixture<SupportsionicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportsionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

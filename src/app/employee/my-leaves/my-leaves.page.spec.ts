import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLeavesPage } from './my-leaves.page';

describe('MyLeavesPage', () => {
  let component: MyLeavesPage;
  let fixture: ComponentFixture<MyLeavesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyLeavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

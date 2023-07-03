import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsionicPage } from './settingsionic.page';

describe('SettingsionicPage', () => {
  let component: SettingsionicPage;
  let fixture: ComponentFixture<SettingsionicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SettingsionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

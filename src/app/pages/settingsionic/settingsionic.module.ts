import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsionicPageRoutingModule } from './settingsionic-routing.module';

import { SettingsionicPage } from './settingsionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsionicPageRoutingModule
  ],
  declarations: [SettingsionicPage]
})
export class SettingsionicPageModule {}

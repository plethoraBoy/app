import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsionicPage } from './settingsionic.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsionicPageRoutingModule {}

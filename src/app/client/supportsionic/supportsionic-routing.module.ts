import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportsionicPage } from './supportsionic.page';

const routes: Routes = [
  {
    path: '',
    component: SupportsionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportsionicPageRoutingModule {}

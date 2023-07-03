import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportsionicPageRoutingModule } from './supportsionic-routing.module';

import { SupportsionicPage } from './supportsionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportsionicPageRoutingModule
  ],
  declarations: [SupportsionicPage]
})
export class SupportsionicPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent,SidebarComponent],
})
export class LayoutModule {}

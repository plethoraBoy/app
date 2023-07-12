import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [HeaderComponent,SidebarComponent,FooterComponent],
  imports: [CommonModule, IonicModule,SharedModule],
  exports: [HeaderComponent,SidebarComponent,FooterComponent],
})
export class LayoutModule {}

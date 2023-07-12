import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { SegmentComponent } from './components/segment/segment.component';
import { ToastComponent } from './components/toast/toast.component';
import { IonFabComponent } from './components/ion-fab/ion-fab.component';

//SubCompoments
import { SearchComponent } from './sub-components/search/search.component';
import { DarkModeToggleComponent } from './sub-components/dark-mode-toggle/dark-mode-toggle.component';
import { ApexChartsComponent } from './sub-components/apex-charts/apex-charts.component';
@NgModule({
  declarations: [InputComponent, CardComponent, SegmentComponent, ToastComponent, ButtonComponent,IonFabComponent,
    SearchComponent,DarkModeToggleComponent,ApexChartsComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [InputComponent, CardComponent, SegmentComponent, ToastComponent, ButtonComponent,IonFabComponent,
    SearchComponent,DarkModeToggleComponent,ApexChartsComponent
  ],
})
export class SharedModule { }

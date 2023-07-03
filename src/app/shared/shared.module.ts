import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { SegmentComponent } from './components/segment/segment.component';
import { ToastComponent } from './components/toast/toast.component';
@NgModule({
  declarations: [InputComponent, CardComponent, SegmentComponent,ToastComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, CardComponent, SegmentComponent,ToastComponent],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { LayoutModule } from "../../layout/layout.module";

@NgModule({
    declarations: [DashboardPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardPageRoutingModule,
        LayoutModule
    ]
})
export class DashboardPageModule {}

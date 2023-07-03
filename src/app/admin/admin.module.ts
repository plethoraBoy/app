import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';
import { DashboardPageModule } from './dashboard/dashboard.module';
import { LayoutModule } from "../layout/layout.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminPageRoutingModule,
        LayoutModule,
        DashboardPageModule
    ]
})
export class AdminPageModule {}

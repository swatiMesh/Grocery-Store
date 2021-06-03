import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { StoreListComponent } from './store-list/store-list.component';
import { ManagersListComponent } from './managers-list/managers-list.component';


@NgModule({
  declarations: [
    ModulesComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    StoreListComponent,
    ManagersListComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }

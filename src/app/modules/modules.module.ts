import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { StoreListComponent } from './store-list/store-list.component';
import { ManagersListComponent } from './managers-list/managers-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AddManagerComponent } from './add-manager/add-manager.component';


@NgModule({
  declarations: [
    ModulesComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    StoreListComponent,
    ManagersListComponent,
    ProductCategoryComponent,
    AddManagerComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreListComponent } from './store-list/store-list.component';
import { ManagersListComponent } from './managers-list/managers-list.component';

const routes: Routes = [
  {
    path: '', component: ModulesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'store-list', component: StoreListComponent },
      { path: 'manager-list', component: ManagersListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateComponent } from './allocate/allocate.component';
import { SolarAllocationListComponent } from './solar-allocation-list/solar-allocation-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'allocate', component: AllocateComponent},
  {path: 'view', component: SolarAllocationListComponent},
  {path: '**', redirectTo: 'allocate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

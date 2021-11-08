import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    AddComponent,
    ContractFormComponent,
    MaintenanceFormComponent,
    TaskFormComponent,
    WorkerFormComponent,
  ],
  imports: [CommonModule, FormsModule, NgbModule,AdminRoutingModule],
})
export class AdminModule {}

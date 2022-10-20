import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticListComponent } from './diagnostic-list/diagnostic-list.component';
import { UpdateDiagnosticComponent } from './update-diagnostic/update-diagnostic.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
{path:'users',component: UserListComponent},
{path:'create-user',component: UserListComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'update-user/:id',component:UpdateUserComponent},

{path:'diagnostics',component: DiagnosticListComponent},
{path:'create-diagnostic',component:DiagnosticListComponent},
{path:'',redirectTo:'diagnostics',pathMatch:'full'},
{path:'update-diagnostic/:id',component: UpdateDiagnosticComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

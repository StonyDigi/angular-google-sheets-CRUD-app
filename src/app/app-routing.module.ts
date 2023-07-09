import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { ListDataComponent } from './list-data/list-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'create', component: CreateDataComponent},
  {path: 'list', component: ListDataComponent},
  {path: 'edit/:id', component: EditDataComponent},
  {path: '**', redirectTo: 'create', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

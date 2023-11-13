import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DebugComponent } from './session/debug/debug.component';
import { MasterComponent } from './session/master/master.component';
import { ShiplistComponent } from './shiplist/shiplist.component';
import { ModelslistComponent } from './modelslist/modelslist.component';
import { ShipmasterComponent } from './shipmaster/shipmaster.component';
import { ModelmasterComponent } from './modelmaster/modelmaster.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'ships/:id', component: ShipmasterComponent},
  {path: 'models/:id', component: ModelmasterComponent},
  {path: 'ships', component: ShipmasterComponent},
  {path: 'models', component: ModelmasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

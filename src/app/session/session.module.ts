import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { DebugComponent } from './debug/debug.component';



@NgModule({
  declarations: [
    MasterComponent,
    DebugComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessionModule { }

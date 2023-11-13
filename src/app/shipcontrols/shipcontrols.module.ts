import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringComponent } from './engineering/engineering.component';
import { ConnComponent } from './conn/conn.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OpsComponent } from './ops/ops.component';
import { ScienceComponent } from './science/science.component';
import { MedicalComponent } from './medical/medical.component';



@NgModule({
  declarations: [
    EngineeringComponent,
    ConnComponent,
    NavigationComponent,
    OpsComponent,
    ScienceComponent,
    MedicalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShipcontrolsModule { }

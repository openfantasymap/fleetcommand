import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FleetcommandService } from '../fleetcommand.service';

@Component({
  selector: 'app-modelmaster',
  templateUrl: './modelmaster.component.html',
  styleUrls: ['./modelmaster.component.scss']
})
export class ModelmasterComponent implements OnInit {

  model: any = {};
  active="metrics";

  constructor(
    private ar: ActivatedRoute,
    private f: FleetcommandService
  ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(p=>{
      const m = p.get('id')
      if(m){
        this.f.getModel(m).subscribe(data=>{
          this.model = data;
        });
      }
    })
  }

}

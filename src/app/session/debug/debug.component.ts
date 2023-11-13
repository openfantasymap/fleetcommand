import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FleetcommandService } from 'src/app/fleetcommand.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  public session: string="";
  public context: any;

  public connections: any = {};

  constructor(
    public fc: FleetcommandService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((data: any)=>{
      this.session = data.params.id;
      this.fc.useSession(data.params.id);
      this.fc.getContext().subscribe(data=>{
        this.context = data;

      });

    })
  }

  send(ev:any, ship: string, id:string){
    this.fc.send(ship, id, ev.target.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FleetcommandService } from '../fleetcommand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipmaster',
  templateUrl: './shipmaster.component.html',
  styleUrls: ['./shipmaster.component.scss']
})
export class ShipmasterComponent implements OnInit {

  ship: any = {}
  constructor(
    private ar: ActivatedRoute,
    private fc: FleetcommandService
  ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(p=>{
      let id = p.get('id');
      if(id)
        this.fc.getShip(id).subscribe(data=>{
          this.ship = data;
      })
    })
  }

}

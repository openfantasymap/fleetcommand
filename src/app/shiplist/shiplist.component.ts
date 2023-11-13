import { Component, OnInit } from '@angular/core';
import { FleetcommandService } from '../fleetcommand.service';

@Component({
  selector: 'fleetcommand-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.scss']
})
export class ShiplistComponent implements OnInit {

  ships = this.fc.getShips();
  searching = false;

  constructor(
    private fc: FleetcommandService
  ) { }

  ngOnInit(): void {
  }

  search(ev:any){
    this.searching=true;
  }
}

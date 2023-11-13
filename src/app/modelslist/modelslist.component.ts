import { Component, OnInit } from '@angular/core';
import { FleetcommandService } from '../fleetcommand.service';

@Component({
  selector: 'fleetcommand-modelslist',
  templateUrl: './modelslist.component.html',
  styleUrls: ['./modelslist.component.scss']
})
export class ModelslistComponent implements OnInit {

  models = this.fc.getModels();

  constructor(
    private fc: FleetcommandService
  ) { }

  ngOnInit(): void {
  }

}

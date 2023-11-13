import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { map, Observable, of, tap } from 'rxjs';

interface NamedObject{
  id: string;
  name: string;
}

interface CompactShip extends NamedObject {
  callsign: string;
  model: string;
}

interface CompactModel extends NamedObject{
  operator: string;
}


@Injectable({
  providedIn: 'root'
})
export class FleetcommandService {


  session: string = "";

  context: any = {
    date: 2401.2321,
    ships: [{
      id:"9da9dfa9dsf9as9df",
      name: "USS Equinox",
      callsign:"NCC-13234-D",
      partsList: ["engineering", "conn", "medical", "tricorder", "communications", "global", "ops", "science", "transporter", "docks"],
      connections: [
        { id:"engineering/dilithium_storage", type: "range", editable:false},
        { id:"engineering/engines/warpdrive", type: "range"},
        { id:"engineering/engines/warpdrive/nascelle1", type: "range"},
        { id:"engineering/engines/warpdrive/nascelle2", type: "range"},
        { id:"engineering/engines/warpdrive/nascelle3", type: "range"},
        { id:"engineering/systems/life_support", type: "range"},
        { id:"engineering/systems/navigation", type: "range"},
        { id:"engineering/engines/impulse", type: "range"},
        { id:"engineering/weapons", type: "range"},
        { id:"engineering/weapons/ptorpedo", type: "button"},
        { id:"engineering/weapons/phaser", type: "button"},
        { id:"ship/decks/deck_1", type: "button"},
        { id:"ship/decks/deck_2", type: "button"},
        { id:"ship/decks/deck_3", type: "button"},
        { id:"ship/decks/deck_4", type: "button"},
        { id:"ship/decks/deck_5", type: "button"},
        { id:"ship/decks/deck_6", type: "button"},
        { id:"ship/facilities/med_bay", type: "button"},
        { id:"ship/facilities/stellar_cartography", type: "button"},
        { id:"ship/facilities/astrometrics", type: "button"},
        { id:"ship/facilities/", type: "button"},
        { id:"transporter/executor/transporter_1", type: "range"},
        { id:"transporter/executor/transporter_2", type: "range"},
        { id:"transporter/executor/transporter_3", type: "range"},
        { id:"transporter/executor/transporter_4", type: "range"},
        { id:"transporter/executor/transporter_5", type: "range"},
        { id:"transporter/executor/transporter_6", type: "range"},
        { id:"transporter/buffers/buffer_1", type: "range"},
        { id:"transporter/buffers/buffer_2", type: "range"},
        { id:"transporter/buffers/buffer_3", type: "range"},
        { id:"transporter/buffers/buffer_4", type: "range"},
        { id:"transporter/buffers/buffer_5", type: "range"},
        { id:"transporter/buffers/buffer_6", type: "range"},
        { id:"transporter/buffers/emergency_buffer_1", type: "range"},
        { id:"transporter/buffers/emergency_buffer_2", type: "range"},
        { id:"transporter/buffers/emergency_buffer_2", type: "range"},
        { id:"communications/incoming", type: "list"},
      ],
      parts: {
        engineering:{
          template: ''
        }
      }
    }, {
      id:"9da9dfa9dsf9as9df.2",
      name: "USS Equinox - Shuttle Galileo",
      callsign:"NCC-13234-D",
      partsList: ["engineering", "conn", "medical", "tricorder", "global", "ops", "science", "teleport", "docks"],
      connections: [
        { id:"engineering/dilithium_storage", type: "range", editable:false},
        { id:"engineering/warpdrive", type: "range"},
        { id:"engineering/nascelle1", type: "range"},
        { id:"engineering/nascelle2", type: "range"},
        { id:"engineering/life_support", type: "range"},
        { id:"engineering/navigation", type: "range"},
        { id:"engineering/impulse", type: "range"},
      ],
      parts: {
        engineering:{
          template: '',
          blocks: [{
            id: 'id1',
            connection: 'engineering/nascelle1'
          }]
        }
      }
    }]
  };

  connections: Map<string, Observable<any>> = new Map<string, Observable<any>>();

  constructor(
    private mqtt: MqttService,
    private h: HttpClient
  ) { }

  getModels(): Observable<CompactModel[]>{
    return this.h.get('https://api.fleetcommand.org/api/models?limit=5000&offset=0').pipe(map((x:any)=>x.items));
  }

  getShips(): Observable<CompactShip[]>{    
    return this.h.get('https://api.fleetcommand.org/api/ships?limit=5000&offset=0').pipe(map((x:any)=>x.items));
  }


  
  getModel(id:string): Observable<CompactModel>{
    return this.h.get<any>('https://api.fleetcommand.org/api/models/'+id);
  }

  getShip(id: string): Observable<CompactShip>{    
    return this.h.get<any>('https://api.fleetcommand.org/api/ships/'+id);
  }

  useSession(session:string){
    this.session = session;
  }

  getContext(){
    this.connect();
    return of(this.context)
  }

  connect(){
    for (let s of this.context.ships){
      for (let c of s.connections){
        console.log(this.session+"/"+s.id+"/"+c.id)
        this.connections.set(s.id+"/"+c.id, this.mqtt.observe(this.session+"/"+s.id+"/"+c.id).pipe(tap(x=>{
          //console.log('got data', this.session+"/"+s.id+"/"+c.id, x);
        }), map(x=>JSON.parse(new TextDecoder().decode(x.payload)).value)
        ));
      }
    }
  }

  send(ship: string, conn: string, value: any){
    this.mqtt.publish(this.session+"/"+ship+"/"+conn, JSON.stringify({"value":value})).subscribe(data=>{});
  }

  data(ship: string, conn:string){
    return this.connections.get(ship+"/"+conn);
  }
}

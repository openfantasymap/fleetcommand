import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor(
    private ar: ActivatedRoute
  ){}

  active = "ships"

  ngOnInit(): void {
    this.ar.queryParamMap.subscribe(p=>{
      localStorage.setItem("LCARS_KEYS", JSON.stringify(p.keys));
      for (let k of p.keys){
        let v = p.get(k);
        if(v)
          localStorage.setItem(k, v);
      }
    })
  }


  title = 'sta-fleetcommand';
}

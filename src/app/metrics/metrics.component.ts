import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lcars-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  active = "";

  @Input() measures: any = []

  sources: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let m of this.measures){
      const cm = <any>m;
      if (this.sources.indexOf(cm.source)<0){
        this.sources.push(cm.source);
      }
    }
  }

}

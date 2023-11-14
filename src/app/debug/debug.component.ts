import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lcars-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}

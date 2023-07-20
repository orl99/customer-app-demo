import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-tracking-time-line-simple',
  templateUrl: './tracking-time-line-simple.component.html',
  styleUrls: ['./tracking-time-line-simple.component.scss'],
})
export class TrackingTimeLineSimpleComponent implements OnInit {
  @Input() isDemo: boolean;
  isDemoFlagLabel: string;
  constructor() {}

  ngOnInit() {
    if (this.isDemo) {
      this.isDemoFlagLabel = '*Datos Demo';
    }
  }

}

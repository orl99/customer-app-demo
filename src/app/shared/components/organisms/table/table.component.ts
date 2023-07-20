import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'component-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  // Testing will be need in the future
  public tableData: any[] = [];
  public tableColumnsData: any[] = [];
  @Input() dataSource: any[];
  @Input() tableColumns: any[];

  constructor() { }

  ngOnInit() {
    console.log('dataSource', this.dataSource);
    console.log('tableColumns', this.tableColumns);
    if (!!this.dataSource.length) {
      console.log('yaa');
      this.tableData = this.dataSource;
      this.tableColumnsData = this.tableColumns;
    }
  }

}

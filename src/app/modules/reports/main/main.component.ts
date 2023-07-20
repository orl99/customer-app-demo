import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmasc-reports-module',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public mockDataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', naShot: 'Hy'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', naShot: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', naShot: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', naShot: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', naShot: 'Bo'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', naShot: 'Ca'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', naShot: 'Ni'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', naShot: 'Ox'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', naShot: 'Fl'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', naShot: 'Ne'},
  ];
  public tableColums: string[] = [];
  constructor() { }

  ngOnInit() {
    if (!!this.mockDataSource) {
      this.tableColums = Object.keys(this.mockDataSource[0]);
      console.log('Keys', this.tableColums);
    }
  }

}

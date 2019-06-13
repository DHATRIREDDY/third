import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcomp',
  template: `<div *ngFor="let thing of things">
             <h2>{{thing}}</h2>
             </div>
             <div *ngFor="let thing of things;index as i">
             <h2>{{i}} {{thing}}</h2>
             </div>
             <div *ngFor="let thing of things;first as f">
             <h2>{{f}} {{thing}}</h2>
             
             </div>
             <div *ngFor="let thing of things;last as l">
             <h2>{{l}} {{thing}}</h2>
             </div>
  
  
  `,
  styles: []
})
export class WcompComponent implements OnInit {
  public things=["Mobile","laptop","Telivision","printer"];

  constructor() { }

  ngOnInit() {
  }

}

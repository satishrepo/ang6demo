import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  @Input() point : number;
  @Output() newpoint = new EventEmitter<number>();
  
  
  constructor() { }

  ngOnInit() {
  }
  
  updatePoint(){
	this.newpoint.emit(this.point);
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() {

  }

  sideBarToggler(e:any){
    this.sideBarOpen = !this.sideBarOpen
  }

}

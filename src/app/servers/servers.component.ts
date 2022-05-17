import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  disableButton = false;
  constructor() { 
    setTimeout(()=> {
      this.disableButton = true;
    },2000)
  }

  ngOnInit(): void {
  }

}

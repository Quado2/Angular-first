import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  disableButton = false;
  serverCreateStatus = 'Server is not created';
  newServerName = "Kedu";
  showServer= false;
  constructor() {
    setTimeout(() => {
      this.disableButton = true;
    }, 2000);
  }

  onCreateServer() {
  this.showServer = !this.showServer;
  }

  onInputChange(event:Event){
    this.newServerName = (<HTMLInputElement>event.target).value

  }

  ngOnInit(): void {}
}

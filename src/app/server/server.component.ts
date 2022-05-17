import { Component } from "@angular/core";

@Component({
  selector:"app-server",
  templateUrl:"./server.component.html",
  styles:[`
    .pad{
      padding: 10px
    }
  `]
})
export class ServerComponent {
  serverName = "Quado Server";
  serverId = "23j2e";
  serverStatus: string;

  constructor(){
    Math.random() > 0.5 ? this.serverStatus = "online": this.serverStatus="offline"
  }

  getServerName(){
    return this.serverName
  }

  getColor(){
    return this.serverStatus == "online" ? "green": "red"
  }
}
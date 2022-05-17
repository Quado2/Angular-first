import { Component } from "@angular/core";

@Component({
  selector:"app-server",
  templateUrl:"./server.component.html"
})
export class ServerComponent {
  serverName = "Quado Server";
  serverId = "23j2e"

  getServerName(){
    return this.serverName
  }
}
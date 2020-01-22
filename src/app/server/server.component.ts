import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  // tslint:disable-next-line:variable-name
  serverStatus = 'offline';
  constructor() { }
  getServerStatus() {
    return this.serverStatus;
  }
  ngOnInit() {
  }

}

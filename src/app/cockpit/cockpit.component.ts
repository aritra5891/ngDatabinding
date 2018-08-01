import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 
  @Output() serverAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';  
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    this.serverAdded.emit({serverName:serverNameInput, serverContent:this.newServerContent});
  }

  onAddBlueprint(serverNameInput) {
    serverNameInput = serverNameInput.value;
    this.blueprintAdded.emit({serverName:serverNameInput, serverContent:this.newServerContent});
  }

}

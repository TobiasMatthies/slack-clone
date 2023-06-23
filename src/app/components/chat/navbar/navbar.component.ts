import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Chat } from 'src/app/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  channels: Chat[] = [];
  directMessages: Chat[] = [];

  showChannels: boolean = true;
  showChats: boolean = true;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.channels = this.DataService.chats.filter((chat) => chat.type == "channel");
    this.directMessages = this.DataService.chats.filter((chat) => chat.type == "directMessage");
  }

  toggleChannels() {
    this.showChannels = !this.showChannels;
  }

  toggleChats() {
    this.showChats = !this.showChats;
  }
}

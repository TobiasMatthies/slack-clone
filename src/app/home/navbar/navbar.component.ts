import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { Chat } from 'src/app/models/chat.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   channels: Channel[] = [];
   chats: Chat[] = [];

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.channels = this.DataService.channels;
    this.chats = this.DataService.chats;
  }
}

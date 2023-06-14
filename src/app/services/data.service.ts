import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Channel } from '../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  chats: Chat[] = [
    {
      name: 'friend1',
      img: 'directMessage',
      members: [],
      messages: [],
      id: '1',
    },
  ];
  channels: Channel[] = [
    {
      name: 'Development team',
      description: 'Our dev team',
      members: [],
      messages: [],
      id: '1',
    },
    {
      name: 'Sales team',
      description: 'Our sales team',
      members: [],
      messages: [],
      id: '2',
    },
  ];

  constructor() {}
}

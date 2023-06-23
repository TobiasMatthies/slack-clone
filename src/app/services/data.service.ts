import { Injectable } from '@angular/core';
import { Chat } from '../types';

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
      type: 'directMessage'
    },
    {
      name: 'Development team',
      description: 'Our dev team',
      members: [],
      messages: [],
      id: '2',
      type: 'channel'
    },
    {
      name: 'Sales team',
      description: 'Our sales team',
      members: [],
      messages: [],
      id: '3',
      type: 'channel'
    },
  ];

  constructor() {}
}

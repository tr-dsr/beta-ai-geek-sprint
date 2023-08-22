import { Component } from '@angular/core';
import datajson from './dataJson.json';

interface USERS {
  Name: String;
  Description: String;
}
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  Users: USERS[] = datajson;
  title = 'Geek-AI-Sprint-Team-Beta';
  data: any;

  getData() {
  }
}

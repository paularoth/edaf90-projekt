import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  list;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.list = this.messageService.getHistory();
  }

}

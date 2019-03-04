import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MessageService {
    messages: any = [];
    history: any = [];
    movie


    add(message: string) {
        this.messages.push(message)
    }
    addHistory(item: string) {
        this.history.push(item)
    }
    pop() {
        this.messages.shift();
    }
    get() {
        return this.messages;
    }

    getHistory() {

      let unique_array = this.history.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      });
      return unique_array;
    }

}

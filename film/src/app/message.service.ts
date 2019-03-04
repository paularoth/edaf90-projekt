import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
    messages: any = [];
    history: any[];
    movie

    add(message: string) {
        this.messages.push(message)
    }

    addHistory(history: string) {
        this.history.push(history)

    }
    clear() {
        this.messages = [];
    }
    get() {
        return this.messages;
    }

    getHistory() {
        return this.history;
    }

}

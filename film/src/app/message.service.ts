import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
    messages: any = [];

    add(message: string) {
        this.messages.push(message)
    }

    clear() {
        this.messages = [];
    }

    get() {
        return this.messages;
    }
}

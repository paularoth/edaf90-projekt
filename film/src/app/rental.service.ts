import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RentalService {
    rental: any = [];
    history: any = [];
    movie


    add(rental: string) {
        this.rental.push(rental)
    }
    addHistory(item: string) {
        this.history.push(item)
    }
    pop() {
        this.rental.shift();
    }
    get() {
        return this.rental;
    }

    getHistory() {
        let unique_array = this.history.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique_array;
    }

}

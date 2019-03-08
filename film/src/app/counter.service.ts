import { Observable, timer } from 'rxjs';
import { map, take, takeUntil, takeWhile } from 'rxjs/operators';
import { OnInit, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class counterService {
    counterList;

    public addCounter(){
        var counter = this.countDown();
        this.counterList.push (counter);
        return counter;
    }

    countDown() {
        var count = 10;
        return timer(0, 1000).pipe(map(() => --count), takeWhile(c => c >= 0));
    }

    sendCounterList(){
        return this.counterList;
    }

}
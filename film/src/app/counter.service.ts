import { Observable, timer } from 'rxjs';
import { map, take, takeUntil, takeWhile } from 'rxjs/operators';
import { OnInit, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class counterService {
    count;
    counters: any[];



    onSave() {
        this.count = 10;
        return timer(0, 1000).pipe(map(() => --this.count), takeWhile(count => count >= 0));
    }

}
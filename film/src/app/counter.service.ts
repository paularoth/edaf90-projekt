import { Observable, timer } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { OnInit, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class counterService {
    count = 10;
    counter$: Observable<number>;


    onChange() {
        const timer$ = timer(25000);
        return timer(0, 1000).pipe(take(this.count), map(() => --this.count));
    }

    onSave() {
        const timer$ = timer(10000);
        return timer(0, 1000).pipe(takeUntil(timer$), map(() => --this.count));
    }
}
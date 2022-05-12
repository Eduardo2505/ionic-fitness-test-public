import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'circle-progress',
    templateUrl: 'circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss'],
})

export class CircleProgressComponent implements OnInit {

    //_percent: number = 0;//(500 - (500 * 99) /100)

    //@Input() percent = 0;

    @Input()
    get percent(): number { return this._percent; }
    set percent(value) {
        this._percent = (500 - (500 * value + 1) /100);
    }
    private _percent;

    constructor(
        private ngZone: NgZone,
        private elRef: ElementRef,
    ) { }

    ngOnInit() {
    }




}
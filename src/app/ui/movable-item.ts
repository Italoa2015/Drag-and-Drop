import { ElementRef, HostListener, HostBinding, EventEmitter, Output, Input, Component } from "@angular/core";
import { Item } from "./model";

@Component({
    selector: 'movable-item',
    host: {
        class: 'clientItem'
    },
    template: `
        <img src="assets/icon/building.svg" />
    `
})
export class MovableItemComponent {
    @Input()
    item: Item;

    @Output('drop-item')
    dropItem = new EventEmitter();

    @Output('onmove')
    onmove = new EventEmitter();

    @HostBinding('style.marginLeft.px')
    x: number = 0;

    @HostBinding('style.marginTop.px')
    y: number = 0;

    startX: number = 0;
    startY: number = 0;

    left: number;
    top: number;
    right: number;
    bottom: number;

    constructor(private element: ElementRef) { }

    @HostListener('panstart', ['$event'])
    onPanStart(event: any): void {
        event.preventDefault();
        this.startX = this.x;
        this.startY = this.y;
    }

    @HostListener('panmove', ['$event'])
    onPanMove(event: any): void {
        event.preventDefault();
        this.x = this.startX + event.deltaX;
        this.y = this.startY + event.deltaY;
        this.onmove.emit();
    }

    @HostListener('panend', ['$event'])
    onPanEnd(event: any): void {
        event.preventDefault();
        this.x = this.startX + event.deltaX;
        this.y = this.startY + event.deltaY;
        this.dropItem.emit();
    }
}


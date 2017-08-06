import { Component, Input } from "@angular/core";
import { History } from './model';

@Component({
    selector: 'histories',
    template: `
        <div *ngFor="let history of histories">
            <span class="timestamp">{{history.time}}</span>
            <span class="historyItem">{{history.id}} add a new {{history.itemName}}.</span>
        </div>
    `
})
export class HistroiesComponent {
    @Input()
    histories: History[]
}
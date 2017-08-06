import { Component, Input, HostBinding} from "@angular/core";


@Component({
    selector: 'cloud',
    template: `        
        <div class="cloud"></div>
        <div class="placeHolderGroup">
            <div class="circle" *ngFor="let item of allItems" [class.hasItem]="item.hasItem"></div>
        </div>
    `,
    styles: [`
        .cloud {
            background: url("assets/icon/cloud.svg") no-repeat;
            background-size: 100% auto;
        }
        @media (width: 1024px){
            .cloud {
                background-position: 0px -85px;
            }
        }
        @media (width: 1366px) {
            .cloud {
                background-position: 0px -100px;
            }
        }
        @media (width: 768px) {
            .cloud {
                background-position: 0px -56px;
            }
        }
    `]
})
export class Cloud {
    @Input()
    allItems: any[];

    @HostBinding('class.catched')
    @Input('is-catched')
    isCatched: boolean;
    
    constructor() {}
}
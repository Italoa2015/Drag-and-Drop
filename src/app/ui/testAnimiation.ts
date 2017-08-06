import { Component } from "@angular/core";

@Component({
    selector: 'test-animation',
    template: `
        <button (click)="aaaa = !aaaa">move</button>
        <div class="test-area">
            <div class="test-item" [class.test-catched]="aaaa">abc</div>
        </div>
    `,
    styles: [`
        :host{
            display: block;
            border:solid 1px green;
            position: absolute;
        }

        .test-area{
            width: 222px;
            height: 222px;
            border: solid 1px coral;
            poistion: relative;
        }

        .test-item{
            position: absolute;
            left: 0;
            top: 0;
            width: 33px;
            height: 33px;
            border:solid 1px blue;
            transition: all 0.5s ease-in-out;
        }

        .test-catched{
            left: 111px;
            top: 111px;
        }

        button{
            bottom: -33px; 
            right: 33px; 
            position: absolute;
        }
    `]
})
export class TestAnimation {

}
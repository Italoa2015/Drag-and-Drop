import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Item } from "../../app/ui/model";
import { History } from '../../app/ui/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clients: Item[];

  allItems: any[];
  histories: History[] = [];
  isOverlapped = false;

  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor(public navCtrl: NavController, private element: ElementRef, private statusBar: StatusBar) {
  }

  onItemDropped(item: Item) {
    item.isMoved = false;
    this.isOverlapped = this.checkOverlap(item);
    if (this.isOverlapped) {
      // update catched items in cloud
      this.updateItemsInCloud();
      // update histroy entries
      this.histories.push(new History(item.id, new Date().toDateString(), item.name))
      // update selectable items
      this.clients.splice(this.clients.indexOf(item), 1);
    }
    this.isOverlapped = false;
  }

  private onItemMoved(item: Item) {
    item.isMoved = true;
    return this.isOverlapped = this.checkOverlap(item);
  }

  ngOnInit() {
    this.generateDefaultItems();
    this.generateClients();
  }

  private generateDefaultItems(): void {
    this.allItems = [];
    for (let i = 0; i < 32; i++) {
      let tempObj = {
        id: i,
        hasItem: false
      }
      this.allItems.push(tempObj);
    }
  }

  private checkOverlap(item): boolean {
    let selector = "#" + item.id;
    let cloudPosition = this.element.nativeElement.querySelector('.cloud').getBoundingClientRect();
    let movablePosition = this.element.nativeElement.querySelector(selector).getBoundingClientRect();
    this.left = movablePosition.left;
    this.right = movablePosition.right;
    this.top = movablePosition.top;
    this.bottom = movablePosition.bottom;
    if (!(this.left > cloudPosition.right || this.right < cloudPosition.left
      || this.top > cloudPosition.bottom || this.bottom < cloudPosition.top)) {
      return true;
    } else {
      return false;
    }
  }

  private updateItemsInCloud() {
    for (let i = 0; i < this.allItems.length; i++) {
      if (!this.allItems[i].hasItem) {
        this.allItems[i].hasItem = true;
        break;
      }
    }
  }

  private generateClients() {
    this.clients = [
      new Item("client1", 'VPN A connection', false),
      new Item("client2", 'VPN B connection', false),
      new Item("client3", 'VPN C connection', false),
      new Item("client4", 'VPN D connection', false),
      new Item("client5", 'VPN E connection', false),
      new Item("client6", 'VPN F connection', false)
    ];
  }

  resetData() {
    this.generateDefaultItems();
    this.generateClients();
    this.histories = [];
  }
}

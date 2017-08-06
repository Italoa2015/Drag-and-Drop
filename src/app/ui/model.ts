export class Item {
    constructor(
        public id: string,
        public name: string,
        public isMoved: boolean
    ) { }
}

export class History {
    constructor(
        public id: string,
        public time: string,
        public itemName: string
    ) { }
}

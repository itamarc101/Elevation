import { makeAutoObservable } from "mobx"
import Item from "./ItemStore"

class ShoppingList {
    items = []

    constructor() {
        makeAutoObservable(this)
    }

    addItem = (name) => {
        this.items.push(new Item(name))
    }
}

const shoppingList = new ShoppingList()
export default shoppingList

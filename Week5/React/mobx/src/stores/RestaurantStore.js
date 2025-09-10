import { makeAutoObservable } from "mobx"

class RestaurantStore {
    reservations = [
        // example structure
        { id: 1, name: "Itamar", numPeople: 3, completed: false, seated: false },
        { id: 2, name: "John", numPeople: 2, completed: true, seated: true }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    get restPopulation() {
        return this.reservations
            .filter(r => r.seated && !r.completed)
            .reduce((sum, r) => sum + r.numPeople, 0)
    }

    get completedTables() {
        return this.reservations.filter(r => r.completed).length
    }

    completeRes = (id) => {
        const res = this.reservations.find(r => r.id === id)
        if (res) {
            res.completed = true
            res.seated = false // optional: once completed, no longer seated
        }
    }

    seatRes = (id) => {
        const res = this.reservations.find(r => r.id === id)
        if (res) {
            res.seated = true
        }
    }

    addRes = (name, numPeople) => {
        this.reservations.push({
            id: Date.now(),
            name,
            numPeople,
            completed: false,
            seated: false
        })
    }
}

export const restaurantStore = new RestaurantStore()

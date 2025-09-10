import React from "react"
import { observer } from "mobx-react-lite"
import { restaurantStore } from "../stores/RestaurantStore"

const Reservation = observer(({ res }) => {
    return (
        <div className={res.completed ? "conditional" : ""}>
            <span>
                {res.name} – {res.numPeople} people
            </span>
            <button onClick={() => restaurantStore.seatRes(res.id)}>Seat</button>
            <button onClick={() => restaurantStore.completeRes(res.id)}>Complete</button>
        </div>
    )
})

export default Reservation

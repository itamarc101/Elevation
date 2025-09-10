import React from "react"
import { observer } from "mobx-react-lite"
import { restaurantStore } from "../stores/RestaurantStore"
import { generalStore } from "../stores/GeneralStore"
import Reservation from "./Reservation"

const Restaurants = observer(() => {
    return (
        <div>
            <h2>Restaurant Dashboard</h2>

            {/* ✅ Render computed values */}
            <div>People in restaurant: {restaurantStore.restPopulation}</div>
            <div>Completed tables: {restaurantStore.completedTables}</div>

            {/* ✅ Reservation list */}
            <div>
                {restaurantStore.reservations.map(res => (
                    <Reservation key={res.id} res={res} />
                ))}
            </div>

            {/* ✅ Add reservation section */}
            <input
                placeholder="Name"
                value={generalStore.reservationNameInput}
                onChange={e => generalStore.setReservationName(e.target.value)}
            />
            <input
                placeholder="Number of People"
                type="number"
                value={generalStore.reservationNumPeopleInput}
                onChange={e => generalStore.setReservationNumPeople(Number(e.target.value))}
            />
            <button
                onClick={() =>
                    restaurantStore.addRes(
                        generalStore.reservationNameInput,
                        generalStore.reservationNumPeopleInput
                    )
                }
            >
                Add Reservation
            </button>
        </div>
    )
})

export default Restaurants

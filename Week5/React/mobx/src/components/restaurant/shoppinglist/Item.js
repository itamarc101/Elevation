import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import shoppingList from "../stores/ShoppingList"

const Item = observer(({ item }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newLocation, setNewLocation] = useState(item.location)

    const handleEdit = () => {
        shoppingList.editItem(item.name, newLocation)
        setIsEditing(false)
    }

    return (
        <div>
            <span>{item.name} – {item.location}</span>

            {!isEditing && (
                <button className="editButton" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            )}

            {isEditing && (
                <div>
                    <input
                        value={newLocation}
                        onChange={e => setNewLocation(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            )}
        </div>
    )
})

export default Item

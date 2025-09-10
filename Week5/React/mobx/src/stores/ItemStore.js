import React from "react"
import { observer } from "mobx-react-lite"

const Item = observer(({ item }) => {
    return (
        <div>
            <span>{item.name} – {item.location}</span>
        </div>
    )
})

export default Item

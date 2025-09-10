import React from "react"
import Restaurants from "./components/Restaurant/Restaurants"
import ShoppingListApp from "./components/ShoppingList/ShoppingListApp"

function App() {
  return (
    <div>
      <h1>MobX Practice</h1>
      <Restaurants />
      <hr />
      <ShoppingListApp />
    </div>
  )
}

export default App

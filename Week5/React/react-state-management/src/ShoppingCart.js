import React, { useReducer } from 'react';

// Initial state
const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = { ...action.data, id: Date.now() };
      const newItems = [...state.items, newItem];
      const newTotal = state.total + newItem.price;
      const newItemCount = state.itemCount + 1;
      return { items: newItems, total: newTotal, itemCount: newItemCount };
    }

    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.data);
      if (!itemToRemove) return state; // edge case: item not found

      const newItems = state.items.filter(item => item.id !== action.data);
      const newTotal = state.total - itemToRemove.price;
      const newItemCount = state.itemCount - 1;
      return { items: newItems, total: newTotal, itemCount: newItemCount };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sample products
  const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 599 },
    { name: 'Headphones', price: 199 }
  ];

  return (
    <div>
      <h2>Shopping Cart ({state.itemCount} items) - Total: ${state.total}</h2>
      
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })} style={{ marginBottom: '10px' }}>
        Clear Cart
      </button>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {products.map((product, idx) => (
          <button 
            key={idx} 
            onClick={() => dispatch({ type: 'ADD_ITEM', data: product })}
          >
            Add {product.name} (${product.price})
          </button>
        ))}
      </div>

      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', data: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
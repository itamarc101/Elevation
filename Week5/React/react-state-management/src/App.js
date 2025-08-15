import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart';


function App() {
  return (
    <div style={{ padding: '20px'}}>
      <h1>Shopping cart with useReducer</h1>
      <ShoppingCart />
    </div>
  );
}

export default App;

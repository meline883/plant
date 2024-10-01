import './App.css';
import { CartProvider } from './container/Shop/CartContext';
import { MyRouter } from './Router/MyRouter';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <MyRouter />
      </CartProvider>
    </div>
  );
}

export default App;

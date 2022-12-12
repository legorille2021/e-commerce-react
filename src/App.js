
import './App.css';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';


// CartProvider componente crea un contesto per l'utilizzo di un carrello. Crea un oggetto carrello
// e callback a cui qualsiasi componente discendente può accedere utilizzando
// l' useCarthook e i relativi hook. CartProvider esegue anche 
//eventuali props di callback quando viene eseguita un'azione pertinente. 
function App() {
  return (
    <div >
      <CartProvider>
      < Home />
      <Cart />
      </CartProvider>
    </div>
  );
}

export default App;

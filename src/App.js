import './App.css';
import CustomNavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemWrapper/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import Promises from './components/Promises/Promises';
import { products } from './data/productInfo';

function App() {
  return (
    <div>
      <CustomNavBar />
      <ItemListContainer greeting={"Hello World"} />
      <Promises products={products} />
    </div>

  );
}

export default App;

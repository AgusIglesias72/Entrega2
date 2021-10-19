import logo from './logo.svg';
import './App.css';
import CustomNavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemWrapper/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <CustomNavBar />
      <ItemListContainer greeting={"Hello World"} />
      <ItemCount />
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CustomNavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemWrapper/ItemListContainer';

function App() {
  return (
    <div>
      <CustomNavBar />
      <ItemListContainer greeting={"Hello World"} />
    </div>

  );
}

export default App;

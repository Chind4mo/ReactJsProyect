import "./App.css";
import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListConteiner />
    </div>
  );
}

export default App;
import './App.css';
import ListOfGifts from './components/listOfGifts';
import {Link,Route} from "wouter"

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Hola</h1>
          <Link to='/gif/wolverine'>Gifs wolverine</Link>
          <Link to='/gif/hisoka'>Gifs hisoka</Link>
          <Link to='/gif/goku'>Gifs goku</Link>
          <Link to='/gif/hulk'>Gifs hulk</Link>
          
          <Route 
          component={ListOfGifts}
          path="/gif/:keyword" 
          />
      </div>
    </div>
  );
}

export default App;

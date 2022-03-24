import './App.css';
import {Link,Route} from "wouter"
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResult from './pages/SearchResult'
import img from './facemask.png'
import { GifContextProvider } from './context/GifContextProvider';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Link to="/">  
          <img src={img}/>
        </Link> 
        <GifContextProvider>
        <Route component={Home} path='/'/>
        <Route component={SearchResult} path="/search/:keyword"/>
        <Route component={Detail} path="/gif/:id" />
        </GifContextProvider>
      </div>
    </div>
  );
}

export default App;

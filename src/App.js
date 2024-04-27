import Home from './Pages/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes
} from "react-router-dom";
import SearchPage from './Pages/SearchPage';



function App() {
  return (

    
    <div className="App">
     
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;

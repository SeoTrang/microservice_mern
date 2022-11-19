
import './App.css';
import RoutesWeb from './routes/RoutesWeb';


import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Login from './components/auth/login';
import Regsiter from './components/auth/regsiter';

function App() {
  return (
    
    
    <div className="App">
     
      
      <RoutesWeb/>
      
  
    </div>
  );
}

export default App;


import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signin from './Components/Signin';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Login from './Components/Login';
import Godofragnorok from './pages/Godofragnorok'
import Grantturismo from './pages/Grantturismo';
import Spiderman2 from './pages/Spiderman2';
import Spiderman from './pages/Spiderman';
import Gostoftsusima from './pages/Gostoftsusima';
import Rdr2 from './pages/Rdr2';
import GTA5 from './pages/GTA5';
import FC24 from './pages/FC24';
import Footer from './Components/Footer';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
// import ApplicationForm from './ApplicationForm';
function App() {
  return (
    <div className="App">
     { <Router>
        <Routes>    
         <Route path="/" exact={true} element={<HomePage/>}></Route>
         <Route path="/Signin" element={<Signin/>}></Route>
         <Route path="/GamePage" element={<GamePage/>}></Route>
         <Route path="/Login" element={<Login/>}></Route>
         <Route path="/Godofragnorok" element={<Godofragnorok/>}></Route>
         <Route path="/Grantturismo" element={<Grantturismo/>}></Route>
         <Route path="/Spiderman2" element={<Spiderman2/>}></Route>
         <Route path="/Spiderman" element={<Spiderman/>}></Route>
         <Route path="/Gostoftsusima" element={<Gostoftsusima/>}></Route>
         <Route path="/Rdr2" element={<Rdr2/>}></Route>
         <Route path="/FC24" element={<FC24/>}></Route>
         <Route path="/GTA5" element={<GTA5/>}></Route>
         <Route path="/Footer" element={<Footer/>}></Route>
         <Route path="/Cart" element={<Cart/>}></Route>
         <Route path="/AboutUs" element={<AboutUs/>}></Route>
        </Routes> 
      </Router> }
    </div>
  );
}

export default App;

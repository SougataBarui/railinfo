import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './App';

import Footer from './components/footer';
import Menubar from './components/menubar';
import Home from './components/home';
import Zones from './components/zones';
import Zoneinfo from './components/zonesinfo';  
import Login from './components/login';


const AppContainer = ()=>{
  return(
    <>
    <Router>
      
      <Menubar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/Zoneinfo' element={<Zoneinfo/>}/>
      </Routes>
      
      <Routes>
        <Route path='/Zones' element={<Zones/>}/>
      </Routes>
      
      
      <Footer />
    </Router>
  </>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);


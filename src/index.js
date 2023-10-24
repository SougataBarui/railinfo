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
import Signup from './components/signup';
import Signal from './components/signal';
import Top from './components/top';
import Loco from './components/locomotives';
import Elecloco from './components/elecloco';
import Mixelec from './components/mixelec';
import Passelec from './components/passelec';
import Goodselec from './components/goodselec';
import Dieloco from './components/dieloco';
import Mixdie from './components/mixdie';
import Passdie from './components/passdie';
import Goodsdie from './components/goodsdie';
import Shundie from './components/shundie';
import Station from './components/station';

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
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path='/Zoneinfo' element={<Zoneinfo/>}/>
      </Routes>
      <Routes>
        <Route path='/Loco' element={<Loco/>}/>
      </Routes>
      <Routes>
        <Route path='/Elecloco' element={<Elecloco/>}/>
      </Routes>
      <Routes>
        <Route path='/Mixelec' element={<Mixelec/>}/>
      </Routes>
      <Routes>
        <Route path='/Passelec' element={<Passelec/>}/>
      </Routes>
      <Routes>
        <Route path='/Goodselec' element={<Goodselec/>}/>
      </Routes>
      <Routes>
        <Route path='/Dieloco' element={<Dieloco/>}/>
      </Routes>
      <Routes>
        <Route path='/Mixdie' element={<Mixdie/>}/>
      </Routes>
      <Routes>
        <Route path='/Passdie' element={<Passdie/>}/>
      </Routes>
      <Routes>
        <Route path='/Goodsdie' element={<Goodsdie/>}/>
      </Routes>
      <Routes>
        <Route path='/Shundie' element={<Shundie/>}/>
      </Routes>
      <Routes>
        <Route path='/Station' element={<Station/>}/>
      </Routes>
      <Routes>
        <Route path='/Signal' element={<Signal/>}/>
      </Routes>
      <Routes>
        <Route path='/Zones' element={<Zones/>}/>
      </Routes>
      
      <Top/>
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



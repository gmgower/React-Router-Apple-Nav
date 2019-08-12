import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Support from './components/Support'

// AppleProducts
import Mac from './AppleProducts/Mac.jsx'
import IPad from './AppleProducts/IPad.jsx'
import IPhone from './AppleProducts/IPhone.jsx'
import Watch from './AppleProducts/Watch.jsx'
import TV from './AppleProducts/TV.jsx'
import Music from './AppleProducts/Music.jsx'

// Data
import Data from './Data.js'

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Route path='/' component={Home}/>
      <Route path='/mac' component={Mac}/>
      <Route path='/ipad' component={IPad}/>
      <Route path='/iphone' component={IPhone}/>
      <Route path='/watch' component={Watch}/>
      <Route path='/tv' component={TV}/>
      <Route path='/music' component={Music}/>
      <Route path='/support' component={Support}/>

      <h1>NavBar</h1>   
            
    </div>

  )
}

export default App;

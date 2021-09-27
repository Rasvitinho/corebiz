
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import banner from './assets/banner.png';
import { Route, BrowserRouter, Switch }  from "react-router-dom";
import HomePage from './pages/home';
import ContactPage from './pages/contact';


function App() {  
  

  return (
    <div>
      <img src= { logo } className="logo"/>
      <img src= { banner } className="banner"/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contato" component={ContactPage} />
      </Switch>
    </BrowserRouter>
    <Footer />
    </div>
    
    )
}

export default App;
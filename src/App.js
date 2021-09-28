
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import banner from './assets/banner.png';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from './pages/home';


function App() {


  return (
    <div>
      <div style={{ textAlign: "center" }}>
        < img src={logo} className="logo" />

      </div>

      <img src={banner} className="banner" />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <Footer />

    </div>

  )
}

export default App;
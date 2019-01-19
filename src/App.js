import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/landingPage.js'
import FirstSectionNavbar from './components/sectionsWithNavbar/firstSectionWithNavbar'
import SecondSectionNavbar from './components/sectionsWithNavbar/secondSectionWithNavbar'
import ThirdSectionNavbar from './components/sectionsWithNavbar/thirdSectionWithNavbar'
import FourthSectionNavbar from './components/sectionsWithNavbar/fourthSectionWithNavbar'
import FifthSectionNavbar from'./components/sectionsWithNavbar/fifthSectionWithNavbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//In order to guarantee that it was possible to have a one scrollable page and yet to have individual pages with the right URL, I solved it by having versions with and without the navbar//

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/home" component={LandingPage} />
          <Route path="/services" component={SecondSectionNavbar} />
          <Route path="/network" component={ThirdSectionNavbar} />
          <Route path="/aboutus" component={FourthSectionNavbar} />
          <Route path="/contact" component={FifthSectionNavbar} />
      </Switch>
  </ BrowserRouter>
    );
  }
}

export default App;

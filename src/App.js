import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/home/Home';
import About from './components/about/About';
import Squads from './components/squads/Squads';
import News from './components/news/News';
import Servers from './components/servers/Servers';
import Error from './components/error/Error';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App__container">
            <Navigation />
            <div className="home__container">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/news" component={News}/>
                <Route path="/squads" component={Squads}/>
                <Route path="/servers" component={Servers}/>
                <Route path="/about" component={About}/>
                <Route component={Error}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

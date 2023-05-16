import React, { Component } from 'react';
import Body from './layout/Body';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SearchList from './page/SearchList';
import Write from './page/Write';
import User from './page/User';
import Talk from './page/Talk';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProductList from './page/ProductList';
import Famous from './page/Famous';
import Body2 from './layout/Body2';


class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Body /><Body2 /><Footer /> </Route>
            <Route exact path='/search'>
              <SearchList /> </Route>
            <Route exact path='/write'>
              <Write /> </Route>
            <Route exact path='/user'>
              <User /> </Route>
            <Route exact path='/talk'>
              <Talk /> </Route>
            <Route exact path='/productlist'>
              <ProductList /> </Route>
            <Route exact path='/famous'>
              <Famous /> </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

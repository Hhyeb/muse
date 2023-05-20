import React, { Component } from 'react';
import Body from './layout/Body';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SearchList from './page/SearchList';
import Posts from './api/members/Posts';
import User from './page/User';
import Talk from './page/Talk';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Followings from './api/members/Followings';
import Body2 from './layout/Body2';
import Body3 from './layout/Body3';
import Body4 from './layout/Body4';
import Magazine from './api/magazine/Magazine';
import Categories from './api/categories/Categories';
import Notice from './api/notice/Notice';
import Customer from './api/customer_service/Customer';


class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Body />
              <Body2 />
              <Body3 />
              <Body4 />
              <Footer /> </Route>
            <Route exact path='/search'>
              <SearchList /> </Route>
            <Route exact path='/api/members/posts'>
              <Posts /> </Route>
            <Route exact path='/user'>
              <User /> </Route>
            <Route exact path='/talk'>
              <Talk /> </Route>
            <Route exact path='/api/categories'>
              <Categories /> </Route>
            <Route exact path='/api/members/followings'>
              <Followings /> </Route>
            <Route exact path='/api/magazine'>
              <Magazine /> </Route>
            <Route exact path='/api/notice'>
              <Notice /> </Route>
            <Route exact path='/api/cutomer_service'>
              <Customer />  </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

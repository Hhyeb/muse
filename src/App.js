import React, { Component } from 'react';
import Body from './layout/Body';
import Footer from './layout/Footer';
import Header from './layout/Header';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

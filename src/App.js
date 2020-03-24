import React, { Component } from 'react';
import Header from './Header';
import Menu from  './Menu';
import Footer from './Footer';
import Content from './page/Content';
import {BrowserRouter} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
              <Header/>
              <Menu/>
              <Content/>
              <Footer/>
        </BrowserRouter>
       
        
      </div>
    )
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HTop from './components/header';
import Fbottom from './components/footer'

class HomePage extends Component{
  render(){
    return(
<div>
  <HTop></HTop>
  <main id="content" className="main-content" role="main">
    {"{"}
    {"{"} content {"}"}
    {"}"}
   <Fbottom></Fbottom>
  </main>
</div>

    );
  }
}
export default HomePage;
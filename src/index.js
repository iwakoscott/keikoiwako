import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Content from './components/content';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Website extends Component {

  render(){
    return (
      <div className="container-fluid">
        <Title />
        <Content />
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

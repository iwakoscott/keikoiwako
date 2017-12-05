import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Website extends Component {

  render(){
    return (
      <h1>Hello World!</h1>
    );
  } // Website.render

} // Website

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

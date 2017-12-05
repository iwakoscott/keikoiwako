import React, { Component } from 'react';
import '../static/css/title.css'

class Title extends Component {

  constructor(){
    super();

    this.scrollPageDown = this.scrollPageDown.bind(this);
  } // Title.constructor

  scrollPageDown(){
    alert('Clicked!');
  } // Title.scrollPageDown

  render(){
    return (
      <div className="row title-row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 title">
          <h1 id="title-name">Keiko Iwako</h1>
          <h1 id="title-slidedown-icon"
              style={{'cursor': 'pointer'}}
              onClick={() => {this.scrollPageDown()}}><i className="fa fa-angle-double-down fa-lg"></i>
          </h1>
        </div>
      </div>
    );
  }

} // Title

export default Title;

import React, { Component } from 'react';
import '../static/css/title.css'

const titleStyles = {
  transition: 'opacity 1.2s ease-out'
}

const iconStyles = {
  transition: 'opacity 500ms ease-in'
}

class Title extends Component {

  constructor(){
    super();
    this.state = {
      titleOpacity: 0,
      iconOpacity: 1,
      pulse: null,
    }

    this.scrollPageDown = this.scrollPageDown.bind(this);
    this.pulse = this.pulse.bind(this);
  } // Title.constructor

  pulse(){
    this.setState({ iconOpacity: this.state.iconOpacity ? 0 : 1 });
  } // Title.pulse

  scrollPageDown(){
    let target = document.getElementById('content-profile-box');
    target.scrollIntoView();
  } // Title.scrollPageDown

  componentDidMount(){
    var self = this;
    setTimeout(() => {
      this.setState({
        titleOpacity: 1,
        pulse: setInterval(this.pulse, 500)
      });
    }, 1500);
  } // Title.componentDidMount

  render(){
    return (
      <div className="row title-row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 title">
          <h1 id="title-name" style={{...titleStyles, opacity: this.state.titleOpacity}}>
            Keiko Iwako
            <p id="title-japanese-name">
              岩子敬子
            </p>
            </h1>
          <h1 id="title-slidedown-icon"
              style={{...iconStyles, 'cursor': 'pointer', opacity: this.state.iconOpacity}}
              onClick={() => {this.scrollPageDown()}}><i className="fa fa-angle-double-up fa-lg"></i>
          </h1>
        </div>
      </div>
    );
  }

} // Title

export default Title;

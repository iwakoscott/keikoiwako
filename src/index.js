import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Profile from './components/content';
import AboutMe from './components/aboutme';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Website extends Component {

  constructor(){
    super();
    this.state = {};
  } // Website.constructor

  componentWillMount(){
    /* Before mounting I want to make a call to the instagram API */
    
  } // Website.componentWillMount

  render(){
    return (
      <div className="container-fluid">
        <Title />
        <Profile />
        <AboutMe />
        <Testimonials />
        <Contact />
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

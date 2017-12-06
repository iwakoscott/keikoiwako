import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Profile from './components/content';
import AboutMe from './components/aboutme';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import PhotoViewer from './components/photoViewer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

class Website extends Component {

  constructor(){
    super();
    this.state = {
      responseData: [],
      apiSuccess: false
    };
  } // Website.constructor

  componentDidMount(){
    var self = this;
    /* Before mounting I want to make a call to the instagram API */
    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=6658228117.267de99.117ee32d6e3c4fb1a45b3a00539cc379',
      datatype: "jsonp",
      success: (response) => {
        let data = response.data;
        this.setState({
          responseData: data,
          apiSuccess: true
        });
      },
      error: () => {
        let apiSuccess = false;
        self.setState({ apiSuccess });
      }
    });
  } // Website.componentWillMount

  render(){
    return (
      <div className="container-fluid">
        <Title />
        <Profile />
        <AboutMe />
        <Testimonials />
        <PhotoViewer data={this.state.apiSuccess ? this.state.responseData : null}/>
        <Contact />
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(
  <Website/>,
  document.getElementById('root')
);

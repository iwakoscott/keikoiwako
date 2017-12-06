import React from 'react';
import '../static/css/contact.css'

function Contact(){
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 contact-box">
        <i className="fa fa-envelope-o fa-5x"></i>
        <p className="user">{"keikoiwako@gmail.com"}</p>
      </div>
      <div className="col-md-6 col-lg-6 contact-box">
        <i className="fa fa-instagram fa-5x"></i>
        <p className="user">{"keiko.iwako"}</p>
      </div>
    </div>
  );
} // Contact

export default Contact;

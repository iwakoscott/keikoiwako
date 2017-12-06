import React from 'react';
import '../static/css/profile.css';
import profilePicture from '../static/img/headshot.jpg';

function Profile(){

  const quote = "It's simple. Food should be beautiful - in taste and presentation.";

  return (
      <div className="row content-profile">

        <div id="content-profile-box" className="col-md-6 col-lg-6" align="center">
          <img className="img-fluid"
               id="content-profile-pic"
               alt="Credit: Marcia Siggins Jonas"
               src={profilePicture}/>
        </div>

        <div id="content-quote-box" className="col-md-6 col-lg-6" align="center">
          <blockquote id="content-quote" className="blockquote">
            <i className="fa fa-quote-left"></i>
            &nbsp;
            {quote}
            &nbsp;
            <i className="fa fa-quote-right"></i>
          </blockquote>
        </div>
      </div>
  );
} // Profile

export default Profile;

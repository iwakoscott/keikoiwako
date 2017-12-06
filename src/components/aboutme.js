import React from 'react';
import '../static/css/aboutme.css';

function AboutMe(){
  return (
    <div className="row content-content">

      <div className="col-lg-4 content-box" id="who-am-i">
        <h1 className="box-title">{"Who am I?"}</h1>
        <p>
          {
            "Hello, my name is Keiko. I am a proud mother of 3 University \
            of California graduates. I am an aspiring Modern French Chef \
            and Maître Fromager. I am a bread connoisseur. I am a \
            perfectionist at heart."
          }
        </p>
      </div>

      <div className="col-lg-4 content-box" id="my-interests">
        <h1 className="box-title">{"My Interests?"}</h1>
        <p>
          {
            "Molecular Gastronomy, Bread Making, Precision Cutting,\
            Self Improvement, Plating, Hiking, Fine Cheeses, Udon Making,\
            Pasta/Ravioli Making."
          }
        </p>
      </div>

      <div className="col-lg-4 content-box" id="my-philosophy">
        <h1 className="box-title">{"My Philosophy?"}</h1>
        <p>
          {
            "Keep a strong work ethic. Show up on time. Learn something new\
            everyday. Details, details, details. Take ownership of your work."
          }
        </p>
      </div>

    </div>
  );
} // AboutMe

export default AboutMe;

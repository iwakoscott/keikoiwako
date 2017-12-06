import React from 'react';
import '../static/css/testimonials.css';

function Testimonials(){
  return (
    <div className="row">
      <div className="testimonial-box">
        <blockquote className="blockquote testimonial">
          <i className="fa fa-quote-left"></i>
          &nbsp;
          {
            "Ms. Keiko Iwako always demonstrated great skills and a strong \
            desire to better herself as a person and as a chef... It is clear \
            that she has a passion for great food and I would not hesitate an \
            instant to frequent her establishment or to purchase some of her \
            great preparations."
          }
          &nbsp;
          <i className="fa fa-quote-right"></i>
          <footer className="blockquote-footer chef-name">Chef Fabrice Poigin</footer>
        </blockquote>
      </div>
    </div>
  );
} // Testimonials

export default Testimonials;

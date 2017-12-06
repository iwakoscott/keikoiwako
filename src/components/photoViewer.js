import React, { Component } from 'react';
import '../static/css/photoViewer.css';

class PhotoViewer extends Component {

  constructor(){
    super();
    this.state = {
      currentPhoto: 0
    };

    this.renderPhoto = this.renderPhoto.bind(this);
  } // PhotoViewer.constructor

  renderPhoto(object){
    const imgURL = object.images.low_resolution.url;
    const alt = object.caption ? object.caption.text : 'keiko.iwako';
    const linkToInstaImg = object.link;

    return (
      <div className="col-md-3 col-lg-3 photo-box">
        <figure>
          <a href={linkToInstaImg} target="_blank">
            <img style={{'width': '300px', 'height': '300px'}} className="insta-img" src={imgURL} alt={alt} />
          </a>
          <figcaption style={{'width': '300px'}}><i className="fa fa-instagram fa-lg"></i> -- {alt}</figcaption>
        </figure>
      </div>
    );
  } // PhotoViewer.renderPhoto

  render(){
    let data = this.props.data;
    console.log(data);
    var viewer;

    if (data) {
      viewer = (
        <div className="row">
          {this.renderPhoto(data[this.state.currentPhoto])}
        </div>
      );
    } // if we get some api data

    else {
      viewer = (
        <div className="row">
          <button className="btn btn-success">follow me on Instagram</button>
        </div>
      );
    }
    return viewer;

  } // PhotoViewer.render

} // PhotoViewer

export default PhotoViewer;

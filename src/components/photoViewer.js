import React, { Component } from 'react';
import '../static/css/photoViewer.css';

class PhotoViewer extends Component {

  constructor(){
    super();
    this.state = {
      currentPhoto: 0
    };

    this.renderPhotos = this.renderPhotos.bind(this);
  } // PhotoViewer.constructor

  renderPhotos(objects){

    let formattedData = objects.map((object) => {
      const photoID = object.id;
      const imgURL = object.images.low_resolution.url;
      const alt = object.caption ? object.caption.text : 'keiko.iwako';
      const linkToInstaImg = object.link;
      const dateObject = new Date(object.caption.created_time * 1000);
      const comma = dateObject.toLocaleString().indexOf(',');
      const date = dateObject.toLocaleString().slice(0, comma);

      return (
        <div key={photoID} className="col-md-4 col-lg-4 photo-box">
          <figure>
            <a href={linkToInstaImg} target="_blank">
              <img style={{'width': '285px', 'height': '285px'}} className="insta-img" src={imgURL} alt={alt} />
            </a>
            <figcaption style={{'width': '285px'}}>{date}<br/>{alt}</figcaption>
          </figure>
        </div>
      );
    });

    return formattedData;
  } // PhotoViewer.renderPhoto

  render(){
    let data = this.props.data;
    console.log(data);
    var viewer;

    if (data) {
      let recentFour = data.slice(0, 3);
      viewer = (
      <div>
        <div className="row photo-viewer">
          { this.renderPhotos(recentFour) }
        </div>
        <div className="row button-row">
          <button onClick={() => {window.open('https://www.instagram.com/keiko.iwako/');}}
                  className="btn btn-primary btn-lg insta-btn">see more on <i className="fa fa-instagram fa-lg"></i> Instagram.</button>
        </div>
      </div>
      );
    } // if we get some api data

    else {
      viewer = (
        <div className="row button-row">
          <button onClick={() => {window.open('https://www.instagram.com/keiko.iwako/');}}
                  className="btn btn-primary insta-btn">follow me on <i className="fa fa-instagram fa-lg"></i> Instagram.</button>
        </div>
      );
    }
    return viewer;

  } // PhotoViewer.render

} // PhotoViewer

export default PhotoViewer;

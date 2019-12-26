import React, { Component } from "react";
import firebase from "./firebase";
import "./SongPage.css";

class SongPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asrc: ""
    };
    this.storageRef = firebase.storage().ref("");
  }

  componentDidMount() {
    this.storageRef
      .child(this.props.asrc)
      .getDownloadURL()
      .then(url => {
        this.setState({
          asrc: url
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="wrapper">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          onClick={this.props.backClicked}
          className="back"
        >
          <path
            fill="#111111"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
        <div className="song-page">
          <img
            className="page-image"
            src={this.props.isrc}
            alt="Realaxing GIF"
          />
          <h3 className="song-title-page">{this.props.title}</h3>
          <div className="audio-player">
            <audio src={this.state.asrc} controls>
              <source src="" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    );
  }
}

export default SongPage;

import React from "react";

function SongCard(props) {
  return (
    <div
      className="song"
      onClick={e => props.songClicked(props.asrc, props.isrc, props.title)}
    >
      <img src={props.isrc} alt="Relaxing GIF" className="image" />
      <h4>{props.title}</h4>
    </div>
  );
}

export default SongCard;

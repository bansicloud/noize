import React from "react";
import "./Library.css";
import SongCard from "./SongCard";
import images from "./images";

function Library(props) {
  const audios = [];
  const list = [];

  const titles = [
    "Waterfall in a forest",
    "Thunderstorm & Rain",
    "Cafe Music",
    "Brown Noise",
    "Rainy Day",
    "Medeival Town",
    "Celestial Noise",
    "Metropolis Soundscape",
    "Snowy Blizzard",
    "Forest Ambience"
  ];

  for (let i = 1; i <= 10; i++) {
    audios.push(`a${i}.mp3`);
    list.push([audios[i - 1], images[i - 1], titles[i - 1]]);
  }

  const songs = list.map(arr => {
    return (
      <SongCard
        key={arr.toString()}
        songClicked={props.songClicked}
        asrc={arr[0]}
        isrc={arr[1]}
        title={arr[2]}
      />
    );
  });

  const finalSongs = [];

  for (let i = 0; i < 10; i += 3) {
    finalSongs.push(
      <div className="row" key={i}>
        {songs[i]}
        {songs[i + 1] ? songs[i + 1] : undefined}
        {songs[i + 2] ? songs[i + 2] : undefined}
      </div>
    );
  }

  return (
    <div className="library">
      <div className="header-text">
        <h2>Simple background/white noise to relax or focus</h2>
        <p>
          Find out more about this project in the{" "}
          <a href="About Page" onClick={e => props.aboutClicked(e)}>
            About
          </a>{" "}
          section and if you’re interested you can find the source code on{" "}
          <a href="https://github.com/kartiknair">GitHub</a>
        </p>
      </div>
      {finalSongs}
    </div>
  );
}

export default Library;

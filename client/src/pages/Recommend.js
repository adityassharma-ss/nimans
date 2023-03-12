import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/App.css';

const Recommend = (props) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecommendations();
  }, []); // empty dependency array to only call the function once

  const getRecommendations = () => {
    setIsLoading(true);
    Axios.post('https://18.141.188.196/recommend', {
      mood: props.mood,
    })
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let currentAudio = new Audio();
  let isPlaying = false;
  let audio = new Audio();

  const playSong = (preview, id, index) => {
    audio.src = preview;

    if (!isPlaying) {
      isPlaying = true;
      audio.play();
      currentAudio.src = audio.src;
    } else {
      if (currentAudio.src === audio.src) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        currentAudio.src = audio.src;
        isPlaying = true;
      }
    }
  };

  return (
    <div className='recommend-container'>
      <h3 className='recommend-heading'>
        Song Recommendations as {props.mood} per your Mood
      </h3>
      <div className='recommend-button-container'>
        <button
          className='recommend-button'
          onClick={getRecommendations}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Just click here & let us do the magic'}
        </button>
      </div>
      {result.length > 0 && (
        <div className='recommend-card-container'>
          {result.map((songs, index) => (
            <div className='recommend-card' key={songs.spotify_id}>
              <img
                src={songs.image_url}
                alt={songs.song_name}
                className='recommend-image'
                onClick={() => playSong(songs.preview, songs.spotify_id, index)}
              />
              <div className='recommend-text-container'>
                <div className='recommend-song'>{songs.song_name}</div>
                <div className='recommend-artist'>{songs.artist_name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommend;


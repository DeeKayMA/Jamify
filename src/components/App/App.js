import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import {Spotify} from '../../util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const token = await Spotify.getAccessToken();
  //     if (token) {
  //     }
  //   };
  
  //   fetchToken();
  // }, []);


  const addTrack = (track) => {
    const existingTracks = playlistTracks.find(t => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTracks){
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  const removeTrack = (track) => {
    const existingTracks = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTracks);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }

  const search = (term) => {
    Spotify.search(term).then(result => setSearchResults(result));
    console.log(term)
  }

  return (
    <div>
      <h1><span className='highlight'>Jam</span>ify</h1>
      <div className='App'>
        {/* <!-- Add search bar component-->  */}
        <SearchBar onSearch={search}/>
        <div className='App-playlist'>
          {/* <!-- Add search results component--> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
          {/* <!-- Add Playlist  component--> */}
          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

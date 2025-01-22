import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import {Spotify} from '../../util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Landed In Brooklyn',
      artist: 'Khantrast',
      album: 'Landed In Brooklyn',
      id: 1
    },
    {
      name: 'The Largest',
      artist: 'BigXthaPlug',
      album: 'TAKE CARE',
      id: 2
    }]
  );
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {
        name: 'Mutt',
        artist: 'Leon Thomas',
        album: 'Mutt',
        id: 3
      },
      {
        name: 'On My Mama',
        artist: 'Victoria Monét',
        album: 'On My Mama',
        id: 4
      }]
  );

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
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
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

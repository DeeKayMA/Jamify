import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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

  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        {/* <!-- Add search bar component-->  */}
        <SearchBar />
        <div className='App-playlist'>
          {/* <!-- Add search results component--> */}
          <SearchResults userSearchResults={searchResults}/>
          {/* <!-- Add Playlist  component--> */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;

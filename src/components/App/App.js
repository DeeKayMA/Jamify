import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        {/* <!-- Add search bar component-->  */}
        <SearchBar/>
        <div className='App-playlist'>
        {/* <!-- Add search results component--> */}
        <SearchResults/>
        {/* <!-- Add Playlist  component--> */}
        <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;

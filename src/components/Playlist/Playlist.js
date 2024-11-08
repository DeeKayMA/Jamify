import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/TrackList'

const Playlist = () => {

    return (
    <div className={styles.Playlist}>
        <input defaultValue='New Playlist'/>
        <TrackList/>
        <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
    </div>
    );
};

export default Playlist;
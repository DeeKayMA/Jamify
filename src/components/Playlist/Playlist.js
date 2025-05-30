import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/TrackList'

const Playlist = (props) => {

    const handleNameChange = ({target}) => {
        props.onNameChange(target.value)
    }

    return (
    <div className={styles.Playlist}>
        <input defaultValue='New Playlist' onChange={handleNameChange}/>
        <TrackList userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
        <button className={styles.PlaylistSave} onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
    );
};

export default Playlist;
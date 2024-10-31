import React from 'react';
import styles from './Track.module.css';

const Track = () => {

    return (
    <div className={styles.Track}>
        <div className={styles.TrackInformation}>
            <h3>Track Name</h3>
            <p> Artist | Album</p>
        </div>
        <button class={styles.TrackAction}></button>
    </div>
    
    );
};

export default Track;
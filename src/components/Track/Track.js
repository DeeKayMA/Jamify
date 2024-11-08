import React from 'react';
import styles from './Track.module.css';

const Track = (props) => {


    // Creates the + - button
    const renderAction = () => {
        return (
        <button class={styles.TrackAction}>{props.isRemoval ? '-' : '+'}</button>
        )
    };

    return (
        <div className={styles.Track}>
            <div className={styles.TrackInformation}>
                <h3>{props.track.name}</h3>
                <p> {props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>

    );
};

export default Track;
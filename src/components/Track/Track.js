import React from 'react';
import styles from './Track.module.css';

const Track = (props) => {


    // Creates the + - button
    const renderAction = () => {
        if (props.isRemoval) {
            return <button className={styles.TrackAction} onClick={passTrackToRemove}>-</button>
        } else {
            return <button className={styles.TrackAction} onClick={passTrack}>+</button>
        }

        // return (
        // <button className={styles.TrackAction}>{props.isRemoval ? '-' : '+'}</button>
        // )
    };

    const passTrack = () => {
        props.onAdd(props.track)
    }
    const passTrackToRemove = () => {
        props.onRemove(props.track)
    }


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
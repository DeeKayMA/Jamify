import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

const TrackList = (props) => {

    return (
        <div className={styles.TrackList}>
            {/* Add a map method that renders a set of Track components  */}
            {(props.userSearchResults || []).map((track)=> (
                <Track 
                track={track} 
                key={track.id} 
                isRemoval={props.isRemoval} 
                onAdd={props.onAdd} 
                onRemove={props.onRemove}/>
            ))} 

            {/* {props.userSearchResults.map(track = () => {
                return (
                    <Track />
                )
            })} */}
        </div>
    );
};

export default TrackList;
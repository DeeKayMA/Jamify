import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    return (
    <div className={styles.SearchBar}>
        <input placeholder='Enter A Song BITCH!'/>
        <button className={styles.SearchButton}>SEARCH</button>
    </div>
    );
};

export default SearchBar;
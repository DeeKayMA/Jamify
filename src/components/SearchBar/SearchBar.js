import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

const [term, setTerm] = useState('');

const passTerm = () => {
    props.onSearch(term)
};

const handleTermChange = ({target}) => {
    setTerm(target.value);
}

    return (
    <div className={styles.SearchBar}>
        <input placeholder='Enter A Song BITCH!' onChange={handleTermChange}/>
        <button className={styles.SearchButton} onClick={passTerm}>SEARCH</button>
    </div>
    );
};

export default SearchBar;
import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

const [term, setTerm] = useState('');

const passTerm = () => {
    props.onSearch(term)
};
const handleEnter= (event) => {
    if (event.key === 'Enter') {
        props.onSearch(term);  // Call the onSearch function when Enter is pressed
    }
  };


const handleTermChange = ({target}) => {
    setTerm(target.value);
}

    return (
    <div className={styles.SearchBar}>
        <input placeholder='Search a song' onChange={handleTermChange} onKeyDown={handleEnter}/>
        <button className={styles.SearchButton} onClick={passTerm}>SEARCH</button>
    </div>
    );
};

export default SearchBar;
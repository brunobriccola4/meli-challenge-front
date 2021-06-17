import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/search.png';
import styles from './searchBar.module.scss';
import meliLogo from '../../../assets/meli-logo.png'

const SearchBar = (props) => {
    const [value, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(value);
    }

    return (
        <div className={styles.containerSearchBar}>
            <div className={styles.content}> 
                <Link to={'/'}>
                    <img src={meliLogo} alt='ML'/>
                </Link>
                <form className={styles.formContainerSearchBar} onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder='Nunca dejes de buscar' type='text' onKeyUp={ (e) => setSearchValue(e.target.value)} />
                    <button type='submit'>
                        <img src={searchIcon} alt='search'/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;